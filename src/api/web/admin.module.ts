import { Module } from '@nestjs/common';
import { UserController } from './users';
import { AuthModule } from '../../auth';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';

@Module({
  controllers: [UserController, UploadController],
  imports: [AuthModule],
  providers: [UploadService],
})
export class AdminModule {}
