import { Injectable } from '@nestjs/common';
import { MessageHandlerRegistry } from './message-handler.registry';
import { SOCKET_PROTO_EVENT } from 'src/proto/protoMap';
import { ChatSocket } from 'src/types/socket.types';
import { UsersService } from 'src/api/web/users/users.service';
import { PrismaService } from 'src/core/database';
import {
  GetUserList,
  GetUserListResponse,
  CreateConversationRequest,
  ConversationInfo,
  SendMessageRequest,
  MessageInfo,
  GetConversationListRequest,
  GetConversationListResponse,
  GetMessageHistoryRequest,
  GetMessageHistoryResponse,
  ReadMessageRequest,
  ReadMessageResponse,
  UserInfo,
} from 'src/proto';
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
    this.handlers.set(SOCKET_PROTO_EVENT.ping, (client) => this.handlePing(client));
    this.handlers.set(SOCKET_PROTO_EVENT.getUserList, this.handleGetUserList);
    this.handlers.set(SOCKET_PROTO_EVENT.createConversation, this.handleCreateConversation);
    this.handlers.set(SOCKET_PROTO_EVENT.sendMessage, this.handleSendMessage);
    this.handlers.set(SOCKET_PROTO_EVENT.getConversationList, this.handleGetConversationList);
    this.handlers.set(SOCKET_PROTO_EVENT.getMessageHistory, this.handleGetMessageHistory);
    this.handlers.set(SOCKET_PROTO_EVENT.readMessage, this.handleReadMessage);
  }

  private handlePing(client: ChatSocket) {
    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.ping);
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
    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.getUserList, response, requestId);
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

    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.getConversationList, response, requestId);
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

    const encodedList = list.map((m) =>
      MessageInfo.create({
        ...m,
        createTime: m.createTime.getTime(),
        updateTime: m.updateTime.getTime(),
      }),
    );

    const response = GetMessageHistoryResponse.encode(
      GetMessageHistoryResponse.create({
        pagination: { total, page, pageSize, totalPage: Math.ceil(total / pageSize) },
        list: encodedList,
      }),
    ).finish();

    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.getMessageHistory, response, requestId);
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

    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.readMessage, response, requestId);
  };
  /**
   * 处理创建私聊会话
   */
  private handleCreateConversation = async (
    client: ChatSocket,
    payload?: CreateConversationRequest | null,
    requestId?: string,
  ) => {
    const senderId = client.data.user?.id;
    const targetId = payload?.targetId;

    if (!senderId || !targetId) {
      return;
    }

    const conversation = await this.chatService.getOrCreatePrivateConversation(senderId, targetId);

    // 将参与双方的所有在线 Socket 加入该会话的 Socket.io 房间
    await this.joinUserToRoom(this.server, [senderId, targetId], conversation.id);

    // const targetInfo = conversation.participants.find(item=>item.userId === targetId)
    const response = ConversationInfo.encode(
      ConversationInfo.create({
        id: conversation.id,
        type: conversation.type,
        // targetId: conversation.targetId,
        // targetInfo:{id:targetId,name:}
        lastMsgContent: conversation.lastMsgContent ?? undefined,
        lastMsgTime: conversation.lastMsgTime?.getTime(),
        updateTime: conversation.updateTime.getTime(),
        createTime: conversation.createTime.getTime(),
      }),
    ).finish();

    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.createConversation, response, requestId);
  };

  /**
   * 处理发送消息
   */
  private handleSendMessage = async (
    client: ChatSocket,
    payload: SendMessageRequest,
    requestId?: string,
  ) => {
    const { conversationId, targetId, content } = payload ?? {};
    const senderId = client.data.user?.id;
    if (!senderId || (!conversationId && !targetId) || !content) {
      return;
    }

    const message = await this.messageService.sendMessage({
      senderId,
      conversationId: payload.conversationId,
      content: payload.content,
      type: payload.type ?? 0,
    });

    const response = MessageInfo.encode(
      MessageInfo.create({
        id: message.id,
        msgId: message.msgId,
        senderId: message.senderId,
        conversationId: message.conversationId,
        content: message.content,
        type: message.type,
        state: message.state,
        createTime: message.createTime.getTime(),
        updateTime: message.updateTime.getTime(),
      }),
    ).finish();

    // 1. 发送回执给发送者
    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.sendMessage, response, requestId);

    // 2. 广播给会话参与者
    this.broadcastToRoom(
      payload.conversationId,
      SOCKET_PROTO_EVENT.sendMessage,
      response,
      senderId,
      client.id,
    );
  };
}
