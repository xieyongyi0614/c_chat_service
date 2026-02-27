import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';
import { WsException } from '@nestjs/websockets';
import { MyConfigService } from '../config/config.service';

@Injectable()
export class WsAuthService {
  constructor(
    private jwtService: JwtService,
    private configService: MyConfigService
  ) {}

  async authenticateSocket(client: Socket): Promise<any> {
    const token = this.extractTokenFromHeader(client);

    if (!token) {
      throw new WsException('未提供认证令牌');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.jwtSecret
      });

      if (!payload?.sub) {
        throw new WsException('无效的用户凭证');
      }

      return payload;
    } catch (error) {
      throw new WsException(`认证失败: ${error.message}`);
    }
  }

  private extractTokenFromHeader(client: Socket): string {
    return (
      client.handshake.auth?.token ||
      client.handshake.query?.token ||
      (client.handshake.headers?.authorization as string)?.replace('Bearer ', '') ||
      ''
    );
  }
}
