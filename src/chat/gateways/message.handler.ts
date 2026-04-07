import { Injectable } from '@nestjs/common';
import { MessageHandlerRegistry } from './message-handler.registry';
import { SOCKET_PROTO_EVENT } from 'src/proto/protoMap';
import { ChatSocket } from 'src/types/socket.types';
import { UsersService } from 'src/api/web/users/users.service';
import { UserSearchDto } from 'src/api/web/users/dto/user.dto';
import { GetUserList, GetUserListResponse } from 'src/proto';

@Injectable()
export class MessageHandler extends MessageHandlerRegistry {
  constructor(private readonly userService: UsersService) {
    super();
  }

  onModuleInit() {
    this.initializeHandlers();
  }
  protected initializeHandlers(): void {
    this.handlers.set(SOCKET_PROTO_EVENT.ping, (client) => this.handlePing(client));
    this.handlers.set(SOCKET_PROTO_EVENT.getUserList, this.handleGetUserList);
  }

  private handlePing(client: ChatSocket) {
    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.ping);
  }

  private getUserListSearchDto(payload?: GetUserList | null): UserSearchDto {
    const p = payload?.pagination;
    console.log('getUserListSearchDto', p);
    return {
      page: p?.page != null ? Number(p.page) : 1,
      pageSize: p?.pageSize != null ? Number(p.pageSize) : 10,
      word: payload?.word || '',
    };
  }

  private handleGetUserList = async (
    client: ChatSocket,
    payload?: GetUserList | null,
    requestId?: string,
  ) => {
    const search = this.getUserListSearchDto(payload);
    const { list, ...rest } = await this.userService.list(search);
    console.log('handleGetUserList', search, payload, list, rest);
    // const encoded = list.map((u) =>
    //   UserInfo.encode(
    //     UserInfo.create({
    //       id: u.id,
    //       email: u.email,
    //       nickname: u.nickname ?? undefined,
    //       avatarUrl: u.avatar_url ?? undefined,
    //       state: u.state,
    //       updateTime:
    //         u.update_time instanceof Date ? u.update_time.getTime() : Number(u.update_time),
    //     }),
    //   ).finish(),
    // );
    const response = GetUserListResponse.encode(
      GetUserListResponse.create({ pagination: rest, list }),
    ).finish();
    this.sendMessageToClient(client, SOCKET_PROTO_EVENT.getUserList, response, requestId);
  };
}
