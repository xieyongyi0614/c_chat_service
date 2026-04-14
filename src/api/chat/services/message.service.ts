import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../core/database';

@Injectable()
export class MessageService {
  private readonly logger = new Logger(MessageService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * 创建并发送消息
   * 逻辑参考 AGENTS.md
   */
  async sendMessage(data: {
    senderId: string;
    conversationId: string;
    content: string;
    type: number;
  }) {
    const { senderId, conversationId, content, type } = data;

    try {
      // 1. 保存消息到 MessageHistory
      const message = await this.prisma.messageHistory.create({
        data: {
          sender_id: senderId,
          conversation_id: conversationId,
          content,
          type,
          is_read: false,
          state: 0, // 正常
        },
      });

      // 2. 更新会话快照 (last_msg_content, last_msg_time)
      await this.prisma.conversation.update({
        where: { id: conversationId },
        data: {
          last_msg_content: content,
          last_msg_time: new Date(),
        },
      });

      return message;
    } catch (error) {
      this.logger.error('发送消息失败', error);
      throw error;
    }
  }

  /**
   * 获取会话消息历史
   */
  async getConversationMessages(conversationId: string, page: number = 1, pageSize: number = 50) {
    const skip = (page - 1) * pageSize;
    const [messages, total] = await Promise.all([
      this.prisma.messageHistory.findMany({
        where: {
          conversation_id: conversationId,
          state: 0,
        },
        orderBy: {
          create_time: 'desc',
        },
        skip,
        take: pageSize,
      }),
      this.prisma.messageHistory.count({
        where: {
          conversation_id: conversationId,
          state: 0,
        },
      }),
    ]);

    return {
      list: messages.reverse(),
      total,
      page,
      pageSize,
    };
  }
}
