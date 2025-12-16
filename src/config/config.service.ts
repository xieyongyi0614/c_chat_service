import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MyConfigService {
  constructor(private configService: ConfigService) {}

  get globalPrefix() {
    return this.configService.get<string>('GLOBAL_PREFIX');
  }

  get databaseUrl() {
    return this.configService.get<string>('DATABASE_URL');
  }

  get jwtSecret() {
    return this.configService.get<string>('JWT_SECRET');
  }
  get jwtExpiresIn() {
    return this.configService.get<string>('JWT_EXPIRES_IN') ?? '7d';
  }

  get port(): number {
    return parseInt(this.configService.get<string>('PORT') ?? '3001', 10);
  }
  get dbInfo() {
    return {
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USER'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME')
    };
  }
  get redisInfo() {
    return {
      host: this.configService.get<string>('REDIS_HOST'),
      port: this.configService.get<number>('REDIS_PORT'),
      password: this.configService.get<string>('REDIS_PASSWORD')
    };
  }
}
