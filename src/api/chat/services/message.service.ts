import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../core/database';
import { ChatService } from './chat.service';
import { Prisma } from 'generated/prisma/client';
import { SendMessageRequest } from 'src/proto';

@Injectable()
export class MessageService {
  private readonly logger = new Logger(MessageService.name);

  constructor(
    private prisma: PrismaService,
    private chatService: ChatService,
  ) {}

  async getNextMsgId(tx: Prisma.TransactionClient, conversationId: string) {
    const seq = await tx.conversation_sequence.upsert({
      where: { conversationId },
      update: { lastMsgId: { increment: 1 } },
      create: { conversationId, lastMsgId: 1 },
    });
    return seq.lastMsgId;
  }

  /**
   * 创建并发送消息
   */
  async sendMessage(
    data: {
      senderId: string;
    } & Omit<SendMessageRequest, 'toJSON'>,
  ) {
    const { senderId, conversationId, content, type, clientMsgId, fileId } = data;

    return this.prisma.$transaction(async (tx) => {
      // 🚀 1️⃣ 防重复（核心）
      const existing = await tx.message_history.findFirst({
        where: {
          conversationId,
          clientMsgId,
          senderId,
        },
      });

      if (existing) return existing;

      // 🚀 2️⃣ 生成 msgId（你之前的 sequence 方案）
      // const seq = await tx.conversation_sequence.upsert({
      //   where: { conversationId },
      //   update: { lastMsgId: { increment: 1 } },
      //   create: { conversationId, lastMsgId: 1 },
      // });

      // const msgId = seq.lastMsgId;
      const msgId = await this.getNextMsgId(tx, conversationId);
      let fileUrl = '';
      if (fileId) {
        const file = await tx.file.findFirst({ where: { id: fileId }, select: { url: true } });
        fileUrl = file?.url ?? '';
      }
      // 🚀 3️⃣ 写入消息
      const created = await tx.message_history.create({
        data: { senderId, conversationId, msgId, content, type, clientMsgId, fileId, fileUrl },
      });

      // 🚀 4️⃣ 更新会话
      await tx.conversation.update({
        where: { id: conversationId },
        data: { lastMsgContent: content, lastMsgTime: created.createTime },
      });

      return created;
    });
  }

  /**
   * 获取会话消息历史
   */
  async getConversationMessages(conversationId: string, page: number = 1, pageSize: number = 50) {
    const skip = (page - 1) * pageSize;
    const [messages] = await Promise.all([
      this.prisma.message_history.findMany({
        where: {
          conversationId: conversationId,
          state: 0,
        },
        orderBy: {
          msgId: 'desc',
        },
        include: {
          file: true,
        },
        skip,
        take: pageSize,
      }),
    ]);

    return {
      list: messages.reverse(),
      total: 0,
      page,
      pageSize,
    };
  }

  async markConversationAsRead(userId: string, conversationId: string, messageId?: string) {
    const participant = await this.prisma.conversation_participant.findUnique({
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
        const target = await this.prisma.message_history.findFirst({
          where: {
            conversationId,
            msgId: parsedMsgId,
            state: 0,
          },
          select: { msgId: true },
        });
        targetMsgId = target?.msgId ?? -1;
      } else {
        const target = await this.prisma.message_history.findFirst({
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
      const target = await this.prisma.message_history.findFirst({
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

    await this.prisma.conversation_participant.update({
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
        ? await this.prisma.message_history.count({
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
