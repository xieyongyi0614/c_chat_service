import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a CreateConversationRequest. */
export interface ICreateConversationRequest {

    /** CreateConversationRequest targetId */
    targetId?: (string|null);
}

/** Represents a CreateConversationRequest. */
export class CreateConversationRequest implements ICreateConversationRequest {

    /**
     * Constructs a new CreateConversationRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateConversationRequest);

    /** CreateConversationRequest targetId. */
    public targetId: string;

    /**
     * Creates a new CreateConversationRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateConversationRequest instance
     */
    public static create(properties?: ICreateConversationRequest): CreateConversationRequest;

    /**
     * Encodes the specified CreateConversationRequest message. Does not implicitly {@link CreateConversationRequest.verify|verify} messages.
     * @param message CreateConversationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateConversationRequest message, length delimited. Does not implicitly {@link CreateConversationRequest.verify|verify} messages.
     * @param message CreateConversationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateConversationRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateConversationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateConversationRequest;

    /**
     * Decodes a CreateConversationRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateConversationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateConversationRequest;

    /**
     * Verifies a CreateConversationRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateConversationRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateConversationRequest
     */
    public static fromObject(object: { [k: string]: any }): CreateConversationRequest;

    /**
     * Creates a plain object from a CreateConversationRequest message. Also converts values to other types if specified.
     * @param message CreateConversationRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateConversationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateConversationRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CreateConversationRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GroupInfo. */
export interface IGroupInfo {

    /** GroupInfo id */
    id?: (string|null);

    /** GroupInfo name */
    name?: (string|null);

    /** GroupInfo avatarUrl */
    avatarUrl?: (string|null);

    /** GroupInfo notice */
    notice?: (string|null);

    /** GroupInfo ownerId */
    ownerId?: (string|null);

    /** GroupInfo state */
    state?: (number|null);

    /** GroupInfo updateTime */
    updateTime?: (number|Long|null);

    /** GroupInfo createTime */
    createTime?: (number|Long|null);
}

/** Represents a GroupInfo. */
export class GroupInfo implements IGroupInfo {

    /**
     * Constructs a new GroupInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGroupInfo);

    /** GroupInfo id. */
    public id: string;

    /** GroupInfo name. */
    public name: string;

    /** GroupInfo avatarUrl. */
    public avatarUrl?: (string|null);

    /** GroupInfo notice. */
    public notice?: (string|null);

    /** GroupInfo ownerId. */
    public ownerId: string;

    /** GroupInfo state. */
    public state: number;

    /** GroupInfo updateTime. */
    public updateTime: (number|Long);

    /** GroupInfo createTime. */
    public createTime: (number|Long);

    /**
     * Creates a new GroupInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GroupInfo instance
     */
    public static create(properties?: IGroupInfo): GroupInfo;

    /**
     * Encodes the specified GroupInfo message. Does not implicitly {@link GroupInfo.verify|verify} messages.
     * @param message GroupInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GroupInfo message, length delimited. Does not implicitly {@link GroupInfo.verify|verify} messages.
     * @param message GroupInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GroupInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GroupInfo;

    /**
     * Decodes a GroupInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GroupInfo;

    /**
     * Verifies a GroupInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GroupInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GroupInfo
     */
    public static fromObject(object: { [k: string]: any }): GroupInfo;

    /**
     * Creates a plain object from a GroupInfo message. Also converts values to other types if specified.
     * @param message GroupInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GroupInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GroupInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GroupInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TargetInfo. */
export interface ITargetInfo {

    /** TargetInfo id */
    id?: (string|null);

    /** TargetInfo name */
    name?: (string|null);

    /** TargetInfo avatarUrl */
    avatarUrl?: (string|null);
}

/** Represents a TargetInfo. */
export class TargetInfo implements ITargetInfo {

    /**
     * Constructs a new TargetInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITargetInfo);

    /** TargetInfo id. */
    public id: string;

    /** TargetInfo name. */
    public name: string;

    /** TargetInfo avatarUrl. */
    public avatarUrl: string;

    /**
     * Creates a new TargetInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TargetInfo instance
     */
    public static create(properties?: ITargetInfo): TargetInfo;

    /**
     * Encodes the specified TargetInfo message. Does not implicitly {@link TargetInfo.verify|verify} messages.
     * @param message TargetInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITargetInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TargetInfo message, length delimited. Does not implicitly {@link TargetInfo.verify|verify} messages.
     * @param message TargetInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITargetInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TargetInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TargetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TargetInfo;

    /**
     * Decodes a TargetInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TargetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TargetInfo;

    /**
     * Verifies a TargetInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TargetInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TargetInfo
     */
    public static fromObject(object: { [k: string]: any }): TargetInfo;

    /**
     * Creates a plain object from a TargetInfo message. Also converts values to other types if specified.
     * @param message TargetInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TargetInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TargetInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TargetInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FileInfo. */
export interface IFileInfo {

    /** FileInfo id */
    id?: (string|null);

    /** FileInfo fileName */
    fileName?: (string|null);

    /** FileInfo url */
    url?: (string|null);

    /** FileInfo mimeType */
    mimeType?: (string|null);

    /** FileInfo ext */
    ext?: (string|null);

    /** FileInfo size */
    size?: (number|Long|null);
}

/** Represents a FileInfo. */
export class FileInfo implements IFileInfo {

    /**
     * Constructs a new FileInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFileInfo);

    /** FileInfo id. */
    public id: string;

    /** FileInfo fileName. */
    public fileName: string;

    /** FileInfo url. */
    public url: string;

    /** FileInfo mimeType. */
    public mimeType: string;

    /** FileInfo ext. */
    public ext?: (string|null);

    /** FileInfo size. */
    public size: (number|Long);

    /**
     * Creates a new FileInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FileInfo instance
     */
    public static create(properties?: IFileInfo): FileInfo;

    /**
     * Encodes the specified FileInfo message. Does not implicitly {@link FileInfo.verify|verify} messages.
     * @param message FileInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link FileInfo.verify|verify} messages.
     * @param message FileInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FileInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FileInfo;

    /**
     * Decodes a FileInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FileInfo;

    /**
     * Verifies a FileInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FileInfo
     */
    public static fromObject(object: { [k: string]: any }): FileInfo;

    /**
     * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
     * @param message FileInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FileInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FileInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MediaInfo. */
export interface IMediaInfo {

    /** MediaInfo id */
    id?: (string|null);

    /** MediaInfo type */
    type?: (number|null);

    /** MediaInfo fileId */
    fileId?: (string|null);

    /** MediaInfo file */
    file?: (IFileInfo|null);

    /** MediaInfo fileUrl */
    fileUrl?: (string|null);

    /** MediaInfo thumbUrl */
    thumbUrl?: (string|null);

    /** MediaInfo width */
    width?: (number|null);

    /** MediaInfo height */
    height?: (number|null);

    /** MediaInfo durationSec */
    durationSec?: (number|null);

    /** MediaInfo waveform */
    waveform?: (string|null);
}

/** Represents a MediaInfo. */
export class MediaInfo implements IMediaInfo {

    /**
     * Constructs a new MediaInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMediaInfo);

    /** MediaInfo id. */
    public id: string;

    /** MediaInfo type. */
    public type: number;

    /** MediaInfo fileId. */
    public fileId: string;

    /** MediaInfo file. */
    public file?: (IFileInfo|null);

    /** MediaInfo fileUrl. */
    public fileUrl?: (string|null);

    /** MediaInfo thumbUrl. */
    public thumbUrl?: (string|null);

    /** MediaInfo width. */
    public width?: (number|null);

    /** MediaInfo height. */
    public height?: (number|null);

    /** MediaInfo durationSec. */
    public durationSec?: (number|null);

    /** MediaInfo waveform. */
    public waveform?: (string|null);

    /**
     * Creates a new MediaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MediaInfo instance
     */
    public static create(properties?: IMediaInfo): MediaInfo;

    /**
     * Encodes the specified MediaInfo message. Does not implicitly {@link MediaInfo.verify|verify} messages.
     * @param message MediaInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMediaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MediaInfo message, length delimited. Does not implicitly {@link MediaInfo.verify|verify} messages.
     * @param message MediaInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMediaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MediaInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MediaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MediaInfo;

    /**
     * Decodes a MediaInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MediaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MediaInfo;

    /**
     * Verifies a MediaInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MediaInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MediaInfo
     */
    public static fromObject(object: { [k: string]: any }): MediaInfo;

    /**
     * Creates a plain object from a MediaInfo message. Also converts values to other types if specified.
     * @param message MediaInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MediaInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MediaInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MediaInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ConversationInfo. */
export interface IConversationInfo {

    /** ConversationInfo id */
    id?: (string|null);

    /** ConversationInfo type */
    type?: (number|null);

    /** ConversationInfo targetInfo */
    targetInfo?: (ITargetInfo|null);

    /** ConversationInfo lastMsgContent */
    lastMsgContent?: (string|null);

    /** ConversationInfo lastMsgTime */
    lastMsgTime?: (number|Long|null);

    /** ConversationInfo updateTime */
    updateTime?: (number|Long|null);

    /** ConversationInfo createTime */
    createTime?: (number|Long|null);

    /** ConversationInfo unreadCount */
    unreadCount?: (number|null);

    /** ConversationInfo lastReadMessageId */
    lastReadMessageId?: (number|null);
}

/** Represents a ConversationInfo. */
export class ConversationInfo implements IConversationInfo {

    /**
     * Constructs a new ConversationInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConversationInfo);

    /** ConversationInfo id. */
    public id: string;

    /** ConversationInfo type. */
    public type: number;

    /** ConversationInfo targetInfo. */
    public targetInfo?: (ITargetInfo|null);

    /** ConversationInfo lastMsgContent. */
    public lastMsgContent?: (string|null);

    /** ConversationInfo lastMsgTime. */
    public lastMsgTime?: (number|Long|null);

    /** ConversationInfo updateTime. */
    public updateTime: (number|Long);

    /** ConversationInfo createTime. */
    public createTime: (number|Long);

    /** ConversationInfo unreadCount. */
    public unreadCount?: (number|null);

    /** ConversationInfo lastReadMessageId. */
    public lastReadMessageId?: (number|null);

    /**
     * Creates a new ConversationInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConversationInfo instance
     */
    public static create(properties?: IConversationInfo): ConversationInfo;

    /**
     * Encodes the specified ConversationInfo message. Does not implicitly {@link ConversationInfo.verify|verify} messages.
     * @param message ConversationInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConversationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConversationInfo message, length delimited. Does not implicitly {@link ConversationInfo.verify|verify} messages.
     * @param message ConversationInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConversationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConversationInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConversationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConversationInfo;

    /**
     * Decodes a ConversationInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConversationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConversationInfo;

    /**
     * Verifies a ConversationInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConversationInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConversationInfo
     */
    public static fromObject(object: { [k: string]: any }): ConversationInfo;

    /**
     * Creates a plain object from a ConversationInfo message. Also converts values to other types if specified.
     * @param message ConversationInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConversationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConversationInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ConversationInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SendMessageRequest. */
export interface ISendMessageRequest {

    /** SendMessageRequest conversationId */
    conversationId?: (string|null);

    /** SendMessageRequest content */
    content?: (string|null);

    /** SendMessageRequest type */
    type?: (number|null);

    /** SendMessageRequest targetId */
    targetId?: (string|null);

    /** SendMessageRequest clientMsgId */
    clientMsgId?: (string|null);

    /** SendMessageRequest mediaGroupId */
    mediaGroupId?: (string|null);

    /** SendMessageRequest fileId */
    fileId?: (string|null);

    /** SendMessageRequest durationSec */
    durationSec?: (number|null);

    /** SendMessageRequest waveform */
    waveform?: (string|null);

    /** SendMessageRequest thumbUrl */
    thumbUrl?: (string|null);
}

/** Represents a SendMessageRequest. */
export class SendMessageRequest implements ISendMessageRequest {

    /**
     * Constructs a new SendMessageRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendMessageRequest);

    /** SendMessageRequest conversationId. */
    public conversationId: string;

    /** SendMessageRequest content. */
    public content: string;

    /** SendMessageRequest type. */
    public type: number;

    /** SendMessageRequest targetId. */
    public targetId?: (string|null);

    /** SendMessageRequest clientMsgId. */
    public clientMsgId: string;

    /** SendMessageRequest mediaGroupId. */
    public mediaGroupId?: (string|null);

    /** SendMessageRequest fileId. */
    public fileId?: (string|null);

    /** SendMessageRequest durationSec. */
    public durationSec?: (number|null);

    /** SendMessageRequest waveform. */
    public waveform?: (string|null);

    /** SendMessageRequest thumbUrl. */
    public thumbUrl?: (string|null);

    /**
     * Creates a new SendMessageRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendMessageRequest instance
     */
    public static create(properties?: ISendMessageRequest): SendMessageRequest;

    /**
     * Encodes the specified SendMessageRequest message. Does not implicitly {@link SendMessageRequest.verify|verify} messages.
     * @param message SendMessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SendMessageRequest message, length delimited. Does not implicitly {@link SendMessageRequest.verify|verify} messages.
     * @param message SendMessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISendMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendMessageRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendMessageRequest;

    /**
     * Decodes a SendMessageRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SendMessageRequest;

    /**
     * Verifies a SendMessageRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SendMessageRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendMessageRequest
     */
    public static fromObject(object: { [k: string]: any }): SendMessageRequest;

    /**
     * Creates a plain object from a SendMessageRequest message. Also converts values to other types if specified.
     * @param message SendMessageRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SendMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SendMessageRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SendMessageRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an AckSendMessage. */
export interface IAckSendMessage {

    /** AckSendMessage clientMsgId */
    clientMsgId?: (string|null);

    /** AckSendMessage status */
    status?: (string|null);
}

/** Represents an AckSendMessage. */
export class AckSendMessage implements IAckSendMessage {

    /**
     * Constructs a new AckSendMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAckSendMessage);

    /** AckSendMessage clientMsgId. */
    public clientMsgId: string;

    /** AckSendMessage status. */
    public status: string;

    /**
     * Creates a new AckSendMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AckSendMessage instance
     */
    public static create(properties?: IAckSendMessage): AckSendMessage;

    /**
     * Encodes the specified AckSendMessage message. Does not implicitly {@link AckSendMessage.verify|verify} messages.
     * @param message AckSendMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAckSendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AckSendMessage message, length delimited. Does not implicitly {@link AckSendMessage.verify|verify} messages.
     * @param message AckSendMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAckSendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AckSendMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AckSendMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AckSendMessage;

    /**
     * Decodes an AckSendMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AckSendMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AckSendMessage;

    /**
     * Verifies an AckSendMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AckSendMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AckSendMessage
     */
    public static fromObject(object: { [k: string]: any }): AckSendMessage;

    /**
     * Creates a plain object from an AckSendMessage message. Also converts values to other types if specified.
     * @param message AckSendMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AckSendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AckSendMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AckSendMessage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MessageInfo. */
export interface IMessageInfo {

    /** MessageInfo id */
    id?: (string|null);

    /** MessageInfo msgId */
    msgId?: (number|null);

    /** MessageInfo senderId */
    senderId?: (string|null);

    /** MessageInfo conversationId */
    conversationId?: (string|null);

    /** MessageInfo content */
    content?: (string|null);

    /** MessageInfo type */
    type?: (number|null);

    /** MessageInfo state */
    state?: (number|null);

    /** MessageInfo createTime */
    createTime?: (number|Long|null);

    /** MessageInfo updateTime */
    updateTime?: (number|Long|null);

    /** MessageInfo clientMsgId */
    clientMsgId?: (string|null);

    /** MessageInfo mediaGroupId */
    mediaGroupId?: (string|null);

    /** MessageInfo media */
    media?: (IMediaInfo|null);
}

/** Represents a MessageInfo. */
export class MessageInfo implements IMessageInfo {

    /**
     * Constructs a new MessageInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessageInfo);

    /** MessageInfo id. */
    public id: string;

    /** MessageInfo msgId. */
    public msgId: number;

    /** MessageInfo senderId. */
    public senderId: string;

    /** MessageInfo conversationId. */
    public conversationId: string;

    /** MessageInfo content. */
    public content: string;

    /** MessageInfo type. */
    public type: number;

    /** MessageInfo state. */
    public state: number;

    /** MessageInfo createTime. */
    public createTime: (number|Long);

    /** MessageInfo updateTime. */
    public updateTime: (number|Long);

    /** MessageInfo clientMsgId. */
    public clientMsgId: string;

    /** MessageInfo mediaGroupId. */
    public mediaGroupId?: (string|null);

    /** MessageInfo media. */
    public media?: (IMediaInfo|null);

    /**
     * Creates a new MessageInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageInfo instance
     */
    public static create(properties?: IMessageInfo): MessageInfo;

    /**
     * Encodes the specified MessageInfo message. Does not implicitly {@link MessageInfo.verify|verify} messages.
     * @param message MessageInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MessageInfo message, length delimited. Does not implicitly {@link MessageInfo.verify|verify} messages.
     * @param message MessageInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MessageInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageInfo;

    /**
     * Decodes a MessageInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MessageInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MessageInfo;

    /**
     * Verifies a MessageInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MessageInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MessageInfo
     */
    public static fromObject(object: { [k: string]: any }): MessageInfo;

    /**
     * Creates a plain object from a MessageInfo message. Also converts values to other types if specified.
     * @param message MessageInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MessageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MessageInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MessageInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetConversationListRequest. */
export interface IGetConversationListRequest {

    /** GetConversationListRequest pagination */
    pagination?: (Common.IPaginationRequest|null);
}

/** Represents a GetConversationListRequest. */
export class GetConversationListRequest implements IGetConversationListRequest {

    /**
     * Constructs a new GetConversationListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetConversationListRequest);

    /** GetConversationListRequest pagination. */
    public pagination?: (Common.IPaginationRequest|null);

    /**
     * Creates a new GetConversationListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetConversationListRequest instance
     */
    public static create(properties?: IGetConversationListRequest): GetConversationListRequest;

    /**
     * Encodes the specified GetConversationListRequest message. Does not implicitly {@link GetConversationListRequest.verify|verify} messages.
     * @param message GetConversationListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetConversationListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetConversationListRequest message, length delimited. Does not implicitly {@link GetConversationListRequest.verify|verify} messages.
     * @param message GetConversationListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetConversationListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetConversationListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetConversationListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetConversationListRequest;

    /**
     * Decodes a GetConversationListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetConversationListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetConversationListRequest;

    /**
     * Verifies a GetConversationListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetConversationListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetConversationListRequest
     */
    public static fromObject(object: { [k: string]: any }): GetConversationListRequest;

    /**
     * Creates a plain object from a GetConversationListRequest message. Also converts values to other types if specified.
     * @param message GetConversationListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetConversationListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetConversationListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetConversationListRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetConversationListResponse. */
export interface IGetConversationListResponse {

    /** GetConversationListResponse pagination */
    pagination?: (Common.IPaginationResponse|null);

    /** GetConversationListResponse list */
    list?: (IConversationInfo[]|null);
}

/** Represents a GetConversationListResponse. */
export class GetConversationListResponse implements IGetConversationListResponse {

    /**
     * Constructs a new GetConversationListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetConversationListResponse);

    /** GetConversationListResponse pagination. */
    public pagination?: (Common.IPaginationResponse|null);

    /** GetConversationListResponse list. */
    public list: IConversationInfo[];

    /**
     * Creates a new GetConversationListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetConversationListResponse instance
     */
    public static create(properties?: IGetConversationListResponse): GetConversationListResponse;

    /**
     * Encodes the specified GetConversationListResponse message. Does not implicitly {@link GetConversationListResponse.verify|verify} messages.
     * @param message GetConversationListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetConversationListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetConversationListResponse message, length delimited. Does not implicitly {@link GetConversationListResponse.verify|verify} messages.
     * @param message GetConversationListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetConversationListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetConversationListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetConversationListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetConversationListResponse;

    /**
     * Decodes a GetConversationListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetConversationListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetConversationListResponse;

    /**
     * Verifies a GetConversationListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetConversationListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetConversationListResponse
     */
    public static fromObject(object: { [k: string]: any }): GetConversationListResponse;

    /**
     * Creates a plain object from a GetConversationListResponse message. Also converts values to other types if specified.
     * @param message GetConversationListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetConversationListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetConversationListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetConversationListResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetMessageHistoryRequest. */
export interface IGetMessageHistoryRequest {

    /** GetMessageHistoryRequest conversationId */
    conversationId?: (string|null);

    /** GetMessageHistoryRequest pagination */
    pagination?: (Common.IPaginationRequest|null);
}

/** Represents a GetMessageHistoryRequest. */
export class GetMessageHistoryRequest implements IGetMessageHistoryRequest {

    /**
     * Constructs a new GetMessageHistoryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetMessageHistoryRequest);

    /** GetMessageHistoryRequest conversationId. */
    public conversationId: string;

    /** GetMessageHistoryRequest pagination. */
    public pagination?: (Common.IPaginationRequest|null);

    /**
     * Creates a new GetMessageHistoryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMessageHistoryRequest instance
     */
    public static create(properties?: IGetMessageHistoryRequest): GetMessageHistoryRequest;

    /**
     * Encodes the specified GetMessageHistoryRequest message. Does not implicitly {@link GetMessageHistoryRequest.verify|verify} messages.
     * @param message GetMessageHistoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetMessageHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetMessageHistoryRequest message, length delimited. Does not implicitly {@link GetMessageHistoryRequest.verify|verify} messages.
     * @param message GetMessageHistoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetMessageHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMessageHistoryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetMessageHistoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetMessageHistoryRequest;

    /**
     * Decodes a GetMessageHistoryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetMessageHistoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetMessageHistoryRequest;

    /**
     * Verifies a GetMessageHistoryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetMessageHistoryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetMessageHistoryRequest
     */
    public static fromObject(object: { [k: string]: any }): GetMessageHistoryRequest;

    /**
     * Creates a plain object from a GetMessageHistoryRequest message. Also converts values to other types if specified.
     * @param message GetMessageHistoryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetMessageHistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetMessageHistoryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetMessageHistoryRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetMessageHistoryResponse. */
export interface IGetMessageHistoryResponse {

    /** GetMessageHistoryResponse pagination */
    pagination?: (Common.IPaginationResponse|null);

    /** GetMessageHistoryResponse list */
    list?: (IMessageInfo[]|null);
}

/** Represents a GetMessageHistoryResponse. */
export class GetMessageHistoryResponse implements IGetMessageHistoryResponse {

    /**
     * Constructs a new GetMessageHistoryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetMessageHistoryResponse);

    /** GetMessageHistoryResponse pagination. */
    public pagination?: (Common.IPaginationResponse|null);

    /** GetMessageHistoryResponse list. */
    public list: IMessageInfo[];

    /**
     * Creates a new GetMessageHistoryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMessageHistoryResponse instance
     */
    public static create(properties?: IGetMessageHistoryResponse): GetMessageHistoryResponse;

    /**
     * Encodes the specified GetMessageHistoryResponse message. Does not implicitly {@link GetMessageHistoryResponse.verify|verify} messages.
     * @param message GetMessageHistoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetMessageHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetMessageHistoryResponse message, length delimited. Does not implicitly {@link GetMessageHistoryResponse.verify|verify} messages.
     * @param message GetMessageHistoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetMessageHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMessageHistoryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetMessageHistoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetMessageHistoryResponse;

    /**
     * Decodes a GetMessageHistoryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetMessageHistoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetMessageHistoryResponse;

    /**
     * Verifies a GetMessageHistoryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetMessageHistoryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetMessageHistoryResponse
     */
    public static fromObject(object: { [k: string]: any }): GetMessageHistoryResponse;

    /**
     * Creates a plain object from a GetMessageHistoryResponse message. Also converts values to other types if specified.
     * @param message GetMessageHistoryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetMessageHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetMessageHistoryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetMessageHistoryResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReadMessageRequest. */
export interface IReadMessageRequest {

    /** ReadMessageRequest conversationId */
    conversationId?: (string|null);

    /** ReadMessageRequest messageId */
    messageId?: (string|null);
}

/** Represents a ReadMessageRequest. */
export class ReadMessageRequest implements IReadMessageRequest {

    /**
     * Constructs a new ReadMessageRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReadMessageRequest);

    /** ReadMessageRequest conversationId. */
    public conversationId: string;

    /** ReadMessageRequest messageId. */
    public messageId?: (string|null);

    /**
     * Creates a new ReadMessageRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadMessageRequest instance
     */
    public static create(properties?: IReadMessageRequest): ReadMessageRequest;

    /**
     * Encodes the specified ReadMessageRequest message. Does not implicitly {@link ReadMessageRequest.verify|verify} messages.
     * @param message ReadMessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReadMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReadMessageRequest message, length delimited. Does not implicitly {@link ReadMessageRequest.verify|verify} messages.
     * @param message ReadMessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReadMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadMessageRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReadMessageRequest;

    /**
     * Decodes a ReadMessageRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReadMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReadMessageRequest;

    /**
     * Verifies a ReadMessageRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReadMessageRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReadMessageRequest
     */
    public static fromObject(object: { [k: string]: any }): ReadMessageRequest;

    /**
     * Creates a plain object from a ReadMessageRequest message. Also converts values to other types if specified.
     * @param message ReadMessageRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReadMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReadMessageRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReadMessageRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReadMessageResponse. */
export interface IReadMessageResponse {

    /** ReadMessageResponse conversationId */
    conversationId?: (string|null);

    /** ReadMessageResponse messageId */
    messageId?: (string|null);

    /** ReadMessageResponse unreadCount */
    unreadCount?: (number|null);
}

/** Represents a ReadMessageResponse. */
export class ReadMessageResponse implements IReadMessageResponse {

    /**
     * Constructs a new ReadMessageResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReadMessageResponse);

    /** ReadMessageResponse conversationId. */
    public conversationId: string;

    /** ReadMessageResponse messageId. */
    public messageId?: (string|null);

    /** ReadMessageResponse unreadCount. */
    public unreadCount: number;

    /**
     * Creates a new ReadMessageResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadMessageResponse instance
     */
    public static create(properties?: IReadMessageResponse): ReadMessageResponse;

    /**
     * Encodes the specified ReadMessageResponse message. Does not implicitly {@link ReadMessageResponse.verify|verify} messages.
     * @param message ReadMessageResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReadMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReadMessageResponse message, length delimited. Does not implicitly {@link ReadMessageResponse.verify|verify} messages.
     * @param message ReadMessageResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReadMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadMessageResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadMessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReadMessageResponse;

    /**
     * Decodes a ReadMessageResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReadMessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReadMessageResponse;

    /**
     * Verifies a ReadMessageResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReadMessageResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReadMessageResponse
     */
    public static fromObject(object: { [k: string]: any }): ReadMessageResponse;

    /**
     * Creates a plain object from a ReadMessageResponse message. Also converts values to other types if specified.
     * @param message ReadMessageResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReadMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReadMessageResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReadMessageResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SendFileUploadComplete. */
export interface ISendFileUploadComplete {

    /** SendFileUploadComplete uploadId */
    uploadId?: (string|null);

    /** SendFileUploadComplete fileId */
    fileId?: (string|null);
}

/** Represents a SendFileUploadComplete. */
export class SendFileUploadComplete implements ISendFileUploadComplete {

    /**
     * Constructs a new SendFileUploadComplete.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendFileUploadComplete);

    /** SendFileUploadComplete uploadId. */
    public uploadId: string;

    /** SendFileUploadComplete fileId. */
    public fileId: string;

    /**
     * Creates a new SendFileUploadComplete instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendFileUploadComplete instance
     */
    public static create(properties?: ISendFileUploadComplete): SendFileUploadComplete;

    /**
     * Encodes the specified SendFileUploadComplete message. Does not implicitly {@link SendFileUploadComplete.verify|verify} messages.
     * @param message SendFileUploadComplete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendFileUploadComplete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SendFileUploadComplete message, length delimited. Does not implicitly {@link SendFileUploadComplete.verify|verify} messages.
     * @param message SendFileUploadComplete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISendFileUploadComplete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendFileUploadComplete message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendFileUploadComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendFileUploadComplete;

    /**
     * Decodes a SendFileUploadComplete message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendFileUploadComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SendFileUploadComplete;

    /**
     * Verifies a SendFileUploadComplete message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SendFileUploadComplete message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendFileUploadComplete
     */
    public static fromObject(object: { [k: string]: any }): SendFileUploadComplete;

    /**
     * Creates a plain object from a SendFileUploadComplete message. Also converts values to other types if specified.
     * @param message SendFileUploadComplete
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SendFileUploadComplete, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SendFileUploadComplete to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SendFileUploadComplete
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Namespace Common. */
export namespace Common {

    /** Properties of a PaginationRequest. */
    interface IPaginationRequest {

        /** PaginationRequest page */
        page?: (number|null);

        /** PaginationRequest pageSize */
        pageSize?: (number|null);
    }

    /** Represents a PaginationRequest. */
    class PaginationRequest implements IPaginationRequest {

        /**
         * Constructs a new PaginationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IPaginationRequest);

        /** PaginationRequest page. */
        public page: number;

        /** PaginationRequest pageSize. */
        public pageSize: number;

        /**
         * Creates a new PaginationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaginationRequest instance
         */
        public static create(properties?: Common.IPaginationRequest): Common.PaginationRequest;

        /**
         * Encodes the specified PaginationRequest message. Does not implicitly {@link Common.PaginationRequest.verify|verify} messages.
         * @param message PaginationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IPaginationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaginationRequest message, length delimited. Does not implicitly {@link Common.PaginationRequest.verify|verify} messages.
         * @param message PaginationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IPaginationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaginationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaginationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.PaginationRequest;

        /**
         * Decodes a PaginationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaginationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.PaginationRequest;

        /**
         * Verifies a PaginationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaginationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaginationRequest
         */
        public static fromObject(object: { [k: string]: any }): Common.PaginationRequest;

        /**
         * Creates a plain object from a PaginationRequest message. Also converts values to other types if specified.
         * @param message PaginationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Common.PaginationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaginationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PaginationRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PaginationResponse. */
    interface IPaginationResponse {

        /** PaginationResponse total */
        total?: (number|null);

        /** PaginationResponse page */
        page?: (number|null);

        /** PaginationResponse pageSize */
        pageSize?: (number|null);

        /** PaginationResponse totalPage */
        totalPage?: (number|null);
    }

    /** Represents a PaginationResponse. */
    class PaginationResponse implements IPaginationResponse {

        /**
         * Constructs a new PaginationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IPaginationResponse);

        /** PaginationResponse total. */
        public total: number;

        /** PaginationResponse page. */
        public page: number;

        /** PaginationResponse pageSize. */
        public pageSize: number;

        /** PaginationResponse totalPage. */
        public totalPage: number;

        /**
         * Creates a new PaginationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaginationResponse instance
         */
        public static create(properties?: Common.IPaginationResponse): Common.PaginationResponse;

        /**
         * Encodes the specified PaginationResponse message. Does not implicitly {@link Common.PaginationResponse.verify|verify} messages.
         * @param message PaginationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IPaginationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaginationResponse message, length delimited. Does not implicitly {@link Common.PaginationResponse.verify|verify} messages.
         * @param message PaginationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IPaginationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaginationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaginationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.PaginationResponse;

        /**
         * Decodes a PaginationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaginationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.PaginationResponse;

        /**
         * Verifies a PaginationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaginationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaginationResponse
         */
        public static fromObject(object: { [k: string]: any }): Common.PaginationResponse;

        /**
         * Creates a plain object from a PaginationResponse message. Also converts values to other types if specified.
         * @param message PaginationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Common.PaginationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaginationResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PaginationResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a UserInfo. */
export interface IUserInfo {

    /** UserInfo id */
    id?: (string|null);

    /** UserInfo email */
    email?: (string|null);

    /** UserInfo nickname */
    nickname?: (string|null);

    /** UserInfo avatarUrl */
    avatarUrl?: (string|null);

    /** UserInfo state */
    state?: (number|null);

    /** UserInfo updateTime */
    updateTime?: (number|Long|null);
}

/** Represents a UserInfo. */
export class UserInfo implements IUserInfo {

    /**
     * Constructs a new UserInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserInfo);

    /** UserInfo id. */
    public id: string;

    /** UserInfo email. */
    public email: string;

    /** UserInfo nickname. */
    public nickname?: (string|null);

    /** UserInfo avatarUrl. */
    public avatarUrl?: (string|null);

    /** UserInfo state. */
    public state: number;

    /** UserInfo updateTime. */
    public updateTime: (number|Long);

    /**
     * Creates a new UserInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserInfo instance
     */
    public static create(properties?: IUserInfo): UserInfo;

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @param message UserInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @param message UserInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserInfo;

    /**
     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserInfo;

    /**
     * Verifies a UserInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserInfo
     */
    public static fromObject(object: { [k: string]: any }): UserInfo;

    /**
     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
     * @param message UserInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UserInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetUserList. */
export interface IGetUserList {

    /** GetUserList pagination */
    pagination?: (Common.IPaginationRequest|null);

    /** GetUserList word */
    word?: (string|null);
}

/** Represents a GetUserList. */
export class GetUserList implements IGetUserList {

    /**
     * Constructs a new GetUserList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetUserList);

    /** GetUserList pagination. */
    public pagination?: (Common.IPaginationRequest|null);

    /** GetUserList word. */
    public word: string;

    /**
     * Creates a new GetUserList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUserList instance
     */
    public static create(properties?: IGetUserList): GetUserList;

    /**
     * Encodes the specified GetUserList message. Does not implicitly {@link GetUserList.verify|verify} messages.
     * @param message GetUserList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetUserList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetUserList message, length delimited. Does not implicitly {@link GetUserList.verify|verify} messages.
     * @param message GetUserList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetUserList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetUserList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetUserList;

    /**
     * Decodes a GetUserList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetUserList;

    /**
     * Verifies a GetUserList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetUserList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUserList
     */
    public static fromObject(object: { [k: string]: any }): GetUserList;

    /**
     * Creates a plain object from a GetUserList message. Also converts values to other types if specified.
     * @param message GetUserList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetUserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetUserList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetUserList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetUserListResponse. */
export interface IGetUserListResponse {

    /** GetUserListResponse pagination */
    pagination?: (Common.IPaginationResponse|null);

    /** GetUserListResponse list */
    list?: (IUserInfo[]|null);
}

/** Represents a GetUserListResponse. */
export class GetUserListResponse implements IGetUserListResponse {

    /**
     * Constructs a new GetUserListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetUserListResponse);

    /** GetUserListResponse pagination. */
    public pagination?: (Common.IPaginationResponse|null);

    /** GetUserListResponse list. */
    public list: IUserInfo[];

    /**
     * Creates a new GetUserListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUserListResponse instance
     */
    public static create(properties?: IGetUserListResponse): GetUserListResponse;

    /**
     * Encodes the specified GetUserListResponse message. Does not implicitly {@link GetUserListResponse.verify|verify} messages.
     * @param message GetUserListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetUserListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetUserListResponse message, length delimited. Does not implicitly {@link GetUserListResponse.verify|verify} messages.
     * @param message GetUserListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetUserListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetUserListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUserListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetUserListResponse;

    /**
     * Decodes a GetUserListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUserListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetUserListResponse;

    /**
     * Verifies a GetUserListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetUserListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUserListResponse
     */
    public static fromObject(object: { [k: string]: any }): GetUserListResponse;

    /**
     * Creates a plain object from a GetUserListResponse message. Also converts values to other types if specified.
     * @param message GetUserListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetUserListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetUserListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetUserListResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Command. */
export interface ICommand {

    /** Command event */
    event?: (string|null);

    /** Command userId */
    userId?: (string|null);

    /** Command client */
    client?: (string|null);

    /** Command requestId */
    requestId?: (string|null);

    /** Command payload */
    payload?: (Uint8Array[]|null);
}

/** Represents a Command. */
export class Command implements ICommand {

    /**
     * Constructs a new Command.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommand);

    /** Command event. */
    public event: string;

    /** Command userId. */
    public userId: string;

    /** Command client. */
    public client: string;

    /** Command requestId. */
    public requestId: string;

    /** Command payload. */
    public payload: Uint8Array[];

    /**
     * Creates a new Command instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Command instance
     */
    public static create(properties?: ICommand): Command;

    /**
     * Encodes the specified Command message. Does not implicitly {@link Command.verify|verify} messages.
     * @param message Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Command message, length delimited. Does not implicitly {@link Command.verify|verify} messages.
     * @param message Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Command message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Command;

    /**
     * Decodes a Command message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Command;

    /**
     * Verifies a Command message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Command message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Command
     */
    public static fromObject(object: { [k: string]: any }): Command;

    /**
     * Creates a plain object from a Command message. Also converts values to other types if specified.
     * @param message Command
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Command to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Command
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an ErrorResult. */
export interface IErrorResult {

    /** ErrorResult errorCode */
    errorCode?: (number|null);

    /** ErrorResult errorMessage */
    errorMessage?: (string|null);

    /** ErrorResult timestamp */
    timestamp?: (string|null);
}

/** Represents an ErrorResult. */
export class ErrorResult implements IErrorResult {

    /**
     * Constructs a new ErrorResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: IErrorResult);

    /** ErrorResult errorCode. */
    public errorCode: number;

    /** ErrorResult errorMessage. */
    public errorMessage: string;

    /** ErrorResult timestamp. */
    public timestamp: string;

    /**
     * Creates a new ErrorResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ErrorResult instance
     */
    public static create(properties?: IErrorResult): ErrorResult;

    /**
     * Encodes the specified ErrorResult message. Does not implicitly {@link ErrorResult.verify|verify} messages.
     * @param message ErrorResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IErrorResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ErrorResult message, length delimited. Does not implicitly {@link ErrorResult.verify|verify} messages.
     * @param message ErrorResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IErrorResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ErrorResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ErrorResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ErrorResult;

    /**
     * Decodes an ErrorResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ErrorResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ErrorResult;

    /**
     * Verifies an ErrorResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ErrorResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ErrorResult
     */
    public static fromObject(object: { [k: string]: any }): ErrorResult;

    /**
     * Creates a plain object from an ErrorResult message. Also converts values to other types if specified.
     * @param message ErrorResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ErrorResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ErrorResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ErrorResult
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
