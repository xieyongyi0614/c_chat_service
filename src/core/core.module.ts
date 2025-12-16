import { Global, Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from './database';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class CoreModule {}
