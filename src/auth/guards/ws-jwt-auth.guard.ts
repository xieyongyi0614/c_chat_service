import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { WsAuthService } from '../ws-auth.service';

@Injectable()
export class WsJwtAuthGuard implements CanActivate {
  constructor(private wsAuthService: WsAuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client = context.switchToWs().getClient<Socket>();

    try {
      const user = await this.wsAuthService.authenticateSocket(client);

      if (!client.data) client.data = {};
      client.data.user = user;

      return true;
    } catch (error) {
      throw error;
    }
  }
}
