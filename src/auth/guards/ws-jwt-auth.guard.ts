import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MyConfigService } from '../../config/config.service';

@Injectable()
export class WsJwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: MyConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const client: Socket = context.switchToWs().getClient();
      const token = this.extractTokenFromHeader(client);

      if (!token) {
        throw new WsException('未提供认证令牌');
      }

      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.jwtSecret
      });

      if (!payload || !payload.sub) {
        throw new WsException('无效的认证令牌');
      }

      // 将用户信息附加到 socket 对象上
      client.data.user = payload;
      return true;
    } catch (error) {
      if (error instanceof WsException) {
        throw error;
      }
      throw new WsException('认证失败: ' + (error.message || '未知错误'));
    }
  }

  private extractTokenFromHeader(client: Socket): string | undefined {
    // 从 handshake 的 auth 或 query 中获取 token
    const token =
      client.handshake.auth?.token ||
      client.handshake.query?.token ||
      client.handshake.headers?.authorization?.replace('Bearer ', '');

    return token as string | undefined;
  }
}
