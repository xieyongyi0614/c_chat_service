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
            targetId: userIdB, // 这里存对方 ID
          },
        });

        // 创建参与者 (A 和 B)
        await tx.conversationParticipant.createMany({
          data: [
            { conversationId: conversationId, userId: userIdA },
            { conversationId: conversationId, userId: userIdB },
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
   * 获取或创建群聊会话
   */
  async getOrCreateGroupConversation(groupId: string) {
    // 1. 查找会话
    let conversation = await this.prisma.conversation.findFirst({
      where: {
        type: 2, // 群聊
        targetId: groupId,
      },
      include: {
        participants: true,
      },
    });

    // 2. 如果不存在，创建
    if (!conversation) {
      conversation = await this.prisma.$transaction(async (tx) => {
        // 校验群组是否存在
        const group = await tx.group.findUnique({
          where: { id: groupId },
          include: { members: { where: { state: 0 } } },
        });

        if (!group) {
          throw new Error('群组不存在');
        }

        // 创建会话
        const newConversation = await tx.conversation.create({
          data: {
            type: 2, // 群聊
            targetId: groupId,
          },
        });

        // 为当前所有群成员创建会话关联
        if (group.members.length > 0) {
          await tx.conversationParticipant.createMany({
            data: group.members.map((m) => ({
              conversationId: newConversation.id,
              userId: m.userId,
            })),
            skipDuplicates: true,
          });
        }

        return {
          ...newConversation,
          participants: [],
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
   * 获取用户会话列表（支持增量同步）
   */
  async getUserConversations(
    userId: string,
    page: number = 1,
    pageSize: number = 10,
    lastUpdateTime?: Date,
  ) {
    const skip = (page - 1) * pageSize;

    const where: any = {
      userId: userId,
      isDeleted: false,
    };

    if (lastUpdateTime) {
      where.conversation = {
        updateTime: {
          gt: lastUpdateTime,
        },
      };
    }

    const [participants, total] = await Promise.all([
      this.prisma.conversationParticipant.findMany({
        where,
        include: {
          conversation: true,
        },
        orderBy: [
          { conversation: { lastMsgTime: 'desc' } },
          { conversation: { updateTime: 'desc' } },
        ],
        skip,
        take: pageSize,
      }),
      this.prisma.conversationParticipant.count({
        where,
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
        userId: userId,
        isDeleted: false,
      },
      select: {
        conversationId: true,
      },
    });
    return participants.map((p) => p.conversationId);
  }
}
