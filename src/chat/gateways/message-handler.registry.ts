import { Command } from 'src/proto';
import { serviceDecodeProtoMap, SocketProtoEventType } from 'src/proto/protoMap';
import { ChatSocket } from 'src/types/socket.types';

/** 消息命令处理器注册中心 */
export abstract class MessageHandlerRegistry {
  protected readonly handlers = new Map<
    SocketProtoEventType,
    (client: ChatSocket, payload?: unknown, requestId?: string) => void | Promise<void>
  >();

  protected abstract initializeHandlers(): void;

  public dispatch(command: Command, client: ChatSocket) {
    const event = command.event as SocketProtoEventType;
    console.log(`收到消息：Event=${command.event}`);
    const handler = this.handlers.get(event);

    if (!handler) {
      console.warn(`⚠️ 未找到事件处理器: ${command.event}`, this.handlers);
      return;
    }
    const clazz = serviceDecodeProtoMap[event];
    const decodedResult = clazz?.decode(command.payload[0]);
    if (decodedResult) {
      console.log(
        '============================处理订阅广播========================================',
      );
      console.log(`收到消息：Event=${event},requestId=${command.requestId}`);
      console.log(decodedResult);
      console.log(
        '============================处理订阅广播========================================',
      );
    }

    // 这里可以根据 event 类型自动解码 body，或者交给 handler 自己解
    // 为了灵活性，这里直接把整个 command 传进去，或者只传 body
    // 假设我们传解码后的 body (需要根据你的逻辑调整)

    return handler(client, decodedResult, command.requestId);
  }

  sendMessageToClient(
    socketClient: ChatSocket,
    event: SocketProtoEventType,
    payload?: Uint8Array | Uint8Array[],
    requestId?: string,
  ) {
    const sendCommand = Command.create({
      event,
      userId: socketClient.data.user?.id,
      payload: payload ? (Array.isArray(payload) ? payload : [payload]) : undefined,
      requestId,
    });
    const responseBuffer = Command.encode(sendCommand).finish();
    socketClient.emit('message', responseBuffer);
    console.log('✅ 已发送到客户端', sendCommand);
  }
}
