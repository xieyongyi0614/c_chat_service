import { Module } from '@nestjs/common';
import { ChatGateway } from './gateways/chat.gateway';
import { MessageService } from './services/message.service';
import { ChatRoomService } from './services/chat-room.service';
import { ChatService } from './services/chat.service';
import { AuthModule } from '../../auth/auth.module';
import { UsersService } from 'src/api/web/users/users.service';

@Module({
  imports: [AuthModule],
  providers: [ChatGateway, MessageService, ChatRoomService, ChatService, UsersService],
  exports: [MessageService, ChatRoomService, ChatService],
})
export class ChatModule {}
