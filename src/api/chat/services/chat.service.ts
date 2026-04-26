import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../core/database';
import { generatePrivateConversationId } from '../../../utils/chat.util';
import { Prisma } from 'generated/prisma/client';
import { DEFAULT_PAGINATION_PARAMS } from 'src/constants';
import { UsersService } from 'src/api/web/users/users.service';
import { UsersTypes } from 'src/types/api/users-types';

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);

  constructor(
    private prisma: PrismaService,
    private userService: UsersService,
  ) {}

  /**
   * 获取或创建私聊会话
   */
  async getOrCreatePrivateConversation(userIdA: string, userIdB: string) {
    const conversationId = generatePrivateConversationId(userIdA, userIdB);

    // 1. 查找会话
    let conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
      include: { participants: true },
    });

    // 2. 如果不存在，创建
    if (!conversation) {
      conversation = await this.prisma.$transaction(async (tx) => {
        // 创建会话
        const newConversation = await tx.conversation.create({
          data: {
            id: conversationId,
            type: 1, // 私聊
            // targetId: userIdB, // 这里存对方 ID
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
  async getOrCreateGroupConversation(targetId: string) {
    // 1. 查找会话
    let conversation = await this.prisma.conversation.findFirst({
      where: {
        type: 2, // 群聊
        targetId: targetId,
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
          where: { id: targetId },
          include: { members: { where: { state: 0 } } },
        });

        if (!group) {
          throw new Error('群组不存在');
        }

        // 创建会话
        const newConversation = await tx.conversation.create({
          data: {
            type: 2, // 群聊
            targetId: targetId,
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
    page: number = DEFAULT_PAGINATION_PARAMS.page,
    pageSize: number = DEFAULT_PAGINATION_PARAMS.pageSize,
    lastUpdateTime?: Date,
  ) {
    const skip = (page - 1) * pageSize;

    const where: Prisma.ConversationParticipantWhereInput = {
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
        include: { conversation: true },
        orderBy: [
          { conversation: { lastMsgTime: 'desc' } },
          { conversation: { updateTime: 'desc' } },
        ],
        skip,
        take: pageSize,
      }),
      this.prisma.conversationParticipant.count({ where }),
    ]);

    const allUserIds: Set<string> = new Set([userId]);

    // 获取每个会话的所有参与者，只针对私聊
    const conversationParticipantsMap = new Map<string, string[]>();

    for (const participant of participants) {
      if (participant.conversation.type === 1) {
        // 只处理私聊
        const otherParticipants = await this.prisma.conversationParticipant.findMany({
          where: {
            conversationId: participant.conversationId,
            userId: { not: userId }, // 排除自己
          },
          select: { userId: true },
        });

        const otherUserIds = otherParticipants.map((p) => p.userId);
        conversationParticipantsMap.set(participant.conversationId, otherUserIds);

        otherUserIds.forEach((id) => allUserIds.add(id));
      }
      // 群聊不在此处处理其他成员
    }

    // 批量获取所有相关用户的详细信息
    const usersMap = new Map<string, Pick<UsersTypes.UsersItem, 'id' | 'nickname' | 'avatarUrl'>>();
    if (allUserIds.size > 0) {
      const users = await this.userService.getMultipleUsers(Array.from(allUserIds));
      users.forEach((user) => {
        usersMap.set(user.id, user);
      });
    }

    const unreadCounts = await Promise.all(
      participants.map((participant) => {
        const lastReadMsgId = participant.lastReadMessageId ?? 0;
        // if (lastReadMsgId === 0) {
        //   return new Promise((resolve) => resolve(0));
        // }
        return this.prisma.messageHistory.count({
          where: {
            conversationId: participant.conversationId,
            state: 0,
            senderId: { not: userId },
            msgId: { gt: lastReadMsgId },
          },
        });
      }),
    );

    const list = participants
      .map((participant, index) => {
        if (!participant.conversation) {
          return null;
        }

        let user: Pick<UsersTypes.UsersItem, 'id' | 'nickname' | 'avatarUrl'> | null = null;

        if (participant.conversation.type === 1) {
          // 私聊
          // 从缓存中获取对方用户ID
          const otherUserIds = conversationParticipantsMap.get(participant.conversationId) || [];
          const peerUserId = otherUserIds[0]; // 私聊只有一个对方
          const peerUser = usersMap.get(peerUserId);

          if (peerUser) {
            user = {
              ...peerUser,
              nickname: (participant.remark || peerUser?.nickname) ?? '',
            };
          }
        } else {
          // TODO 群聊
        }

        return {
          ...participant.conversation,
          user,
          unreadCount: unreadCounts[index] ?? 0,
          lastReadMessageId: participant.lastReadMessageId,
        };
      })
      .filter((conversation): conversation is NonNullable<typeof conversation> =>
        Boolean(conversation),
      );

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
