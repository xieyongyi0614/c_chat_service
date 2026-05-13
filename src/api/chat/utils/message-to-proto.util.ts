import { Prisma } from 'generated/prisma/client';
import { FileInfo, IMessageInfo, MediaInfo } from 'src/proto';

export const messageHistoryWithMediaInclude = {
  media: { include: { file: true } },
} satisfies Prisma.MessageHistoryInclude;

export type MessageHistoryWithMedia = Prisma.MessageHistoryGetPayload<{
  include: typeof messageHistoryWithMediaInclude;
}>;

function waveformFromJson(value: unknown): number[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const out = value.filter((v): v is number => typeof v === 'number');
  return out.length ? out : undefined;
}

export function buildMessageInfoPayload(m: MessageHistoryWithMedia): IMessageInfo {
  const media = m.media;
  const file = media?.file;

  const mediaProto =
    media && file
      ? MediaInfo.create({
          id: media.id,
          type: media.type,
          fileId: media.fileId,
          file: FileInfo.create({
            id: file.id,
            fileName: file.fileName,
            url: file.url,
            mimeType: file.mimeType,
            ext: file.ext ?? undefined,
            size: Number(file.size),
          }),
          fileUrl: media.fileUrl ?? file.url ?? undefined,
          thumbUrl: media.thumbUrl ?? undefined,
          width: media.width ?? undefined,
          height: media.height ?? undefined,
          durationSec: media.duration ?? undefined,
          waveform: waveformFromJson(media.waveform),
        })
      : undefined;

  return {
    id: m.id,
    msgId: m.msgId,
    senderId: m.senderId,
    conversationId: m.conversationId,
    content: m.content ?? '',
    type: m.type,
    state: m.state,
    createTime: m.createTime.getTime(),
    updateTime: m.updateTime.getTime(),
    clientMsgId: m.clientMsgId ?? '',
    mediaGroupId: m.mediaGroupId ?? undefined,
    media: mediaProto,
  };
}
