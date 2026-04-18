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

    const page = payload?.pagination?.page != null ? Number(payload.pagination.page) : 1;
    const pageSize =
      payload?.pagination?.pageSize != null ? Number(payload.pagination.pageSize) : 10;

    const { list, total } = await this.chatService.getUserConversations(userId, page, pageSize);

    const encodedList = await Promise.all(
      list.map(async (c) => {
        let userInfo: UserInfo | undefined = undefined;
        let groupName: string | undefined;
        let groupAvatar: string | undefined;

        if (c.type === 1) {
          const targetUser = await this.userService.getUserById(c.targetId);
          if (targetUser) {
            userInfo = UserInfo.create({
              ...targetUser,
              // id: targetUser.id,
              // email: targetUser.email,
              // nickname: targetUser.nickname || undefined,
              // avatarUrl: targetUser.avatarUrl,
              // state: targetUser.state,
              // updateTime: new Date(targetUser.updateTime).getTime(),
            });
          }
        } else if (c.type === 2) {
          const group = await this.prisma.group.findUnique({
            where: { id: c.targetId },
            select: { name: true, avatarUrl: true },
          });
          groupName = group?.name;
          groupAvatar = group?.avatarUrl ?? '';
        }

        return ConversationInfo.create({
          id: c.id,
          type: c.type,
          targetId: c.targetId,
          lastMsgContent: c.lastMsgContent ?? undefined,
          lastMsgTime: c.lastMsgTime ? new Date(c.lastMsgTime).getTime() : undefined,
          updateTime: new Date(c.updateTime).getTime(),
          createTime: new Date(c.createTime).getTime(),
          user: userInfo,
          groupName,
          groupAvatar,
        });
      }),
    );

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
    console.log(responseData, 'responseData');

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
        targetId: conversation.targetId,
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
        senderId: message.senderId,
        conversationId: message.conversationId,
        content: message.content,
        type: message.type,
        isRead: message.isRead,
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
