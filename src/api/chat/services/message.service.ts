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
      const message = await this.prisma.$transaction(async (tx) => {
        const lastMessage = await tx.messageHistory.findFirst({
          where: { conversationId },
          orderBy: { msgId: 'desc' },
          select: { msgId: true },
        });
        const nextMsgId = (lastMessage?.msgId ?? 0) + 1;

        const created = await tx.messageHistory.create({
          data: {
            senderId: senderId,
            conversationId: conversationId,
            msgId: nextMsgId,
            content,
            type,
            state: 0, // 正常
          },
        });

        await tx.conversation.update({
          where: { id: conversationId },
          data: {
            lastMsgContent: content,
            lastMsgTime: new Date(),
          },
        });

        return created;
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
          conversationId: conversationId,
          state: 0,
        },
        orderBy: {
          msgId: 'desc',
        },
        skip,
        take: pageSize,
      }),
      this.prisma.messageHistory.count({
        where: {
          conversationId: conversationId,
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

  async markConversationAsRead(userId: string, conversationId: string, messageId?: string) {
    const participant = await this.prisma.conversationParticipant.findUnique({
      where: {
        conversationId_userId: {
          conversationId,
          userId,
        },
      },
      select: {
        id: true,
        isDeleted: true,
      },
    });

    if (!participant || participant.isDeleted) {
      throw new Error('会话不存在或无权限');
    }

    let targetMsgId = -1;

    if (messageId) {
      const parsedMsgId = Number(messageId);

      // 兼容：如果客户端仍传的是 MessageHistory.id（cuid），先查出对应 msgId
      if (!Number.isNaN(parsedMsgId)) {
        const target = await this.prisma.messageHistory.findFirst({
          where: {
            conversationId,
            msgId: parsedMsgId,
            state: 0,
          },
          select: { msgId: true },
        });
        targetMsgId = target?.msgId ?? -1;
      } else {
        const target = await this.prisma.messageHistory.findFirst({
          where: {
            id: messageId,
            conversationId,
            state: 0,
          },
          select: { msgId: true },
        });
        targetMsgId = target?.msgId ?? -1;
      }

      if (targetMsgId < 0) {
        throw new Error('消息不存在');
      }
    } else {
      const target = await this.prisma.messageHistory.findFirst({
        where: {
          conversationId,
          state: 0,
        },
        orderBy: {
          msgId: 'desc',
        },
        select: {
          msgId: true,
        },
      });
      targetMsgId = target?.msgId ?? -1;
    }

    await this.prisma.conversationParticipant.update({
      where: {
        conversationId_userId: {
          conversationId,
          userId,
        },
      },
      data: {
        lastReadMessageId: targetMsgId,
      },
    });

    const unreadCount =
      targetMsgId >= 0
        ? await this.prisma.messageHistory.count({
            where: {
              conversationId,
              state: 0,
              senderId: { not: userId },
              msgId: {
                gt: targetMsgId,
              },
            },
          })
        : 0;

    return {
      conversationId,
      messageId: String(targetMsgId),
      unreadCount,
    };
  }
}
