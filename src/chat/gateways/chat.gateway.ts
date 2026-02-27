import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { WsJwtAuthGuard } from '../../auth/guards/ws-jwt-auth.guard';
import { MessageService } from '../services/message.service';
import { ChatRoomService } from '../services/chat-room.service';
import { SendMessageDto, JoinRoomDto, LeaveRoomDto, TypingDto } from '../dto/send-message.dto';
import { AuthService } from 'src/auth';
import { ChatSocket } from 'types/socket.types';

@WebSocketGateway({
  namespace: '/chat',
  cors: {
    // ✅ 安全方案：从环境变量动态加载允许的源
    origin: (origin, callback) => {
      const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['https://yourdomain.com'];

      // 允许 Electron 开发环境（仅开发用！）
      if (process.env.NODE_ENV === 'development' && origin?.includes('localhost')) {
        return callback(null, true);
      }

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  }
})
@UsePipes(new ValidationPipe())
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(ChatGateway.name);
  // 存储用户 socket 连接映射 (userId -> socketId[])
  private userSockets = new Map<string, Set<string>>();
  // 存储房间用户映射 (roomId -> Set<userId>)
  private roomUsers = new Map<string, Set<string>>();

  constructor(
    private messageService: MessageService,
    private chatRoomService: ChatRoomService,
    private authService: AuthService
  ) {}

  /**
   * 客户端连接时
   */
  async handleConnection(@ConnectedSocket() client: ChatSocket) {
    try {
      const jwtPayload = await this.authService.authenticateSocket(client);

      client.data.user = jwtPayload;

      if (!jwtPayload || !jwtPayload.id) {
        this.logger.warn('连接失败：用户信息缺失');
        client.disconnect();
        return;
      }

      const userId = jwtPayload.id;
      const socketId = client.id;

      // 记录用户 socket 连接
      if (!this.userSockets.has(userId)) {
        this.userSockets.set(userId, new Set());
      }
      this.userSockets.get(userId)!.add(socketId);

      // 获取用户所在的聊天室并加入
      const rooms = await this.chatRoomService.getUserRooms(userId);
      for (const room of rooms) {
        await this.joinRoom(client, room.id, userId);
      }

      this.logger.log(`用户 ${userId} 已连接，Socket ID: ${socketId}`);
      this.logger.log(`用户 ${userId} 已加入 ${rooms.length} 个聊天室`);
      console.log(this.userSockets, 'this.userSockets');
    } catch (error) {
      const errorMessage = (error as Error)?.message;
      this.logger.warn(`🔐 认证失败: ${errorMessage}`);
      client.emit('auth_error', {
        message: errorMessage,
        timestamp: new Date().toISOString()
      });

      // 安全延迟断开
      setTimeout(() => {
        if (client.connected) client.disconnect(true);
      }, 1000);
    }
  }

  /**
   * 客户端断开连接时
   */
  async handleDisconnect(@ConnectedSocket() client: ChatSocket) {
    const user = client.data.user;
    if (!user || !user.id) {
      return;
    }

    const socketId = client.id;

    // 从用户 socket 映射中移除
    const userSocketSet = this.userSockets.get(user.id);
    if (userSocketSet) {
      userSocketSet.delete(socketId);
      if (userSocketSet.size === 0) {
        this.userSockets.delete(user.id);
      }
    }

    // 从所有房间中移除
    for (const [roomId, userIds] of this.roomUsers.entries()) {
      if (userIds.has(user.id)) {
        userIds.delete(user.id);
        if (userIds.size === 0) {
          this.roomUsers.delete(roomId);
        }
      }
    }

    this.logger.log(`用户 ${user.id} 已断开连接，Socket ID: ${socketId}`);
  }

  /**
   * 加入聊天室
   */
  @SubscribeMessage('join_room')
  @UseGuards(WsJwtAuthGuard)
  async handleJoinRoom(@ConnectedSocket() client: ChatSocket, @MessageBody() dto: JoinRoomDto) {
    const userId = client.data.user.id;
    const { room_id } = dto;

    // 验证用户是否在聊天室中
    const isInRoom = await this.chatRoomService.isUserInRoom(userId, room_id);
    if (!isInRoom) {
      this.logger.warn(`用户 ${userId} 尝试加入无权访问的房间 ${room_id}`);
      client.emit('error', { message: '无权加入此聊天室' });
      return;
    }

    await this.joinRoom(client, room_id, userId);

    // 通知房间内其他用户
    client.to(room_id).emit('user_joined', {
      room_id,
      user_id: userId,
      message: '用户已加入聊天室'
    });

    this.logger.log(`用户 ${userId} 加入聊天室 ${room_id}`);
  }

  /**
   * 离开聊天室
   */
  @SubscribeMessage('leave_room')
  @UseGuards(WsJwtAuthGuard)
  async handleLeaveRoom(@ConnectedSocket() client: ChatSocket, @MessageBody() dto: LeaveRoomDto) {
    const userId = client.data.user.id;
    const { room_id } = dto;

    client.leave(room_id);

    // 从房间用户映射中移除
    const userIds = this.roomUsers.get(room_id);
    if (userIds) {
      userIds.delete(userId);
      if (userIds.size === 0) {
        this.roomUsers.delete(room_id);
      }
    }

    // 通知房间内其他用户
    client.to(room_id).emit('user_left', {
      room_id,
      user_id: userId,
      message: '用户已离开聊天室'
    });

    this.logger.log(`用户 ${userId} 离开聊天室 ${room_id}`);
  }

  /**
   * 发送消息
   */
  @SubscribeMessage('send_message')
  @UseGuards(WsJwtAuthGuard)
  async handleSendMessage(
    @ConnectedSocket() client: ChatSocket,
    @MessageBody() dto: SendMessageDto
  ) {
    const userId = client.data.user.id;
    const { room_id, content, type } = dto;

    // 验证用户是否在聊天室中
    const isInRoom = await this.chatRoomService.isUserInRoom(userId, room_id);
    if (!isInRoom) {
      client.emit('error', { message: '无权在此聊天室发送消息' });
      return;
    }

    try {
      // 创建消息记录
      const message = await this.messageService.createMessage({
        sender_id: userId,
        room_id,
        content,
        type
      });

      // 广播消息到房间内所有用户
      this.server.to(room_id).emit('new_message', {
        id: message.id,
        room_id: message.room_id,
        sender_id: message.sender_id,
        content: message.content,
        type: message.type,
        is_read: message.is_read,
        state: message.state,
        create_time: message.create_time,
        user: message.user
      });

      this.logger.log(`用户 ${userId} 在房间 ${room_id} 发送消息`);
    } catch (error) {
      this.logger.error('发送消息失败', error);
      client.emit('error', { message: '发送消息失败' });
    }
  }

  /**
   * 正在输入
   */
  @SubscribeMessage('typing')
  @UseGuards(WsJwtAuthGuard)
  async handleTyping(@ConnectedSocket() client: ChatSocket, @MessageBody() dto: TypingDto) {
    const userId = client.data.user.id;
    const { room_id, is_typing } = dto;

    // 验证用户是否在聊天室中
    const isInRoom = await this.chatRoomService.isUserInRoom(userId, room_id);
    if (!isInRoom) {
      return;
    }

    // 通知房间内其他用户
    client.to(room_id).emit('user_typing', {
      room_id,
      user_id: userId,
      is_typing: is_typing === 'true'
    });
  }

  /**
   * 获取消息历史
   */
  @SubscribeMessage('get_messages')
  @UseGuards(WsJwtAuthGuard)
  async handleGetMessages(
    @ConnectedSocket() client: ChatSocket,
    @MessageBody() data: { room_id: string; page?: number; page_size?: number }
  ) {
    const userId = client.data.user.id;
    const { room_id, page = 1, page_size = 50 } = data;

    // 验证用户是否在聊天室中
    const isInRoom = await this.chatRoomService.isUserInRoom(userId, room_id);
    if (!isInRoom) {
      client.emit('error', { message: '无权查看此聊天室消息' });
      return;
    }

    try {
      const result = await this.messageService.getRoomMessages(room_id, page, page_size);

      client.emit('messages_history', {
        room_id,
        ...result
      });
    } catch (error) {
      this.logger.error('获取消息历史失败', error);
      client.emit('error', { message: '获取消息历史失败' });
    }
  }

  /**
   * 撤回消息
   */
  @SubscribeMessage('recall_message')
  @UseGuards(WsJwtAuthGuard)
  async handleRecallMessage(
    @ConnectedSocket() client: ChatSocket,
    @MessageBody() data: { message_id: string }
  ) {
    const userId = client.data.user.id;
    const { message_id } = data;

    try {
      const message = await this.messageService.recallMessage(message_id, userId);

      // 广播撤回消息到房间内所有用户
      this.server.to(message.room_id || '').emit('message_recalled', {
        message_id,
        room_id: message.room_id
      });

      this.logger.log(`用户 ${userId} 撤回消息 ${message_id}`);
    } catch (error) {
      this.logger.error('撤回消息失败', error);
      client.emit('error', { message: error.message || '撤回消息失败' });
    }
  }

  /**
   * 标记消息已读
   */
  @SubscribeMessage('mark_read')
  @UseGuards(WsJwtAuthGuard)
  async handleMarkRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { message_id: string }
  ) {
    const userId = client.data.user.sub;
    const { message_id } = data;

    try {
      await this.messageService.markMessageAsRead(message_id, userId);
      client.emit('message_read', { message_id });
    } catch (error) {
      this.logger.error('标记消息已读失败', error);
    }
  }

  /**
   * 辅助方法：加入房间
   */
  private async joinRoom(client: Socket, roomId: string, userId: string) {
    client.join(roomId);

    // 记录房间用户
    if (!this.roomUsers.has(roomId)) {
      this.roomUsers.set(roomId, new Set());
    }
    this.roomUsers.get(roomId)!.add(userId);
  }

  /**
   * 获取在线用户列表（可用于管理）
   */
  getOnlineUsers(): string[] {
    return Array.from(this.userSockets.keys());
  }

  /**
   * 获取房间在线用户数
   */
  getRoomOnlineCount(roomId: string): number {
    const userIds = this.roomUsers.get(roomId);
    return userIds ? userIds.size : 0;
  }
}
