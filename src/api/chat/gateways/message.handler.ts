import { Injectable } from '@nestjs/common';
import { MessageHandlerRegistry } from './message-handler.registry';
import { ClientToServiceEvent, ServiceToClientEvent } from 'src/proto/protoMap';
import { ChatSocket } from 'src/types/socket.types';
import { UsersService } from 'src/api/web/users/users.service';
import { PrismaService } from 'src/core/database';
import {
  GetUserList,
  GetUserListResponse,
  ConversationInfo,
  SendMessageRequest,
  MessageInfo,
  GetConversationListRequest,
  GetConversationListResponse,
  GetMessageHistoryRequest,
  GetMessageHistoryResponse,
  ReadMessageRequest,
  ReadMessageResponse,
  AckSendMessage,
  NewUpdateMessage,
  IConversationInfo,
} from 'src/proto';
import { buildMessageInfoPayload } from '../utils/message-to-proto.util';
import { MessageService } from '../services/message.service';
import { ChatService } from '../services/chat.service';
import { Server } from 'socket.io';
import { RequestListParams } from 'src/common';
import { transformPaginationParams } from 'src/utils';

@Injectable()
export abstract class MessageHandler extends MessageHandlerRegistry {
  public abstract server: Server;
  protected abstract userSockets: Map<string, Set<string>>;

  constructor(
    private userService: UsersService,
    protected messageService: MessageService,
    protected chatService: ChatService,
    protected prisma: PrismaService,
  ) {
    super();
  }

  onModuleInit() {
    this.initializeHandlers();
  }
  /** 初始化消息处理器 */
  protected initializeHandlers(): void {
    this.handlers.set(ClientToServiceEvent.ping, (client) => this.handlePing(client));
    this.handlers.set(ClientToServiceEvent.getUserList, this.handleGetUserList);
    // this.handlers.set(ClientToServiceEvent.createConversation, this.handleCreateConversation);
    this.handlers.set(ClientToServiceEvent.sendMessage, this.handleSendMessage);
    this.handlers.set(ClientToServiceEvent.getConversationList, this.handleGetConversationList);
    this.handlers.set(ClientToServiceEvent.getMessageHistory, this.handleGetMessageHistory);
    this.handlers.set(ClientToServiceEvent.readMessage, this.handleReadMessage);
  }

  private handlePing(client: ChatSocket) {
    this.sendMessageToClient(client, ServiceToClientEvent.pong);
  }

  private getListSearchDto(params?: RequestListParams | null) {
    const pagination = params?.pagination;
    return {
      page: pagination?.page != null ? Number(pagination.page) : 1,
      pageSize: pagination?.pageSize != null ? Number(pagination.pageSize) : 10,
      word: params?.word || '',
    };
  }

  private handleGetUserList = async (
    client: ChatSocket,
    payload?: GetUserList | null,
    requestId?: string,
  ) => {
    const search = this.getListSearchDto(payload as RequestListParams);
    const { list, ...rest } = await this.userService.list({
      ...search,
      excludeUserId: client.data.user.id,
    });

    const response = GetUserListResponse.encode(
      GetUserListResponse.create({ pagination: rest, list }),
    ).finish();
    this.sendMessageToClient(client, ServiceToClientEvent.getUserListResponse, response, requestId);
  };

  /**
   * 获取会话列表
   */
  private handleGetConversationList = async (
    client: ChatSocket,
    payload?: GetConversationListRequest | null,
    requestId?: string,
  ) => {
    const userId = client.data.user?.id;
    if (!userId) return;

    const { page, pageSize } = transformPaginationParams(payload?.pagination);

    const { list, total } = await this.chatService.getUserConversations(userId, page, pageSize);

    const encodedList = list.map((c) => {
      return ConversationInfo.create({
        id: c.id,
        type: c.type,
        lastMsgContent: c.lastMsgContent ?? undefined,
        lastMsgTime: c.lastMsgTime ? new Date(c.lastMsgTime).getTime() : undefined,
        updateTime: c.updateTime.getTime(),
        createTime: c.createTime.getTime(),
        unreadCount: c.unreadCount ?? 0,
        lastReadMessageId: c.lastReadMessageId ?? 0,
        targetInfo: {
          id: c.user?.id,
          name: c.user?.nickname,
          avatarUrl: c.user?.avatarUrl,
        },
      });
    });

    const responseData = {
      pagination: {
        total,
        page,
        pageSize,
        totalPage: Math.ceil(total / pageSize),
      },
      list: encodedList ?? [],
    };

    const response = GetConversationListResponse.encode(
      GetConversationListResponse.create(responseData),
    ).finish();

    this.sendMessageToClient(
      client,
      ServiceToClientEvent.getConversationListResponse,
      response,
      requestId,
    );
  };

  /**
   * 获取消息历史
   */
  private handleGetMessageHistory = async (
    client: ChatSocket,
    payload?: GetMessageHistoryRequest | null,
    requestId?: string,
  ) => {
    if (!payload?.conversationId) return;
    const { page, pageSize } = transformPaginationParams(payload.pagination);

    const { list, total } = await this.messageService.getConversationMessages(
      payload.conversationId,
      page,
      pageSize,
    );

    const encodedList = list.map((m) => MessageInfo.create(buildMessageInfoPayload(m)));

    const response = GetMessageHistoryResponse.encode(
      GetMessageHistoryResponse.create({
        pagination: { total, page, pageSize, totalPage: Math.ceil(total / pageSize) },
        list: encodedList,
      }),
    ).finish();

    this.sendMessageToClient(
      client,
      ServiceToClientEvent.getMessageHistoryResponse,
      response,
      requestId,
    );
  };

  /**
   * 标记会话消息已读
   */
  private handleReadMessage = async (
    client: ChatSocket,
    payload?: ReadMessageRequest | null,
    requestId?: string,
  ) => {
    const userId = client.data.user?.id;
    if (!userId || !payload?.conversationId) {
      return;
    }

    const result = await this.messageService.markConversationAsRead(
      userId,
      payload.conversationId,
      payload.messageId ?? undefined,
    );

    const response = ReadMessageResponse.encode(
      ReadMessageResponse.create({
        conversationId: result.conversationId,
        messageId: result.messageId,
        unreadCount: result.unreadCount,
      }),
    ).finish();

    this.sendMessageToClient(client, ServiceToClientEvent.ReadMessageResponse, response, requestId);
  };

  private getLastMsgContent(content: string | null | undefined, type: number) {
    if (content?.trim()) {
      return content;
    }

    const typeMap: Record<number, string> = {
      0: '',
      1: '[Image]',
      2: '[Video]',
      3: '[File]',
      4: '[Audio]',
    };

    return typeMap[type] || '[Message]';
  }

  private async buildNewPrivateConversationUpdates(
    conversation: Awaited<ReturnType<ChatService['getOrCreatePrivateConversation']>>,
    senderId: string,
    targetId: string,
    message: MessageInfo,
  ): Promise<Map<string, IConversationInfo>> {
    const users = await this.userService.getMultipleUsers([senderId, targetId]);
    const userMap = new Map(users.map((user) => [user.id, user]));
    const peerPairs = [
      { userId: senderId, peerId: targetId },
      { userId: targetId, peerId: senderId },
    ];

    return new Map(
      peerPairs.map(({ userId, peerId }) => {
        const peer = userMap.get(peerId);

        return [
          userId,
          ConversationInfo.create({
            id: conversation.id,
            type: conversation.type,
            targetInfo: peer
              ? {
                  id: peer.id,
                  name: peer.nickname ?? '',
                  avatarUrl: peer.avatarUrl ?? '',
                }
              : undefined,
            lastMsgContent: this.getLastMsgContent(message.content, message.type),
            lastMsgTime: message.createTime ? Number(message.createTime) : undefined,
            updateTime: message.updateTime ? Number(message.updateTime) : undefined,
            createTime: conversation.createTime.getTime(),
            unreadCount: userId === senderId ? 0 : 1,
            lastReadMessageId: userId === senderId ? message.msgId : 0,
          }),
        ];
      }),
    );
  }

  private buildNewUpdateMessage(messages: MessageInfo[], conversations: IConversationInfo[] = []) {
    return NewUpdateMessage.encode(
      NewUpdateMessage.create({
        messages,
        conversations,
      }),
    ).finish();
  }

  private handleSendMessage = async (
    client: ChatSocket,
    payload?: SendMessageRequest | null,
    requestId?: string,
  ) => {
    const senderId = client.data.user?.id;

    const {
      targetId,
      content,
      fileId,
      type = 0,
      clientMsgId,
      mediaGroupId,
      durationSec,
      waveform,
      thumbUrl,
    } = payload || {};

    let conversationId = payload?.conversationId;
    let isNewConversation = false;
    let newConversation:
      | Awaited<ReturnType<ChatService['getOrCreatePrivateConversation']>>
      | undefined;
    if (!senderId || (!content && !fileId) || !clientMsgId || (!conversationId && !targetId)) {
      this.sendMessageToClient(
        client,
        ServiceToClientEvent.ackSendMessage,
        AckSendMessage.encode(AckSendMessage.create({ clientMsgId, status: '' })).finish(),
        requestId,
      );
      return;
    }

    this.sendMessageToClient(
      client,
      ServiceToClientEvent.ackSendMessage,
      AckSendMessage.encode(AckSendMessage.create({ clientMsgId, status: 'ok' })).finish(),
      requestId,
    );

    if (!conversationId) {
      const conversation = await this.chatService.getOrCreatePrivateConversation(
        senderId,
        targetId!,
      );
      isNewConversation = conversation.isNew;
      newConversation = conversation;
      conversationId = conversation.id;
    }

    const message = await this.messageService.sendMessage({
      senderId,
      conversationId,
      content: content ?? '',
      fileId,
      mediaGroupId,
      type,
      clientMsgId,
      durationSec: durationSec ?? undefined,
      waveform,
      thumbUrl: thumbUrl ?? undefined,
    });
    const messagePayload = buildMessageInfoPayload(message);

    if (isNewConversation && targetId) {
      await this.joinUserToRoom(this.server, [senderId, targetId], conversationId);
    }

    const updateMessage = MessageInfo.create(messagePayload);

    if (isNewConversation && targetId && newConversation) {
      const conversationByUserId = await this.buildNewPrivateConversationUpdates(
        newConversation,
        senderId,
        targetId,
        updateMessage,
      );

      for (const userId of [senderId, targetId]) {
        const conversation = conversationByUserId.get(userId);
        const response = this.buildNewUpdateMessage(
          [updateMessage],
          conversation ? [conversation] : [],
        );
        this.sendMessageToUser(userId, ServiceToClientEvent.newUpdateMessage, response, senderId);
      }
      return;
    }

    const response = this.buildNewUpdateMessage([updateMessage]);
    this.broadcastToRoom(conversationId, ServiceToClientEvent.newUpdateMessage, response, senderId);
  };
}
