import { Module } from '@nestjs/common';
import { ChatGateway } from './gateways/chat.gateway';
import { MessageService } from './services/message.service';
import { ChatRoomService } from './services/chat-room.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [ChatGateway, MessageService, ChatRoomService],
  exports: [MessageService, ChatRoomService]
})
export class ChatModule {}
