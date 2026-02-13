import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../core/database';

@Injectable()
export class MessageService {
  private readonly logger = new Logger(MessageService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * 创建消息记录
   */
  async createMessage(data: { sender_id: string; room_id: string; content: string; type: number }) {
    try {
      const message = await this.prisma.messageHistory.create({
        data: {
          sender_id: data.sender_id,
          room_id: data.room_id,
          content: data.content,
          type: data.type,
          is_read: 0,
          state: 0
        },
        include: {
          user: {
            select: {
              id: true,
              nickname: true,
              avatar_url: true
            }
          }
        }
      });

      return message;
    } catch (error) {
      this.logger.error('创建消息失败', error);
      throw error;
    }
  }

  /**
   * 获取聊天室消息历史
   */
  async getRoomMessages(roomId: string, page: number = 1, pageSize: number = 50) {
    try {
      const skip = (page - 1) * pageSize;
      const [messages, total] = await Promise.all([
        this.prisma.messageHistory.findMany({
          where: {
            room_id: roomId,
            state: 0 // 只获取正常状态的消息
          },
          include: {
            user: {
              select: {
                id: true,
                nickname: true,
                avatar_url: true
              }
            }
          },
          orderBy: {
            create_time: 'desc'
          },
          skip,
          take: pageSize
        }),
        this.prisma.messageHistory.count({
          where: {
            room_id: roomId,
            state: 0
          }
        })
      ]);

      return {
        messages: messages.reverse(), // 反转以按时间正序显示
        total,
        page,
        pageSize
      };
    } catch (error) {
      this.logger.error('获取消息历史失败', error);
      throw error;
    }
  }

  /**
   * 标记消息为已读
   */
  async markMessageAsRead(messageId: string, userId: string) {
    try {
      const message = await this.prisma.messageHistory.findUnique({
        where: { id: messageId }
      });

      if (!message || message.sender_id === userId) {
        return; // 自己发送的消息不需要标记为已读
      }

      await this.prisma.messageHistory.update({
        where: { id: messageId },
        data: { is_read: 1 }
      });
    } catch (error) {
      this.logger.error('标记消息已读失败', error);
      throw error;
    }
  }

  /**
   * 撤回消息
   */
  async recallMessage(messageId: string, userId: string) {
    try {
      const message = await this.prisma.messageHistory.findUnique({
        where: { id: messageId }
      });

      if (!message || message.sender_id !== userId) {
        throw new Error('无权撤回此消息');
      }

      return await this.prisma.messageHistory.update({
        where: { id: messageId },
        data: { state: -2 } // -2：已撤回
      });
    } catch (error) {
      this.logger.error('撤回消息失败', error);
      throw error;
    }
  }
}
