import { Injectable } from '@nestjs/common';
import { MessageHandlerRegistry } from './message-handler.registry';
import { SOCKET_PROTO_EVENT } from 'src/proto/protoMap';
import { ChatSocket } from 'src/types/socket.types';
import { UsersService } from 'src/api/web/users/users.service';
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
} from 'src/proto';
import { MessageService } from '../services/message.service';
import { ChatService } from '../services/chat.service';
import { Server } from 'socket.io';
import { RequestListParams } from 'src/common';

@Injectable()
export abstract class MessageHandler extends MessageHandlerRegistry {
  public abstract server: Server;
  protected abstract userSockets: Map<string, Set<string>>;

  constructor(
    private userService: UsersService,
    protected messageService: MessageService,
    protected chatService: ChatService,
  ) {
    super();
  }

  onModuleInit() {
    this.initializeHandlers();
  }
  protected initializeHandlers(): void {
    this.handlers.set(SOCKET_PROTO_EVENT.ping, (client) => this.handlePing(client));
    this.handlers.set(SOCKET_PROTO_EVENT.getUserList, this.handleGetUserList);
    this.handlers.set(SOCKET_PROTO_EVENT.createConversation, this.handleCreateConversation);
    this.handlers.set(SOCKET_PROTO_EVENT.sendMessage, this.handleSendMessage);
    this.handlers.set(SOCKET_PROTO_EVENT.getConversationList, this.handleGetConversationList);
    this.handlers.set(SOCKET_PROTO_EVENT.getMessageHistory, this.handleGetMessageHistory);
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
    const { list, ...rest } = await this.userService.list(search);
    console.log('handleGetUserList', search, payload, list, rest);

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

    const page = payload?.pagination?.page != null ? Number(payload.pagination.page) : 1;
    const pageSize =
      payload?.pagination?.pageSize != null ? Number(payload.pagination.pageSize) : 10;

    const { list, total } = await this.chatService.getUserConversations(userId, page, pageSize);

    const encodedList = list.map((c) =>
      ConversationInfo.create({
        id: c.id,
        type: c.type,
        targetId: c.target_id,
        lastMsgContent: c.last_msg_content ?? undefined,
        lastMsgTime: c.last_msg_time ? new Date(c.last_msg_time).getTime() : undefined,
        updateTime: new Date(c.update_time).getTime(),
        createTime: new Date(c.create_time).getTime(),
      }),
    );
    const response = GetConversationListResponse.encode(
      GetConversationListResponse.create({
        pagination: {
          total,
          page,
          pageSize,
          totalPage: Math.ceil(total / pageSize),
        },
        list: encodedList,
      }),
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
    const page = payload?.pagination?.page != null ? Number(payload.pagination.page) : 1;
    const pageSize =
      payload?.pagination?.pageSize != null ? Number(payload.pagination.pageSize) : 10;

    const { list, total } = await this.messageService.getConversationMessages(
      payload.conversationId,
      page,
      pageSize,
    );

    const encodedList = list.map((m) =>
      MessageInfo.create({
        id: m.id,
        senderId: m.sender_id,
        conversationId: m.conversation_id,
        content: m.content,
        type: m.type,
        isRead: m.is_read,
        state: m.state,
        createTime: new Date(m.create_time).getTime(),
        updateTime: new Date(m.update_time).getTime(),
      }),
    );

    const response = GetMessageHistoryResponse.encode(
      GetMessageHistoryResponse.create({
        pagination: {
          total,
          page,
          pageSize,
          totalPage: Math.ceil(total / pageSize),
        },
        list: encodedList,
      }),
    ).finish();

    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.getMessageHistory, response, requestId);
  };
  /**
   * 处理创建私聊会话
   */
  private handleCreateConversation = async (
    client: ChatSocket,
    payload?: CreateConversationRequest | null,
    requestId?: string,
  ) => {
    const userIdA = client.data.user?.id;
    const userIdB = payload?.targetId;

    if (!userIdA || !userIdB) {
      return;
    }

    const conversation = await this.chatService.getOrCreatePrivateConversation(userIdA, userIdB);

    // ⭐ 关键：将参与双方的所有在线 Socket 加入该会话的 Socket.io 房间
    await this.joinUserToRoom(this.server, this.userSockets, userIdA, conversation.id);
    await this.joinUserToRoom(this.server, this.userSockets, userIdB, conversation.id);

    const response = ConversationInfo.encode(
      ConversationInfo.create({
        id: conversation.id,
        type: conversation.type,
        targetId: conversation.target_id,
        lastMsgContent: conversation.last_msg_content ?? undefined,
        lastMsgTime: conversation.last_msg_time?.getTime(),
        updateTime: conversation.update_time.getTime(),
        createTime: conversation.create_time.getTime(),
      }),
    ).finish();

    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.createConversation, response, requestId);
  };

  /**
   * 处理发送消息
   */
  private handleSendMessage = async (
    client: ChatSocket,
    payload?: SendMessageRequest | null,
    requestId?: string,
  ) => {
    const senderId = client.data.user?.id;
    if (!senderId || !payload?.conversationId || !payload?.content) {
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
        senderId: message.sender_id,
        conversationId: message.conversation_id,
        content: message.content,
        type: message.type,
        isRead: message.is_read,
        state: message.state,
        createTime: message.create_time.getTime(),
        updateTime: message.update_time.getTime(),
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
    );
  };
}
