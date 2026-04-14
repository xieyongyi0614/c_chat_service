import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../core/database';

@Injectable()
export class ChatRoomService {
  private readonly logger = new Logger(ChatRoomService.name);

  constructor(private prisma: PrismaService) {}

  // /**
  //  * 获取用户所在的聊天室列表
  //  */
  // async getUserRooms(userId: string) {
  //   try {
  //     const participants = await this.prisma.chatRoomParticipant.findMany({
  //       where: {
  //         user_id: userId,
  //         state: 0 // 正常状态
  //       },
  //       include: {
  //         room: {
  //           include: {
  //             participants: {
  //               where: { state: 0 },
  //               include: {
  //                 user: {
  //                   select: {
  //                     id: true,
  //                     nickname: true,
  //                     avatar_url: true
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       },
  //       orderBy: {
  //         update_time: 'desc'
  //       }
  //     });

  //     return participants.map((p) => p.room);
  //   } catch (error) {
  //     this.logger.error('获取用户聊天室列表失败', error);
  //     throw error;
  //   }
  // }

  // /**
  //  * 获取聊天室详情
  //  */
  // async getRoomById(roomId: string) {
  //   try {
  //     const room = await this.prisma.chatRoom.findUnique({
  //       where: { id: roomId },
  //       include: {
  //         participants: {
  //           where: { state: 0 },
  //           include: {
  //             user: {
  //               select: {
  //                 id: true,
  //                 nickname: true,
  //                 avatar_url: true
  //               }
  //             }
  //           }
  //         }
  //       }
  //     });

  //     if (!room) {
  //       throw new NotFoundException('聊天室不存在');
  //     }

  //     return room;
  //   } catch (error) {
  //     this.logger.error('获取聊天室详情失败', error);
  //     throw error;
  //   }
  // }

  // /**
  //  * 检查用户是否在聊天室中
  //  */
  // async isUserInRoom(userId: string, roomId: string): Promise<boolean> {
  //   try {
  //     const participant = await this.prisma.chatRoomParticipant.findFirst({
  //       where: {
  //         user_id: userId,
  //         room_id: roomId,
  //         state: 0
  //       }
  //     });

  //     return !!participant;
  //   } catch (error) {
  //     this.logger.error('检查用户是否在聊天室失败', error);
  //     return false;
  //   }
  // }

  // /**
  //  * 获取聊天室的所有参与者
  //  */
  // async getRoomParticipants(roomId: string) {
  //   try {
  //     const participants = await this.prisma.chatRoomParticipant.findMany({
  //       where: {
  //         room_id: roomId,
  //         state: 0
  //       },
  //       include: {
  //         user: {
  //           select: {
  //             id: true,
  //             nickname: true,
  //             avatar_url: true
  //           }
  //         }
  //       }
  //     });

  //     return participants;
  //   } catch (error) {
  //     this.logger.error('获取聊天室参与者失败', error);
  //     throw error;
  //   }
  // }

  // /**
  //  * 创建私聊房间
  //  */
  // async createPrivateRoom(userId1: string, userId2: string) {
  //   try {
  //     // 检查是否已存在私聊房间
  //     const existingRooms = await this.prisma.chatRoom.findMany({
  //       where: {
  //         type: 0, // 私聊
  //         state: 0
  //       },
  //       include: {
  //         participants: {
  //           where: {
  //             user_id: { in: [userId1, userId2] },
  //             state: 0
  //           }
  //         }
  //       }
  //     });

  //     // 查找包含两个用户的房间
  //     for (const room of existingRooms) {
  //       const userIds = room.participants.map((p) => p.user_id);
  //       if (userIds.includes(userId1) && userIds.includes(userId2)) {
  //         return room;
  //       }
  //     }

  //     // 创建新房间
  //     const room = await this.prisma.chatRoom.create({
  //       data: {
  //         type: 0,
  //         state: 0,
  //         participants: {
  //           create: [
  //             { user_id: userId1, room_identity: 2, state: 0 },
  //             { user_id: userId2, room_identity: 2, state: 0 }
  //           ]
  //         }
  //       },
  //       include: {
  //         participants: {
  //           include: {
  //             user: {
  //               select: {
  //                 id: true,
  //                 nickname: true,
  //                 avatar_url: true
  //               }
  //             }
  //           }
  //         }
  //       }
  //     });

  //     return room;
  //   } catch (error) {
  //     this.logger.error('创建私聊房间失败', error);
  //     throw error;
  //   }
  // }

  // /**
  //  * 创建群聊房间
  //  */
  // async createGroupRoom(creatorId: string, roomName: string, userIds: string[]) {
  //   try {
  //     const room = await this.prisma.chatRoom.create({
  //       data: {
  //         type: 1, // 群聊
  //         state: 0,
  //         room_name: roomName,
  //         participants: {
  //           create: [
  //             {
  //               user_id: creatorId,
  //               room_identity: 0, // 群主
  //               state: 0
  //             },
  //             ...userIds
  //               .filter((id) => id !== creatorId)
  //               .map((userId) => ({
  //                 user_id: userId,
  //                 room_identity: 2, // 普通成员
  //                 state: 0
  //               }))
  //           ]
  //         }
  //       },
  //       include: {
  //         participants: {
  //           include: {
  //             user: {
  //               select: {
  //                 id: true,
  //                 nickname: true,
  //                 avatar_url: true
  //               }
  //             }
  //           }
  //         }
  //       }
  //     });

  //     return room;
  //   } catch (error) {
  //     this.logger.error('创建群聊房间失败', error);
  //     throw error;
  //   }
  // }
}
