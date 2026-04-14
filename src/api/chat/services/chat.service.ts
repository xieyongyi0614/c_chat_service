import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../core/database';
import { generatePrivateConversationId } from '../../../utils/chat.util';

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * 获取或创建私聊会话
   * 逻辑参考 AGENTS.md
   */
  async getOrCreatePrivateConversation(userIdA: string, userIdB: string) {
    const conversationId = generatePrivateConversationId(userIdA, userIdB);

    // 1. 查找会话
    let conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
      include: {
        participants: true,
      },
    });

    // 2. 如果不存在，创建
    if (!conversation) {
      conversation = await this.prisma.$transaction(async (tx) => {
        // 创建会话
        const newConversation = await tx.conversation.create({
          data: {
            id: conversationId,
            type: 1, // 私聊
            target_id: userIdB, // 这里存对方 ID
          },
        });

        // 创建参与者 (A 和 B)
        await tx.conversationParticipant.createMany({
          data: [
            { conversation_id: conversationId, user_id: userIdA },
            { conversation_id: conversationId, user_id: userIdB },
          ],
        });

        return {
          ...newConversation,
          participants: [], // 这里可以根据需要填充
        };
      });
    }

    return conversation;
  }

  /**
   * 获取会话详情
   */
  async getConversationById(id: string) {
    return this.prisma.conversation.findUnique({
      where: { id },
      include: {
        participants: true,
      },
    });
  }

  /**
   * 获取用户会话列表（分页）
   */
  async getUserConversations(userId: string, page: number = 1, pageSize: number = 10) {
    const skip = (page - 1) * pageSize;

    const [participants, total] = await Promise.all([
      this.prisma.conversationParticipant.findMany({
        where: {
          user_id: userId,
          is_deleted: false,
        },
        include: {
          conversation: true,
        },
        orderBy: [
          { conversation: { last_msg_time: 'desc' } },
          { conversation: { create_time: 'desc' } },
        ],
        skip,
        take: pageSize,
      }),
      this.prisma.conversationParticipant.count({
        where: {
          user_id: userId,
          is_deleted: false,
        },
      }),
    ]);

    const list = participants.map((p) => p.conversation).filter(Boolean);

    return { list, total, page, pageSize };
  }

  /**
   * 获取用户参与的所有会话 ID
   */
  async getUserConversationIds(userId: string): Promise<string[]> {
    const participants = await this.prisma.conversationParticipant.findMany({
      where: {
        user_id: userId,
        is_deleted: false,
      },
      select: {
        conversation_id: true,
      },
    });
    return participants.map((p) => p.conversation_id);
  }
}
