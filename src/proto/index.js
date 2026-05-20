/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.CreateConversationRequest = (function() {

    /**
     * Properties of a CreateConversationRequest.
     * @exports ICreateConversationRequest
     * @interface ICreateConversationRequest
     * @property {string|null} [targetId] CreateConversationRequest targetId
     */

    /**
     * Constructs a new CreateConversationRequest.
     * @exports CreateConversationRequest
     * @classdesc Represents a CreateConversationRequest.
     * @implements ICreateConversationRequest
     * @constructor
     * @param {ICreateConversationRequest=} [properties] Properties to set
     */
    function CreateConversationRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateConversationRequest targetId.
     * @member {string} targetId
     * @memberof CreateConversationRequest
     * @instance
     */
    CreateConversationRequest.prototype.targetId = "";

    /**
     * Creates a new CreateConversationRequest instance using the specified properties.
     * @function create
     * @memberof CreateConversationRequest
     * @static
     * @param {ICreateConversationRequest=} [properties] Properties to set
     * @returns {CreateConversationRequest} CreateConversationRequest instance
     */
    CreateConversationRequest.create = function create(properties) {
        return new CreateConversationRequest(properties);
    };

    /**
     * Encodes the specified CreateConversationRequest message. Does not implicitly {@link CreateConversationRequest.verify|verify} messages.
     * @function encode
     * @memberof CreateConversationRequest
     * @static
     * @param {ICreateConversationRequest} message CreateConversationRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateConversationRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetId);
        return writer;
    };

    /**
     * Encodes the specified CreateConversationRequest message, length delimited. Does not implicitly {@link CreateConversationRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateConversationRequest
     * @static
     * @param {ICreateConversationRequest} message CreateConversationRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateConversationRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateConversationRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CreateConversationRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateConversationRequest} CreateConversationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateConversationRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateConversationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.targetId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateConversationRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateConversationRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateConversationRequest} CreateConversationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateConversationRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateConversationRequest message.
     * @function verify
     * @memberof CreateConversationRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateConversationRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.targetId != null && message.hasOwnProperty("targetId"))
            if (!$util.isString(message.targetId))
                return "targetId: string expected";
        return null;
    };

    /**
     * Creates a CreateConversationRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateConversationRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateConversationRequest} CreateConversationRequest
     */
    CreateConversationRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateConversationRequest)
            return object;
        var message = new $root.CreateConversationRequest();
        if (object.targetId != null)
            message.targetId = String(object.targetId);
        return message;
    };

    /**
     * Creates a plain object from a CreateConversationRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateConversationRequest
     * @static
     * @param {CreateConversationRequest} message CreateConversationRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateConversationRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.targetId = "";
        if (message.targetId != null && message.hasOwnProperty("targetId"))
            object.targetId = message.targetId;
        return object;
    };

    /**
     * Converts this CreateConversationRequest to JSON.
     * @function toJSON
     * @memberof CreateConversationRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateConversationRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CreateConversationRequest
     * @function getTypeUrl
     * @memberof CreateConversationRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CreateConversationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CreateConversationRequest";
    };

    return CreateConversationRequest;
})();

$root.GroupInfo = (function() {

    /**
     * Properties of a GroupInfo.
     * @exports IGroupInfo
     * @interface IGroupInfo
     * @property {string|null} [id] GroupInfo id
     * @property {string|null} [name] GroupInfo name
     * @property {string|null} [avatarUrl] GroupInfo avatarUrl
     * @property {string|null} [notice] GroupInfo notice
     * @property {string|null} [ownerId] GroupInfo ownerId
     * @property {number|null} [state] GroupInfo state
     * @property {number|Long|null} [updateTime] GroupInfo updateTime
     * @property {number|Long|null} [createTime] GroupInfo createTime
     */

    /**
     * Constructs a new GroupInfo.
     * @exports GroupInfo
     * @classdesc Represents a GroupInfo.
     * @implements IGroupInfo
     * @constructor
     * @param {IGroupInfo=} [properties] Properties to set
     */
    function GroupInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GroupInfo id.
     * @member {string} id
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.id = "";

    /**
     * GroupInfo name.
     * @member {string} name
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.name = "";

    /**
     * GroupInfo avatarUrl.
     * @member {string|null|undefined} avatarUrl
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.avatarUrl = null;

    /**
     * GroupInfo notice.
     * @member {string|null|undefined} notice
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.notice = null;

    /**
     * GroupInfo ownerId.
     * @member {string} ownerId
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.ownerId = "";

    /**
     * GroupInfo state.
     * @member {number} state
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.state = 0;

    /**
     * GroupInfo updateTime.
     * @member {number|Long} updateTime
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GroupInfo createTime.
     * @member {number|Long} createTime
     * @memberof GroupInfo
     * @instance
     */
    GroupInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(GroupInfo.prototype, "_avatarUrl", {
        get: $util.oneOfGetter($oneOfFields = ["avatarUrl"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(GroupInfo.prototype, "_notice", {
        get: $util.oneOfGetter($oneOfFields = ["notice"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GroupInfo instance using the specified properties.
     * @function create
     * @memberof GroupInfo
     * @static
     * @param {IGroupInfo=} [properties] Properties to set
     * @returns {GroupInfo} GroupInfo instance
     */
    GroupInfo.create = function create(properties) {
        return new GroupInfo(properties);
    };

    /**
     * Encodes the specified GroupInfo message. Does not implicitly {@link GroupInfo.verify|verify} messages.
     * @function encode
     * @memberof GroupInfo
     * @static
     * @param {IGroupInfo} message GroupInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatarUrl);
        if (message.notice != null && Object.hasOwnProperty.call(message, "notice"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.notice);
        if (message.ownerId != null && Object.hasOwnProperty.call(message, "ownerId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.ownerId);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.state);
        if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.updateTime);
        if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.createTime);
        return writer;
    };

    /**
     * Encodes the specified GroupInfo message, length delimited. Does not implicitly {@link GroupInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GroupInfo
     * @static
     * @param {IGroupInfo} message GroupInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GroupInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GroupInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GroupInfo} GroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GroupInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.avatarUrl = reader.string();
                    break;
                }
            case 4: {
                    message.notice = reader.string();
                    break;
                }
            case 5: {
                    message.ownerId = reader.string();
                    break;
                }
            case 6: {
                    message.state = reader.int32();
                    break;
                }
            case 7: {
                    message.updateTime = reader.int64();
                    break;
                }
            case 8: {
                    message.createTime = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GroupInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GroupInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GroupInfo} GroupInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GroupInfo message.
     * @function verify
     * @memberof GroupInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GroupInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl")) {
            properties._avatarUrl = 1;
            if (!$util.isString(message.avatarUrl))
                return "avatarUrl: string expected";
        }
        if (message.notice != null && message.hasOwnProperty("notice")) {
            properties._notice = 1;
            if (!$util.isString(message.notice))
                return "notice: string expected";
        }
        if (message.ownerId != null && message.hasOwnProperty("ownerId"))
            if (!$util.isString(message.ownerId))
                return "ownerId: string expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        if (message.updateTime != null && message.hasOwnProperty("updateTime"))
            if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                return "updateTime: integer|Long expected";
        if (message.createTime != null && message.hasOwnProperty("createTime"))
            if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                return "createTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a GroupInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GroupInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GroupInfo} GroupInfo
     */
    GroupInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.GroupInfo)
            return object;
        var message = new $root.GroupInfo();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.avatarUrl != null)
            message.avatarUrl = String(object.avatarUrl);
        if (object.notice != null)
            message.notice = String(object.notice);
        if (object.ownerId != null)
            message.ownerId = String(object.ownerId);
        if (object.state != null)
            message.state = object.state | 0;
        if (object.updateTime != null)
            if ($util.Long)
                (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
            else if (typeof object.updateTime === "string")
                message.updateTime = parseInt(object.updateTime, 10);
            else if (typeof object.updateTime === "number")
                message.updateTime = object.updateTime;
            else if (typeof object.updateTime === "object")
                message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
        if (object.createTime != null)
            if ($util.Long)
                (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
            else if (typeof object.createTime === "string")
                message.createTime = parseInt(object.createTime, 10);
            else if (typeof object.createTime === "number")
                message.createTime = object.createTime;
            else if (typeof object.createTime === "object")
                message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a GroupInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GroupInfo
     * @static
     * @param {GroupInfo} message GroupInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GroupInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.ownerId = "";
            object.state = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateTime = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createTime = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl")) {
            object.avatarUrl = message.avatarUrl;
            if (options.oneofs)
                object._avatarUrl = "avatarUrl";
        }
        if (message.notice != null && message.hasOwnProperty("notice")) {
            object.notice = message.notice;
            if (options.oneofs)
                object._notice = "notice";
        }
        if (message.ownerId != null && message.hasOwnProperty("ownerId"))
            object.ownerId = message.ownerId;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        if (message.updateTime != null && message.hasOwnProperty("updateTime"))
            if (typeof message.updateTime === "number")
                object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
            else
                object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
        if (message.createTime != null && message.hasOwnProperty("createTime"))
            if (typeof message.createTime === "number")
                object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
            else
                object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
        return object;
    };

    /**
     * Converts this GroupInfo to JSON.
     * @function toJSON
     * @memberof GroupInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GroupInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GroupInfo
     * @function getTypeUrl
     * @memberof GroupInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GroupInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GroupInfo";
    };

    return GroupInfo;
})();

$root.TargetInfo = (function() {

    /**
     * Properties of a TargetInfo.
     * @exports ITargetInfo
     * @interface ITargetInfo
     * @property {string|null} [id] TargetInfo id
     * @property {string|null} [name] TargetInfo name
     * @property {string|null} [avatarUrl] TargetInfo avatarUrl
     */

    /**
     * Constructs a new TargetInfo.
     * @exports TargetInfo
     * @classdesc Represents a TargetInfo.
     * @implements ITargetInfo
     * @constructor
     * @param {ITargetInfo=} [properties] Properties to set
     */
    function TargetInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TargetInfo id.
     * @member {string} id
     * @memberof TargetInfo
     * @instance
     */
    TargetInfo.prototype.id = "";

    /**
     * TargetInfo name.
     * @member {string} name
     * @memberof TargetInfo
     * @instance
     */
    TargetInfo.prototype.name = "";

    /**
     * TargetInfo avatarUrl.
     * @member {string} avatarUrl
     * @memberof TargetInfo
     * @instance
     */
    TargetInfo.prototype.avatarUrl = "";

    /**
     * Creates a new TargetInfo instance using the specified properties.
     * @function create
     * @memberof TargetInfo
     * @static
     * @param {ITargetInfo=} [properties] Properties to set
     * @returns {TargetInfo} TargetInfo instance
     */
    TargetInfo.create = function create(properties) {
        return new TargetInfo(properties);
    };

    /**
     * Encodes the specified TargetInfo message. Does not implicitly {@link TargetInfo.verify|verify} messages.
     * @function encode
     * @memberof TargetInfo
     * @static
     * @param {ITargetInfo} message TargetInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TargetInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatarUrl);
        return writer;
    };

    /**
     * Encodes the specified TargetInfo message, length delimited. Does not implicitly {@link TargetInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TargetInfo
     * @static
     * @param {ITargetInfo} message TargetInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TargetInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TargetInfo message from the specified reader or buffer.
     * @function decode
     * @memberof TargetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TargetInfo} TargetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TargetInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TargetInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.avatarUrl = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TargetInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TargetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TargetInfo} TargetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TargetInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TargetInfo message.
     * @function verify
     * @memberof TargetInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TargetInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
            if (!$util.isString(message.avatarUrl))
                return "avatarUrl: string expected";
        return null;
    };

    /**
     * Creates a TargetInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TargetInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TargetInfo} TargetInfo
     */
    TargetInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.TargetInfo)
            return object;
        var message = new $root.TargetInfo();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.avatarUrl != null)
            message.avatarUrl = String(object.avatarUrl);
        return message;
    };

    /**
     * Creates a plain object from a TargetInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TargetInfo
     * @static
     * @param {TargetInfo} message TargetInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TargetInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.avatarUrl = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
            object.avatarUrl = message.avatarUrl;
        return object;
    };

    /**
     * Converts this TargetInfo to JSON.
     * @function toJSON
     * @memberof TargetInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TargetInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TargetInfo
     * @function getTypeUrl
     * @memberof TargetInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TargetInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TargetInfo";
    };

    return TargetInfo;
})();

$root.FileInfo = (function() {

    /**
     * Properties of a FileInfo.
     * @exports IFileInfo
     * @interface IFileInfo
     * @property {string|null} [id] FileInfo id
     * @property {string|null} [fileName] FileInfo fileName
     * @property {string|null} [url] FileInfo url
     * @property {string|null} [mimeType] FileInfo mimeType
     * @property {string|null} [ext] FileInfo ext
     * @property {number|Long|null} [size] FileInfo size
     */

    /**
     * Constructs a new FileInfo.
     * @exports FileInfo
     * @classdesc Represents a FileInfo.
     * @implements IFileInfo
     * @constructor
     * @param {IFileInfo=} [properties] Properties to set
     */
    function FileInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FileInfo id.
     * @member {string} id
     * @memberof FileInfo
     * @instance
     */
    FileInfo.prototype.id = "";

    /**
     * FileInfo fileName.
     * @member {string} fileName
     * @memberof FileInfo
     * @instance
     */
    FileInfo.prototype.fileName = "";

    /**
     * FileInfo url.
     * @member {string} url
     * @memberof FileInfo
     * @instance
     */
    FileInfo.prototype.url = "";

    /**
     * FileInfo mimeType.
     * @member {string} mimeType
     * @memberof FileInfo
     * @instance
     */
    FileInfo.prototype.mimeType = "";

    /**
     * FileInfo ext.
     * @member {string|null|undefined} ext
     * @memberof FileInfo
     * @instance
     */
    FileInfo.prototype.ext = null;

    /**
     * FileInfo size.
     * @member {number|Long} size
     * @memberof FileInfo
     * @instance
     */
    FileInfo.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(FileInfo.prototype, "_ext", {
        get: $util.oneOfGetter($oneOfFields = ["ext"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new FileInfo instance using the specified properties.
     * @function create
     * @memberof FileInfo
     * @static
     * @param {IFileInfo=} [properties] Properties to set
     * @returns {FileInfo} FileInfo instance
     */
    FileInfo.create = function create(properties) {
        return new FileInfo(properties);
    };

    /**
     * Encodes the specified FileInfo message. Does not implicitly {@link FileInfo.verify|verify} messages.
     * @function encode
     * @memberof FileInfo
     * @static
     * @param {IFileInfo} message FileInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.fileName);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
        if (message.mimeType != null && Object.hasOwnProperty.call(message, "mimeType"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.mimeType);
        if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.ext);
        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.size);
        return writer;
    };

    /**
     * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link FileInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FileInfo
     * @static
     * @param {IFileInfo} message FileInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FileInfo message from the specified reader or buffer.
     * @function decode
     * @memberof FileInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FileInfo} FileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.fileName = reader.string();
                    break;
                }
            case 3: {
                    message.url = reader.string();
                    break;
                }
            case 4: {
                    message.mimeType = reader.string();
                    break;
                }
            case 5: {
                    message.ext = reader.string();
                    break;
                }
            case 6: {
                    message.size = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FileInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FileInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FileInfo} FileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FileInfo message.
     * @function verify
     * @memberof FileInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FileInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.fileName != null && message.hasOwnProperty("fileName"))
            if (!$util.isString(message.fileName))
                return "fileName: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        if (message.mimeType != null && message.hasOwnProperty("mimeType"))
            if (!$util.isString(message.mimeType))
                return "mimeType: string expected";
        if (message.ext != null && message.hasOwnProperty("ext")) {
            properties._ext = 1;
            if (!$util.isString(message.ext))
                return "ext: string expected";
        }
        if (message.size != null && message.hasOwnProperty("size"))
            if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                return "size: integer|Long expected";
        return null;
    };

    /**
     * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FileInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FileInfo} FileInfo
     */
    FileInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.FileInfo)
            return object;
        var message = new $root.FileInfo();
        if (object.id != null)
            message.id = String(object.id);
        if (object.fileName != null)
            message.fileName = String(object.fileName);
        if (object.url != null)
            message.url = String(object.url);
        if (object.mimeType != null)
            message.mimeType = String(object.mimeType);
        if (object.ext != null)
            message.ext = String(object.ext);
        if (object.size != null)
            if ($util.Long)
                (message.size = $util.Long.fromValue(object.size)).unsigned = false;
            else if (typeof object.size === "string")
                message.size = parseInt(object.size, 10);
            else if (typeof object.size === "number")
                message.size = object.size;
            else if (typeof object.size === "object")
                message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FileInfo
     * @static
     * @param {FileInfo} message FileInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FileInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.fileName = "";
            object.url = "";
            object.mimeType = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.size = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.fileName != null && message.hasOwnProperty("fileName"))
            object.fileName = message.fileName;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        if (message.mimeType != null && message.hasOwnProperty("mimeType"))
            object.mimeType = message.mimeType;
        if (message.ext != null && message.hasOwnProperty("ext")) {
            object.ext = message.ext;
            if (options.oneofs)
                object._ext = "ext";
        }
        if (message.size != null && message.hasOwnProperty("size"))
            if (typeof message.size === "number")
                object.size = options.longs === String ? String(message.size) : message.size;
            else
                object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber() : message.size;
        return object;
    };

    /**
     * Converts this FileInfo to JSON.
     * @function toJSON
     * @memberof FileInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FileInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FileInfo
     * @function getTypeUrl
     * @memberof FileInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FileInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FileInfo";
    };

    return FileInfo;
})();

$root.MediaInfo = (function() {

    /**
     * Properties of a MediaInfo.
     * @exports IMediaInfo
     * @interface IMediaInfo
     * @property {string|null} [id] MediaInfo id
     * @property {number|null} [type] MediaInfo type
     * @property {string|null} [fileId] MediaInfo fileId
     * @property {IFileInfo|null} [file] MediaInfo file
     * @property {string|null} [fileUrl] MediaInfo fileUrl
     * @property {string|null} [thumbUrl] MediaInfo thumbUrl
     * @property {number|null} [width] MediaInfo width
     * @property {number|null} [height] MediaInfo height
     * @property {number|null} [durationSec] MediaInfo durationSec
     * @property {string|null} [waveform] MediaInfo waveform
     */

    /**
     * Constructs a new MediaInfo.
     * @exports MediaInfo
     * @classdesc Represents a MediaInfo.
     * @implements IMediaInfo
     * @constructor
     * @param {IMediaInfo=} [properties] Properties to set
     */
    function MediaInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MediaInfo id.
     * @member {string} id
     * @memberof MediaInfo
     * @instance
     */
    MediaInfo.prototype.id = "";

    /**
     * MediaInfo type.
     * @member {number} type
     * @memberof MediaInfo
     * @instance
     */
    MediaInfo.prototype.type = 0;

    /**
     * MediaInfo fileId.
     * @member {string} fileId
     * @memberof MediaInfo
     * @instance
     */
    MediaInfo.prototype.fileId = "";

    /**
     * MediaInfo file.
     * @member {IFileInfo|null|undefined} file
     * @memberof MediaInfo
     * @instance
     */
    MediaInfo.prototype.file = null;

    /**
     * MediaInfo fileUrl.
     * @member {string|null|undefined} fileUrl
     * @memberof MediaInfo
     * @instance
     */
    MediaInfo.prototype.fileUrl = null;

    /**
     * MediaInfo thumbUrl.
     * @member {string|null|undefined} thumbUrl
     * @memberof MediaInfo
     * @instance
     */
    MediaInfo.prototype.thumbUrl = null;

    /**
     * MediaInfo width.
     * @member {number|null|undefined} width
     * @memberof MediaInfo
     * @instance
     */
    MediaInfo.prototype.width = null;

    /**
     * MediaInfo height.
     * @member {number|null|undefined} height
     * @memberof MediaInfo
     * @instance
     */
    MediaInfo.prototype.height = null;

    /**
     * MediaInfo durationSec.
     * @member {number|null|undefined} durationSec
     * @memberof MediaInfo
     * @instance
     */
    MediaInfo.prototype.durationSec = null;

    /**
     * MediaInfo waveform.
     * @member {string|null|undefined} waveform
     * @memberof MediaInfo
     * @instance
     */
    MediaInfo.prototype.waveform = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(MediaInfo.prototype, "_fileUrl", {
        get: $util.oneOfGetter($oneOfFields = ["fileUrl"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(MediaInfo.prototype, "_thumbUrl", {
        get: $util.oneOfGetter($oneOfFields = ["thumbUrl"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(MediaInfo.prototype, "_width", {
        get: $util.oneOfGetter($oneOfFields = ["width"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(MediaInfo.prototype, "_height", {
        get: $util.oneOfGetter($oneOfFields = ["height"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(MediaInfo.prototype, "_durationSec", {
        get: $util.oneOfGetter($oneOfFields = ["durationSec"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(MediaInfo.prototype, "_waveform", {
        get: $util.oneOfGetter($oneOfFields = ["waveform"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new MediaInfo instance using the specified properties.
     * @function create
     * @memberof MediaInfo
     * @static
     * @param {IMediaInfo=} [properties] Properties to set
     * @returns {MediaInfo} MediaInfo instance
     */
    MediaInfo.create = function create(properties) {
        return new MediaInfo(properties);
    };

    /**
     * Encodes the specified MediaInfo message. Does not implicitly {@link MediaInfo.verify|verify} messages.
     * @function encode
     * @memberof MediaInfo
     * @static
     * @param {IMediaInfo} message MediaInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MediaInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.fileId != null && Object.hasOwnProperty.call(message, "fileId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.fileId);
        if (message.file != null && Object.hasOwnProperty.call(message, "file"))
            $root.FileInfo.encode(message.file, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.fileUrl != null && Object.hasOwnProperty.call(message, "fileUrl"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.fileUrl);
        if (message.thumbUrl != null && Object.hasOwnProperty.call(message, "thumbUrl"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.thumbUrl);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.height);
        if (message.durationSec != null && Object.hasOwnProperty.call(message, "durationSec"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.durationSec);
        if (message.waveform != null && Object.hasOwnProperty.call(message, "waveform"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.waveform);
        return writer;
    };

    /**
     * Encodes the specified MediaInfo message, length delimited. Does not implicitly {@link MediaInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MediaInfo
     * @static
     * @param {IMediaInfo} message MediaInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MediaInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MediaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MediaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MediaInfo} MediaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MediaInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MediaInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.type = reader.int32();
                    break;
                }
            case 3: {
                    message.fileId = reader.string();
                    break;
                }
            case 4: {
                    message.file = $root.FileInfo.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.fileUrl = reader.string();
                    break;
                }
            case 6: {
                    message.thumbUrl = reader.string();
                    break;
                }
            case 7: {
                    message.width = reader.int32();
                    break;
                }
            case 8: {
                    message.height = reader.int32();
                    break;
                }
            case 9: {
                    message.durationSec = reader.int32();
                    break;
                }
            case 10: {
                    message.waveform = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MediaInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MediaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MediaInfo} MediaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MediaInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MediaInfo message.
     * @function verify
     * @memberof MediaInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MediaInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.fileId != null && message.hasOwnProperty("fileId"))
            if (!$util.isString(message.fileId))
                return "fileId: string expected";
        if (message.file != null && message.hasOwnProperty("file")) {
            var error = $root.FileInfo.verify(message.file);
            if (error)
                return "file." + error;
        }
        if (message.fileUrl != null && message.hasOwnProperty("fileUrl")) {
            properties._fileUrl = 1;
            if (!$util.isString(message.fileUrl))
                return "fileUrl: string expected";
        }
        if (message.thumbUrl != null && message.hasOwnProperty("thumbUrl")) {
            properties._thumbUrl = 1;
            if (!$util.isString(message.thumbUrl))
                return "thumbUrl: string expected";
        }
        if (message.width != null && message.hasOwnProperty("width")) {
            properties._width = 1;
            if (!$util.isInteger(message.width))
                return "width: integer expected";
        }
        if (message.height != null && message.hasOwnProperty("height")) {
            properties._height = 1;
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        }
        if (message.durationSec != null && message.hasOwnProperty("durationSec")) {
            properties._durationSec = 1;
            if (!$util.isInteger(message.durationSec))
                return "durationSec: integer expected";
        }
        if (message.waveform != null && message.hasOwnProperty("waveform")) {
            properties._waveform = 1;
            if (!$util.isString(message.waveform))
                return "waveform: string expected";
        }
        return null;
    };

    /**
     * Creates a MediaInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MediaInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MediaInfo} MediaInfo
     */
    MediaInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.MediaInfo)
            return object;
        var message = new $root.MediaInfo();
        if (object.id != null)
            message.id = String(object.id);
        if (object.type != null)
            message.type = object.type | 0;
        if (object.fileId != null)
            message.fileId = String(object.fileId);
        if (object.file != null) {
            if (typeof object.file !== "object")
                throw TypeError(".MediaInfo.file: object expected");
            message.file = $root.FileInfo.fromObject(object.file);
        }
        if (object.fileUrl != null)
            message.fileUrl = String(object.fileUrl);
        if (object.thumbUrl != null)
            message.thumbUrl = String(object.thumbUrl);
        if (object.width != null)
            message.width = object.width | 0;
        if (object.height != null)
            message.height = object.height | 0;
        if (object.durationSec != null)
            message.durationSec = object.durationSec | 0;
        if (object.waveform != null)
            message.waveform = String(object.waveform);
        return message;
    };

    /**
     * Creates a plain object from a MediaInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MediaInfo
     * @static
     * @param {MediaInfo} message MediaInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MediaInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.type = 0;
            object.fileId = "";
            object.file = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.fileId != null && message.hasOwnProperty("fileId"))
            object.fileId = message.fileId;
        if (message.file != null && message.hasOwnProperty("file"))
            object.file = $root.FileInfo.toObject(message.file, options);
        if (message.fileUrl != null && message.hasOwnProperty("fileUrl")) {
            object.fileUrl = message.fileUrl;
            if (options.oneofs)
                object._fileUrl = "fileUrl";
        }
        if (message.thumbUrl != null && message.hasOwnProperty("thumbUrl")) {
            object.thumbUrl = message.thumbUrl;
            if (options.oneofs)
                object._thumbUrl = "thumbUrl";
        }
        if (message.width != null && message.hasOwnProperty("width")) {
            object.width = message.width;
            if (options.oneofs)
                object._width = "width";
        }
        if (message.height != null && message.hasOwnProperty("height")) {
            object.height = message.height;
            if (options.oneofs)
                object._height = "height";
        }
        if (message.durationSec != null && message.hasOwnProperty("durationSec")) {
            object.durationSec = message.durationSec;
            if (options.oneofs)
                object._durationSec = "durationSec";
        }
        if (message.waveform != null && message.hasOwnProperty("waveform")) {
            object.waveform = message.waveform;
            if (options.oneofs)
                object._waveform = "waveform";
        }
        return object;
    };

    /**
     * Converts this MediaInfo to JSON.
     * @function toJSON
     * @memberof MediaInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MediaInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MediaInfo
     * @function getTypeUrl
     * @memberof MediaInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MediaInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MediaInfo";
    };

    return MediaInfo;
})();

$root.ConversationInfo = (function() {

    /**
     * Properties of a ConversationInfo.
     * @exports IConversationInfo
     * @interface IConversationInfo
     * @property {string|null} [id] ConversationInfo id
     * @property {number|null} [type] ConversationInfo type
     * @property {ITargetInfo|null} [targetInfo] ConversationInfo targetInfo
     * @property {string|null} [lastMsgContent] ConversationInfo lastMsgContent
     * @property {number|Long|null} [lastMsgTime] ConversationInfo lastMsgTime
     * @property {number|Long|null} [updateTime] ConversationInfo updateTime
     * @property {number|Long|null} [createTime] ConversationInfo createTime
     * @property {number|null} [unreadCount] ConversationInfo unreadCount
     * @property {number|null} [lastReadMessageId] ConversationInfo lastReadMessageId
     */

    /**
     * Constructs a new ConversationInfo.
     * @exports ConversationInfo
     * @classdesc Represents a ConversationInfo.
     * @implements IConversationInfo
     * @constructor
     * @param {IConversationInfo=} [properties] Properties to set
     */
    function ConversationInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConversationInfo id.
     * @member {string} id
     * @memberof ConversationInfo
     * @instance
     */
    ConversationInfo.prototype.id = "";

    /**
     * ConversationInfo type.
     * @member {number} type
     * @memberof ConversationInfo
     * @instance
     */
    ConversationInfo.prototype.type = 0;

    /**
     * ConversationInfo targetInfo.
     * @member {ITargetInfo|null|undefined} targetInfo
     * @memberof ConversationInfo
     * @instance
     */
    ConversationInfo.prototype.targetInfo = null;

    /**
     * ConversationInfo lastMsgContent.
     * @member {string|null|undefined} lastMsgContent
     * @memberof ConversationInfo
     * @instance
     */
    ConversationInfo.prototype.lastMsgContent = null;

    /**
     * ConversationInfo lastMsgTime.
     * @member {number|Long|null|undefined} lastMsgTime
     * @memberof ConversationInfo
     * @instance
     */
    ConversationInfo.prototype.lastMsgTime = null;

    /**
     * ConversationInfo updateTime.
     * @member {number|Long} updateTime
     * @memberof ConversationInfo
     * @instance
     */
    ConversationInfo.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ConversationInfo createTime.
     * @member {number|Long} createTime
     * @memberof ConversationInfo
     * @instance
     */
    ConversationInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ConversationInfo unreadCount.
     * @member {number|null|undefined} unreadCount
     * @memberof ConversationInfo
     * @instance
     */
    ConversationInfo.prototype.unreadCount = null;

    /**
     * ConversationInfo lastReadMessageId.
     * @member {number|null|undefined} lastReadMessageId
     * @memberof ConversationInfo
     * @instance
     */
    ConversationInfo.prototype.lastReadMessageId = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(ConversationInfo.prototype, "_targetInfo", {
        get: $util.oneOfGetter($oneOfFields = ["targetInfo"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(ConversationInfo.prototype, "_lastMsgContent", {
        get: $util.oneOfGetter($oneOfFields = ["lastMsgContent"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(ConversationInfo.prototype, "_lastMsgTime", {
        get: $util.oneOfGetter($oneOfFields = ["lastMsgTime"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(ConversationInfo.prototype, "_unreadCount", {
        get: $util.oneOfGetter($oneOfFields = ["unreadCount"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(ConversationInfo.prototype, "_lastReadMessageId", {
        get: $util.oneOfGetter($oneOfFields = ["lastReadMessageId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ConversationInfo instance using the specified properties.
     * @function create
     * @memberof ConversationInfo
     * @static
     * @param {IConversationInfo=} [properties] Properties to set
     * @returns {ConversationInfo} ConversationInfo instance
     */
    ConversationInfo.create = function create(properties) {
        return new ConversationInfo(properties);
    };

    /**
     * Encodes the specified ConversationInfo message. Does not implicitly {@link ConversationInfo.verify|verify} messages.
     * @function encode
     * @memberof ConversationInfo
     * @static
     * @param {IConversationInfo} message ConversationInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConversationInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.targetInfo != null && Object.hasOwnProperty.call(message, "targetInfo"))
            $root.TargetInfo.encode(message.targetInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.lastMsgContent != null && Object.hasOwnProperty.call(message, "lastMsgContent"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.lastMsgContent);
        if (message.lastMsgTime != null && Object.hasOwnProperty.call(message, "lastMsgTime"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.lastMsgTime);
        if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.updateTime);
        if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.createTime);
        if (message.unreadCount != null && Object.hasOwnProperty.call(message, "unreadCount"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.unreadCount);
        if (message.lastReadMessageId != null && Object.hasOwnProperty.call(message, "lastReadMessageId"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.lastReadMessageId);
        return writer;
    };

    /**
     * Encodes the specified ConversationInfo message, length delimited. Does not implicitly {@link ConversationInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConversationInfo
     * @static
     * @param {IConversationInfo} message ConversationInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConversationInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConversationInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ConversationInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConversationInfo} ConversationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConversationInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConversationInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.type = reader.int32();
                    break;
                }
            case 3: {
                    message.targetInfo = $root.TargetInfo.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.lastMsgContent = reader.string();
                    break;
                }
            case 5: {
                    message.lastMsgTime = reader.int64();
                    break;
                }
            case 6: {
                    message.updateTime = reader.int64();
                    break;
                }
            case 7: {
                    message.createTime = reader.int64();
                    break;
                }
            case 8: {
                    message.unreadCount = reader.int32();
                    break;
                }
            case 9: {
                    message.lastReadMessageId = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConversationInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConversationInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConversationInfo} ConversationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConversationInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConversationInfo message.
     * @function verify
     * @memberof ConversationInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConversationInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.targetInfo != null && message.hasOwnProperty("targetInfo")) {
            properties._targetInfo = 1;
            {
                var error = $root.TargetInfo.verify(message.targetInfo);
                if (error)
                    return "targetInfo." + error;
            }
        }
        if (message.lastMsgContent != null && message.hasOwnProperty("lastMsgContent")) {
            properties._lastMsgContent = 1;
            if (!$util.isString(message.lastMsgContent))
                return "lastMsgContent: string expected";
        }
        if (message.lastMsgTime != null && message.hasOwnProperty("lastMsgTime")) {
            properties._lastMsgTime = 1;
            if (!$util.isInteger(message.lastMsgTime) && !(message.lastMsgTime && $util.isInteger(message.lastMsgTime.low) && $util.isInteger(message.lastMsgTime.high)))
                return "lastMsgTime: integer|Long expected";
        }
        if (message.updateTime != null && message.hasOwnProperty("updateTime"))
            if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                return "updateTime: integer|Long expected";
        if (message.createTime != null && message.hasOwnProperty("createTime"))
            if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                return "createTime: integer|Long expected";
        if (message.unreadCount != null && message.hasOwnProperty("unreadCount")) {
            properties._unreadCount = 1;
            if (!$util.isInteger(message.unreadCount))
                return "unreadCount: integer expected";
        }
        if (message.lastReadMessageId != null && message.hasOwnProperty("lastReadMessageId")) {
            properties._lastReadMessageId = 1;
            if (!$util.isInteger(message.lastReadMessageId))
                return "lastReadMessageId: integer expected";
        }
        return null;
    };

    /**
     * Creates a ConversationInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConversationInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConversationInfo} ConversationInfo
     */
    ConversationInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ConversationInfo)
            return object;
        var message = new $root.ConversationInfo();
        if (object.id != null)
            message.id = String(object.id);
        if (object.type != null)
            message.type = object.type | 0;
        if (object.targetInfo != null) {
            if (typeof object.targetInfo !== "object")
                throw TypeError(".ConversationInfo.targetInfo: object expected");
            message.targetInfo = $root.TargetInfo.fromObject(object.targetInfo);
        }
        if (object.lastMsgContent != null)
            message.lastMsgContent = String(object.lastMsgContent);
        if (object.lastMsgTime != null)
            if ($util.Long)
                (message.lastMsgTime = $util.Long.fromValue(object.lastMsgTime)).unsigned = false;
            else if (typeof object.lastMsgTime === "string")
                message.lastMsgTime = parseInt(object.lastMsgTime, 10);
            else if (typeof object.lastMsgTime === "number")
                message.lastMsgTime = object.lastMsgTime;
            else if (typeof object.lastMsgTime === "object")
                message.lastMsgTime = new $util.LongBits(object.lastMsgTime.low >>> 0, object.lastMsgTime.high >>> 0).toNumber();
        if (object.updateTime != null)
            if ($util.Long)
                (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
            else if (typeof object.updateTime === "string")
                message.updateTime = parseInt(object.updateTime, 10);
            else if (typeof object.updateTime === "number")
                message.updateTime = object.updateTime;
            else if (typeof object.updateTime === "object")
                message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
        if (object.createTime != null)
            if ($util.Long)
                (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
            else if (typeof object.createTime === "string")
                message.createTime = parseInt(object.createTime, 10);
            else if (typeof object.createTime === "number")
                message.createTime = object.createTime;
            else if (typeof object.createTime === "object")
                message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
        if (object.unreadCount != null)
            message.unreadCount = object.unreadCount | 0;
        if (object.lastReadMessageId != null)
            message.lastReadMessageId = object.lastReadMessageId | 0;
        return message;
    };

    /**
     * Creates a plain object from a ConversationInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConversationInfo
     * @static
     * @param {ConversationInfo} message ConversationInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConversationInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.type = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateTime = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createTime = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.targetInfo != null && message.hasOwnProperty("targetInfo")) {
            object.targetInfo = $root.TargetInfo.toObject(message.targetInfo, options);
            if (options.oneofs)
                object._targetInfo = "targetInfo";
        }
        if (message.lastMsgContent != null && message.hasOwnProperty("lastMsgContent")) {
            object.lastMsgContent = message.lastMsgContent;
            if (options.oneofs)
                object._lastMsgContent = "lastMsgContent";
        }
        if (message.lastMsgTime != null && message.hasOwnProperty("lastMsgTime")) {
            if (typeof message.lastMsgTime === "number")
                object.lastMsgTime = options.longs === String ? String(message.lastMsgTime) : message.lastMsgTime;
            else
                object.lastMsgTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastMsgTime) : options.longs === Number ? new $util.LongBits(message.lastMsgTime.low >>> 0, message.lastMsgTime.high >>> 0).toNumber() : message.lastMsgTime;
            if (options.oneofs)
                object._lastMsgTime = "lastMsgTime";
        }
        if (message.updateTime != null && message.hasOwnProperty("updateTime"))
            if (typeof message.updateTime === "number")
                object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
            else
                object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
        if (message.createTime != null && message.hasOwnProperty("createTime"))
            if (typeof message.createTime === "number")
                object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
            else
                object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
        if (message.unreadCount != null && message.hasOwnProperty("unreadCount")) {
            object.unreadCount = message.unreadCount;
            if (options.oneofs)
                object._unreadCount = "unreadCount";
        }
        if (message.lastReadMessageId != null && message.hasOwnProperty("lastReadMessageId")) {
            object.lastReadMessageId = message.lastReadMessageId;
            if (options.oneofs)
                object._lastReadMessageId = "lastReadMessageId";
        }
        return object;
    };

    /**
     * Converts this ConversationInfo to JSON.
     * @function toJSON
     * @memberof ConversationInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConversationInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ConversationInfo
     * @function getTypeUrl
     * @memberof ConversationInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ConversationInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ConversationInfo";
    };

    return ConversationInfo;
})();

$root.SendMessageRequest = (function() {

    /**
     * Properties of a SendMessageRequest.
     * @exports ISendMessageRequest
     * @interface ISendMessageRequest
     * @property {string|null} [conversationId] SendMessageRequest conversationId
     * @property {string|null} [content] SendMessageRequest content
     * @property {number|null} [type] SendMessageRequest type
     * @property {string|null} [targetId] SendMessageRequest targetId
     * @property {string|null} [clientMsgId] SendMessageRequest clientMsgId
     * @property {string|null} [mediaGroupId] SendMessageRequest mediaGroupId
     * @property {string|null} [fileId] SendMessageRequest fileId
     * @property {number|null} [durationSec] SendMessageRequest durationSec
     * @property {string|null} [waveform] SendMessageRequest waveform
     * @property {string|null} [thumbUrl] SendMessageRequest thumbUrl
     */

    /**
     * Constructs a new SendMessageRequest.
     * @exports SendMessageRequest
     * @classdesc Represents a SendMessageRequest.
     * @implements ISendMessageRequest
     * @constructor
     * @param {ISendMessageRequest=} [properties] Properties to set
     */
    function SendMessageRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendMessageRequest conversationId.
     * @member {string} conversationId
     * @memberof SendMessageRequest
     * @instance
     */
    SendMessageRequest.prototype.conversationId = "";

    /**
     * SendMessageRequest content.
     * @member {string} content
     * @memberof SendMessageRequest
     * @instance
     */
    SendMessageRequest.prototype.content = "";

    /**
     * SendMessageRequest type.
     * @member {number} type
     * @memberof SendMessageRequest
     * @instance
     */
    SendMessageRequest.prototype.type = 0;

    /**
     * SendMessageRequest targetId.
     * @member {string|null|undefined} targetId
     * @memberof SendMessageRequest
     * @instance
     */
    SendMessageRequest.prototype.targetId = null;

    /**
     * SendMessageRequest clientMsgId.
     * @member {string} clientMsgId
     * @memberof SendMessageRequest
     * @instance
     */
    SendMessageRequest.prototype.clientMsgId = "";

    /**
     * SendMessageRequest mediaGroupId.
     * @member {string|null|undefined} mediaGroupId
     * @memberof SendMessageRequest
     * @instance
     */
    SendMessageRequest.prototype.mediaGroupId = null;

    /**
     * SendMessageRequest fileId.
     * @member {string|null|undefined} fileId
     * @memberof SendMessageRequest
     * @instance
     */
    SendMessageRequest.prototype.fileId = null;

    /**
     * SendMessageRequest durationSec.
     * @member {number|null|undefined} durationSec
     * @memberof SendMessageRequest
     * @instance
     */
    SendMessageRequest.prototype.durationSec = null;

    /**
     * SendMessageRequest waveform.
     * @member {string|null|undefined} waveform
     * @memberof SendMessageRequest
     * @instance
     */
    SendMessageRequest.prototype.waveform = null;

    /**
     * SendMessageRequest thumbUrl.
     * @member {string|null|undefined} thumbUrl
     * @memberof SendMessageRequest
     * @instance
     */
    SendMessageRequest.prototype.thumbUrl = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(SendMessageRequest.prototype, "_targetId", {
        get: $util.oneOfGetter($oneOfFields = ["targetId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(SendMessageRequest.prototype, "_mediaGroupId", {
        get: $util.oneOfGetter($oneOfFields = ["mediaGroupId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(SendMessageRequest.prototype, "_fileId", {
        get: $util.oneOfGetter($oneOfFields = ["fileId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(SendMessageRequest.prototype, "_durationSec", {
        get: $util.oneOfGetter($oneOfFields = ["durationSec"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(SendMessageRequest.prototype, "_waveform", {
        get: $util.oneOfGetter($oneOfFields = ["waveform"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(SendMessageRequest.prototype, "_thumbUrl", {
        get: $util.oneOfGetter($oneOfFields = ["thumbUrl"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new SendMessageRequest instance using the specified properties.
     * @function create
     * @memberof SendMessageRequest
     * @static
     * @param {ISendMessageRequest=} [properties] Properties to set
     * @returns {SendMessageRequest} SendMessageRequest instance
     */
    SendMessageRequest.create = function create(properties) {
        return new SendMessageRequest(properties);
    };

    /**
     * Encodes the specified SendMessageRequest message. Does not implicitly {@link SendMessageRequest.verify|verify} messages.
     * @function encode
     * @memberof SendMessageRequest
     * @static
     * @param {ISendMessageRequest} message SendMessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMessageRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversationId);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
        if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.targetId);
        if (message.clientMsgId != null && Object.hasOwnProperty.call(message, "clientMsgId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.clientMsgId);
        if (message.mediaGroupId != null && Object.hasOwnProperty.call(message, "mediaGroupId"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.mediaGroupId);
        if (message.fileId != null && Object.hasOwnProperty.call(message, "fileId"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.fileId);
        if (message.durationSec != null && Object.hasOwnProperty.call(message, "durationSec"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.durationSec);
        if (message.waveform != null && Object.hasOwnProperty.call(message, "waveform"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.waveform);
        if (message.thumbUrl != null && Object.hasOwnProperty.call(message, "thumbUrl"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.thumbUrl);
        return writer;
    };

    /**
     * Encodes the specified SendMessageRequest message, length delimited. Does not implicitly {@link SendMessageRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendMessageRequest
     * @static
     * @param {ISendMessageRequest} message SendMessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendMessageRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SendMessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendMessageRequest} SendMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMessageRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendMessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.conversationId = reader.string();
                    break;
                }
            case 2: {
                    message.content = reader.string();
                    break;
                }
            case 3: {
                    message.type = reader.int32();
                    break;
                }
            case 4: {
                    message.targetId = reader.string();
                    break;
                }
            case 5: {
                    message.clientMsgId = reader.string();
                    break;
                }
            case 6: {
                    message.mediaGroupId = reader.string();
                    break;
                }
            case 7: {
                    message.fileId = reader.string();
                    break;
                }
            case 8: {
                    message.durationSec = reader.int32();
                    break;
                }
            case 9: {
                    message.waveform = reader.string();
                    break;
                }
            case 10: {
                    message.thumbUrl = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SendMessageRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendMessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendMessageRequest} SendMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMessageRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendMessageRequest message.
     * @function verify
     * @memberof SendMessageRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendMessageRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            if (!$util.isString(message.conversationId))
                return "conversationId: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.targetId != null && message.hasOwnProperty("targetId")) {
            properties._targetId = 1;
            if (!$util.isString(message.targetId))
                return "targetId: string expected";
        }
        if (message.clientMsgId != null && message.hasOwnProperty("clientMsgId"))
            if (!$util.isString(message.clientMsgId))
                return "clientMsgId: string expected";
        if (message.mediaGroupId != null && message.hasOwnProperty("mediaGroupId")) {
            properties._mediaGroupId = 1;
            if (!$util.isString(message.mediaGroupId))
                return "mediaGroupId: string expected";
        }
        if (message.fileId != null && message.hasOwnProperty("fileId")) {
            properties._fileId = 1;
            if (!$util.isString(message.fileId))
                return "fileId: string expected";
        }
        if (message.durationSec != null && message.hasOwnProperty("durationSec")) {
            properties._durationSec = 1;
            if (!$util.isInteger(message.durationSec))
                return "durationSec: integer expected";
        }
        if (message.waveform != null && message.hasOwnProperty("waveform")) {
            properties._waveform = 1;
            if (!$util.isString(message.waveform))
                return "waveform: string expected";
        }
        if (message.thumbUrl != null && message.hasOwnProperty("thumbUrl")) {
            properties._thumbUrl = 1;
            if (!$util.isString(message.thumbUrl))
                return "thumbUrl: string expected";
        }
        return null;
    };

    /**
     * Creates a SendMessageRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendMessageRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendMessageRequest} SendMessageRequest
     */
    SendMessageRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SendMessageRequest)
            return object;
        var message = new $root.SendMessageRequest();
        if (object.conversationId != null)
            message.conversationId = String(object.conversationId);
        if (object.content != null)
            message.content = String(object.content);
        if (object.type != null)
            message.type = object.type | 0;
        if (object.targetId != null)
            message.targetId = String(object.targetId);
        if (object.clientMsgId != null)
            message.clientMsgId = String(object.clientMsgId);
        if (object.mediaGroupId != null)
            message.mediaGroupId = String(object.mediaGroupId);
        if (object.fileId != null)
            message.fileId = String(object.fileId);
        if (object.durationSec != null)
            message.durationSec = object.durationSec | 0;
        if (object.waveform != null)
            message.waveform = String(object.waveform);
        if (object.thumbUrl != null)
            message.thumbUrl = String(object.thumbUrl);
        return message;
    };

    /**
     * Creates a plain object from a SendMessageRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendMessageRequest
     * @static
     * @param {SendMessageRequest} message SendMessageRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendMessageRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.conversationId = "";
            object.content = "";
            object.type = 0;
            object.clientMsgId = "";
        }
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            object.conversationId = message.conversationId;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.targetId != null && message.hasOwnProperty("targetId")) {
            object.targetId = message.targetId;
            if (options.oneofs)
                object._targetId = "targetId";
        }
        if (message.clientMsgId != null && message.hasOwnProperty("clientMsgId"))
            object.clientMsgId = message.clientMsgId;
        if (message.mediaGroupId != null && message.hasOwnProperty("mediaGroupId")) {
            object.mediaGroupId = message.mediaGroupId;
            if (options.oneofs)
                object._mediaGroupId = "mediaGroupId";
        }
        if (message.fileId != null && message.hasOwnProperty("fileId")) {
            object.fileId = message.fileId;
            if (options.oneofs)
                object._fileId = "fileId";
        }
        if (message.durationSec != null && message.hasOwnProperty("durationSec")) {
            object.durationSec = message.durationSec;
            if (options.oneofs)
                object._durationSec = "durationSec";
        }
        if (message.waveform != null && message.hasOwnProperty("waveform")) {
            object.waveform = message.waveform;
            if (options.oneofs)
                object._waveform = "waveform";
        }
        if (message.thumbUrl != null && message.hasOwnProperty("thumbUrl")) {
            object.thumbUrl = message.thumbUrl;
            if (options.oneofs)
                object._thumbUrl = "thumbUrl";
        }
        return object;
    };

    /**
     * Converts this SendMessageRequest to JSON.
     * @function toJSON
     * @memberof SendMessageRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendMessageRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SendMessageRequest
     * @function getTypeUrl
     * @memberof SendMessageRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SendMessageRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SendMessageRequest";
    };

    return SendMessageRequest;
})();

$root.AckSendMessage = (function() {

    /**
     * Properties of an AckSendMessage.
     * @exports IAckSendMessage
     * @interface IAckSendMessage
     * @property {string|null} [clientMsgId] AckSendMessage clientMsgId
     * @property {string|null} [status] AckSendMessage status
     */

    /**
     * Constructs a new AckSendMessage.
     * @exports AckSendMessage
     * @classdesc Represents an AckSendMessage.
     * @implements IAckSendMessage
     * @constructor
     * @param {IAckSendMessage=} [properties] Properties to set
     */
    function AckSendMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AckSendMessage clientMsgId.
     * @member {string} clientMsgId
     * @memberof AckSendMessage
     * @instance
     */
    AckSendMessage.prototype.clientMsgId = "";

    /**
     * AckSendMessage status.
     * @member {string} status
     * @memberof AckSendMessage
     * @instance
     */
    AckSendMessage.prototype.status = "";

    /**
     * Creates a new AckSendMessage instance using the specified properties.
     * @function create
     * @memberof AckSendMessage
     * @static
     * @param {IAckSendMessage=} [properties] Properties to set
     * @returns {AckSendMessage} AckSendMessage instance
     */
    AckSendMessage.create = function create(properties) {
        return new AckSendMessage(properties);
    };

    /**
     * Encodes the specified AckSendMessage message. Does not implicitly {@link AckSendMessage.verify|verify} messages.
     * @function encode
     * @memberof AckSendMessage
     * @static
     * @param {IAckSendMessage} message AckSendMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AckSendMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clientMsgId != null && Object.hasOwnProperty.call(message, "clientMsgId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientMsgId);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
        return writer;
    };

    /**
     * Encodes the specified AckSendMessage message, length delimited. Does not implicitly {@link AckSendMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AckSendMessage
     * @static
     * @param {IAckSendMessage} message AckSendMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AckSendMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AckSendMessage message from the specified reader or buffer.
     * @function decode
     * @memberof AckSendMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AckSendMessage} AckSendMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AckSendMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AckSendMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.clientMsgId = reader.string();
                    break;
                }
            case 2: {
                    message.status = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AckSendMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AckSendMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AckSendMessage} AckSendMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AckSendMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AckSendMessage message.
     * @function verify
     * @memberof AckSendMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AckSendMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.clientMsgId != null && message.hasOwnProperty("clientMsgId"))
            if (!$util.isString(message.clientMsgId))
                return "clientMsgId: string expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isString(message.status))
                return "status: string expected";
        return null;
    };

    /**
     * Creates an AckSendMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AckSendMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AckSendMessage} AckSendMessage
     */
    AckSendMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.AckSendMessage)
            return object;
        var message = new $root.AckSendMessage();
        if (object.clientMsgId != null)
            message.clientMsgId = String(object.clientMsgId);
        if (object.status != null)
            message.status = String(object.status);
        return message;
    };

    /**
     * Creates a plain object from an AckSendMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AckSendMessage
     * @static
     * @param {AckSendMessage} message AckSendMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AckSendMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.clientMsgId = "";
            object.status = "";
        }
        if (message.clientMsgId != null && message.hasOwnProperty("clientMsgId"))
            object.clientMsgId = message.clientMsgId;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this AckSendMessage to JSON.
     * @function toJSON
     * @memberof AckSendMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AckSendMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AckSendMessage
     * @function getTypeUrl
     * @memberof AckSendMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AckSendMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AckSendMessage";
    };

    return AckSendMessage;
})();

$root.MessageInfo = (function() {

    /**
     * Properties of a MessageInfo.
     * @exports IMessageInfo
     * @interface IMessageInfo
     * @property {string|null} [id] MessageInfo id
     * @property {number|null} [msgId] MessageInfo msgId
     * @property {string|null} [senderId] MessageInfo senderId
     * @property {string|null} [conversationId] MessageInfo conversationId
     * @property {string|null} [content] MessageInfo content
     * @property {number|null} [type] MessageInfo type
     * @property {number|null} [state] MessageInfo state
     * @property {number|Long|null} [createTime] MessageInfo createTime
     * @property {number|Long|null} [updateTime] MessageInfo updateTime
     * @property {string|null} [clientMsgId] MessageInfo clientMsgId
     * @property {string|null} [mediaGroupId] MessageInfo mediaGroupId
     * @property {IMediaInfo|null} [media] MessageInfo media
     */

    /**
     * Constructs a new MessageInfo.
     * @exports MessageInfo
     * @classdesc Represents a MessageInfo.
     * @implements IMessageInfo
     * @constructor
     * @param {IMessageInfo=} [properties] Properties to set
     */
    function MessageInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageInfo id.
     * @member {string} id
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.id = "";

    /**
     * MessageInfo msgId.
     * @member {number} msgId
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.msgId = 0;

    /**
     * MessageInfo senderId.
     * @member {string} senderId
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.senderId = "";

    /**
     * MessageInfo conversationId.
     * @member {string} conversationId
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.conversationId = "";

    /**
     * MessageInfo content.
     * @member {string} content
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.content = "";

    /**
     * MessageInfo type.
     * @member {number} type
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.type = 0;

    /**
     * MessageInfo state.
     * @member {number} state
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.state = 0;

    /**
     * MessageInfo createTime.
     * @member {number|Long} createTime
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MessageInfo updateTime.
     * @member {number|Long} updateTime
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MessageInfo clientMsgId.
     * @member {string} clientMsgId
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.clientMsgId = "";

    /**
     * MessageInfo mediaGroupId.
     * @member {string|null|undefined} mediaGroupId
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.mediaGroupId = null;

    /**
     * MessageInfo media.
     * @member {IMediaInfo|null|undefined} media
     * @memberof MessageInfo
     * @instance
     */
    MessageInfo.prototype.media = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(MessageInfo.prototype, "_mediaGroupId", {
        get: $util.oneOfGetter($oneOfFields = ["mediaGroupId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(MessageInfo.prototype, "_media", {
        get: $util.oneOfGetter($oneOfFields = ["media"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new MessageInfo instance using the specified properties.
     * @function create
     * @memberof MessageInfo
     * @static
     * @param {IMessageInfo=} [properties] Properties to set
     * @returns {MessageInfo} MessageInfo instance
     */
    MessageInfo.create = function create(properties) {
        return new MessageInfo(properties);
    };

    /**
     * Encodes the specified MessageInfo message. Does not implicitly {@link MessageInfo.verify|verify} messages.
     * @function encode
     * @memberof MessageInfo
     * @static
     * @param {IMessageInfo} message MessageInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.msgId);
        if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.senderId);
        if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.conversationId);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.state);
        if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.createTime);
        if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.updateTime);
        if (message.clientMsgId != null && Object.hasOwnProperty.call(message, "clientMsgId"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.clientMsgId);
        if (message.mediaGroupId != null && Object.hasOwnProperty.call(message, "mediaGroupId"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.mediaGroupId);
        if (message.media != null && Object.hasOwnProperty.call(message, "media"))
            $root.MediaInfo.encode(message.media, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MessageInfo message, length delimited. Does not implicitly {@link MessageInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageInfo
     * @static
     * @param {IMessageInfo} message MessageInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MessageInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageInfo} MessageInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.msgId = reader.int32();
                    break;
                }
            case 3: {
                    message.senderId = reader.string();
                    break;
                }
            case 4: {
                    message.conversationId = reader.string();
                    break;
                }
            case 5: {
                    message.content = reader.string();
                    break;
                }
            case 6: {
                    message.type = reader.int32();
                    break;
                }
            case 7: {
                    message.state = reader.int32();
                    break;
                }
            case 8: {
                    message.createTime = reader.int64();
                    break;
                }
            case 9: {
                    message.updateTime = reader.int64();
                    break;
                }
            case 10: {
                    message.clientMsgId = reader.string();
                    break;
                }
            case 11: {
                    message.mediaGroupId = reader.string();
                    break;
                }
            case 12: {
                    message.media = $root.MediaInfo.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageInfo} MessageInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageInfo message.
     * @function verify
     * @memberof MessageInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            if (!$util.isInteger(message.msgId))
                return "msgId: integer expected";
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            if (!$util.isString(message.senderId))
                return "senderId: string expected";
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            if (!$util.isString(message.conversationId))
                return "conversationId: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        if (message.createTime != null && message.hasOwnProperty("createTime"))
            if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                return "createTime: integer|Long expected";
        if (message.updateTime != null && message.hasOwnProperty("updateTime"))
            if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                return "updateTime: integer|Long expected";
        if (message.clientMsgId != null && message.hasOwnProperty("clientMsgId"))
            if (!$util.isString(message.clientMsgId))
                return "clientMsgId: string expected";
        if (message.mediaGroupId != null && message.hasOwnProperty("mediaGroupId")) {
            properties._mediaGroupId = 1;
            if (!$util.isString(message.mediaGroupId))
                return "mediaGroupId: string expected";
        }
        if (message.media != null && message.hasOwnProperty("media")) {
            properties._media = 1;
            {
                var error = $root.MediaInfo.verify(message.media);
                if (error)
                    return "media." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MessageInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageInfo} MessageInfo
     */
    MessageInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageInfo)
            return object;
        var message = new $root.MessageInfo();
        if (object.id != null)
            message.id = String(object.id);
        if (object.msgId != null)
            message.msgId = object.msgId | 0;
        if (object.senderId != null)
            message.senderId = String(object.senderId);
        if (object.conversationId != null)
            message.conversationId = String(object.conversationId);
        if (object.content != null)
            message.content = String(object.content);
        if (object.type != null)
            message.type = object.type | 0;
        if (object.state != null)
            message.state = object.state | 0;
        if (object.createTime != null)
            if ($util.Long)
                (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
            else if (typeof object.createTime === "string")
                message.createTime = parseInt(object.createTime, 10);
            else if (typeof object.createTime === "number")
                message.createTime = object.createTime;
            else if (typeof object.createTime === "object")
                message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
        if (object.updateTime != null)
            if ($util.Long)
                (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
            else if (typeof object.updateTime === "string")
                message.updateTime = parseInt(object.updateTime, 10);
            else if (typeof object.updateTime === "number")
                message.updateTime = object.updateTime;
            else if (typeof object.updateTime === "object")
                message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
        if (object.clientMsgId != null)
            message.clientMsgId = String(object.clientMsgId);
        if (object.mediaGroupId != null)
            message.mediaGroupId = String(object.mediaGroupId);
        if (object.media != null) {
            if (typeof object.media !== "object")
                throw TypeError(".MessageInfo.media: object expected");
            message.media = $root.MediaInfo.fromObject(object.media);
        }
        return message;
    };

    /**
     * Creates a plain object from a MessageInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageInfo
     * @static
     * @param {MessageInfo} message MessageInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.msgId = 0;
            object.senderId = "";
            object.conversationId = "";
            object.content = "";
            object.type = 0;
            object.state = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createTime = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateTime = options.longs === String ? "0" : 0;
            object.clientMsgId = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            object.msgId = message.msgId;
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            object.senderId = message.senderId;
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            object.conversationId = message.conversationId;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        if (message.createTime != null && message.hasOwnProperty("createTime"))
            if (typeof message.createTime === "number")
                object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
            else
                object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
        if (message.updateTime != null && message.hasOwnProperty("updateTime"))
            if (typeof message.updateTime === "number")
                object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
            else
                object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
        if (message.clientMsgId != null && message.hasOwnProperty("clientMsgId"))
            object.clientMsgId = message.clientMsgId;
        if (message.mediaGroupId != null && message.hasOwnProperty("mediaGroupId")) {
            object.mediaGroupId = message.mediaGroupId;
            if (options.oneofs)
                object._mediaGroupId = "mediaGroupId";
        }
        if (message.media != null && message.hasOwnProperty("media")) {
            object.media = $root.MediaInfo.toObject(message.media, options);
            if (options.oneofs)
                object._media = "media";
        }
        return object;
    };

    /**
     * Converts this MessageInfo to JSON.
     * @function toJSON
     * @memberof MessageInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MessageInfo
     * @function getTypeUrl
     * @memberof MessageInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MessageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MessageInfo";
    };

    return MessageInfo;
})();

$root.GetConversationListRequest = (function() {

    /**
     * Properties of a GetConversationListRequest.
     * @exports IGetConversationListRequest
     * @interface IGetConversationListRequest
     * @property {Common.IPaginationRequest|null} [pagination] GetConversationListRequest pagination
     */

    /**
     * Constructs a new GetConversationListRequest.
     * @exports GetConversationListRequest
     * @classdesc Represents a GetConversationListRequest.
     * @implements IGetConversationListRequest
     * @constructor
     * @param {IGetConversationListRequest=} [properties] Properties to set
     */
    function GetConversationListRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetConversationListRequest pagination.
     * @member {Common.IPaginationRequest|null|undefined} pagination
     * @memberof GetConversationListRequest
     * @instance
     */
    GetConversationListRequest.prototype.pagination = null;

    /**
     * Creates a new GetConversationListRequest instance using the specified properties.
     * @function create
     * @memberof GetConversationListRequest
     * @static
     * @param {IGetConversationListRequest=} [properties] Properties to set
     * @returns {GetConversationListRequest} GetConversationListRequest instance
     */
    GetConversationListRequest.create = function create(properties) {
        return new GetConversationListRequest(properties);
    };

    /**
     * Encodes the specified GetConversationListRequest message. Does not implicitly {@link GetConversationListRequest.verify|verify} messages.
     * @function encode
     * @memberof GetConversationListRequest
     * @static
     * @param {IGetConversationListRequest} message GetConversationListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetConversationListRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
            $root.Common.PaginationRequest.encode(message.pagination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetConversationListRequest message, length delimited. Does not implicitly {@link GetConversationListRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetConversationListRequest
     * @static
     * @param {IGetConversationListRequest} message GetConversationListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetConversationListRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetConversationListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetConversationListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetConversationListRequest} GetConversationListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetConversationListRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetConversationListRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.pagination = $root.Common.PaginationRequest.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetConversationListRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetConversationListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetConversationListRequest} GetConversationListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetConversationListRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetConversationListRequest message.
     * @function verify
     * @memberof GetConversationListRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetConversationListRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pagination != null && message.hasOwnProperty("pagination")) {
            var error = $root.Common.PaginationRequest.verify(message.pagination);
            if (error)
                return "pagination." + error;
        }
        return null;
    };

    /**
     * Creates a GetConversationListRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetConversationListRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetConversationListRequest} GetConversationListRequest
     */
    GetConversationListRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetConversationListRequest)
            return object;
        var message = new $root.GetConversationListRequest();
        if (object.pagination != null) {
            if (typeof object.pagination !== "object")
                throw TypeError(".GetConversationListRequest.pagination: object expected");
            message.pagination = $root.Common.PaginationRequest.fromObject(object.pagination);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetConversationListRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetConversationListRequest
     * @static
     * @param {GetConversationListRequest} message GetConversationListRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetConversationListRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.pagination = null;
        if (message.pagination != null && message.hasOwnProperty("pagination"))
            object.pagination = $root.Common.PaginationRequest.toObject(message.pagination, options);
        return object;
    };

    /**
     * Converts this GetConversationListRequest to JSON.
     * @function toJSON
     * @memberof GetConversationListRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetConversationListRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetConversationListRequest
     * @function getTypeUrl
     * @memberof GetConversationListRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetConversationListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetConversationListRequest";
    };

    return GetConversationListRequest;
})();

$root.GetConversationListResponse = (function() {

    /**
     * Properties of a GetConversationListResponse.
     * @exports IGetConversationListResponse
     * @interface IGetConversationListResponse
     * @property {Common.IPaginationResponse|null} [pagination] GetConversationListResponse pagination
     * @property {Array.<IConversationInfo>|null} [list] GetConversationListResponse list
     */

    /**
     * Constructs a new GetConversationListResponse.
     * @exports GetConversationListResponse
     * @classdesc Represents a GetConversationListResponse.
     * @implements IGetConversationListResponse
     * @constructor
     * @param {IGetConversationListResponse=} [properties] Properties to set
     */
    function GetConversationListResponse(properties) {
        this.list = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetConversationListResponse pagination.
     * @member {Common.IPaginationResponse|null|undefined} pagination
     * @memberof GetConversationListResponse
     * @instance
     */
    GetConversationListResponse.prototype.pagination = null;

    /**
     * GetConversationListResponse list.
     * @member {Array.<IConversationInfo>} list
     * @memberof GetConversationListResponse
     * @instance
     */
    GetConversationListResponse.prototype.list = $util.emptyArray;

    /**
     * Creates a new GetConversationListResponse instance using the specified properties.
     * @function create
     * @memberof GetConversationListResponse
     * @static
     * @param {IGetConversationListResponse=} [properties] Properties to set
     * @returns {GetConversationListResponse} GetConversationListResponse instance
     */
    GetConversationListResponse.create = function create(properties) {
        return new GetConversationListResponse(properties);
    };

    /**
     * Encodes the specified GetConversationListResponse message. Does not implicitly {@link GetConversationListResponse.verify|verify} messages.
     * @function encode
     * @memberof GetConversationListResponse
     * @static
     * @param {IGetConversationListResponse} message GetConversationListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetConversationListResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
            $root.Common.PaginationResponse.encode(message.pagination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.list != null && message.list.length)
            for (var i = 0; i < message.list.length; ++i)
                $root.ConversationInfo.encode(message.list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetConversationListResponse message, length delimited. Does not implicitly {@link GetConversationListResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetConversationListResponse
     * @static
     * @param {IGetConversationListResponse} message GetConversationListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetConversationListResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetConversationListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GetConversationListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetConversationListResponse} GetConversationListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetConversationListResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetConversationListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.pagination = $root.Common.PaginationResponse.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.ConversationInfo.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetConversationListResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetConversationListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetConversationListResponse} GetConversationListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetConversationListResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetConversationListResponse message.
     * @function verify
     * @memberof GetConversationListResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetConversationListResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pagination != null && message.hasOwnProperty("pagination")) {
            var error = $root.Common.PaginationResponse.verify(message.pagination);
            if (error)
                return "pagination." + error;
        }
        if (message.list != null && message.hasOwnProperty("list")) {
            if (!Array.isArray(message.list))
                return "list: array expected";
            for (var i = 0; i < message.list.length; ++i) {
                var error = $root.ConversationInfo.verify(message.list[i]);
                if (error)
                    return "list." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetConversationListResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetConversationListResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetConversationListResponse} GetConversationListResponse
     */
    GetConversationListResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GetConversationListResponse)
            return object;
        var message = new $root.GetConversationListResponse();
        if (object.pagination != null) {
            if (typeof object.pagination !== "object")
                throw TypeError(".GetConversationListResponse.pagination: object expected");
            message.pagination = $root.Common.PaginationResponse.fromObject(object.pagination);
        }
        if (object.list) {
            if (!Array.isArray(object.list))
                throw TypeError(".GetConversationListResponse.list: array expected");
            message.list = [];
            for (var i = 0; i < object.list.length; ++i) {
                if (typeof object.list[i] !== "object")
                    throw TypeError(".GetConversationListResponse.list: object expected");
                message.list[i] = $root.ConversationInfo.fromObject(object.list[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetConversationListResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetConversationListResponse
     * @static
     * @param {GetConversationListResponse} message GetConversationListResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetConversationListResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.list = [];
        if (options.defaults)
            object.pagination = null;
        if (message.pagination != null && message.hasOwnProperty("pagination"))
            object.pagination = $root.Common.PaginationResponse.toObject(message.pagination, options);
        if (message.list && message.list.length) {
            object.list = [];
            for (var j = 0; j < message.list.length; ++j)
                object.list[j] = $root.ConversationInfo.toObject(message.list[j], options);
        }
        return object;
    };

    /**
     * Converts this GetConversationListResponse to JSON.
     * @function toJSON
     * @memberof GetConversationListResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetConversationListResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetConversationListResponse
     * @function getTypeUrl
     * @memberof GetConversationListResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetConversationListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetConversationListResponse";
    };

    return GetConversationListResponse;
})();

$root.GetMessageHistoryRequest = (function() {

    /**
     * Properties of a GetMessageHistoryRequest.
     * @exports IGetMessageHistoryRequest
     * @interface IGetMessageHistoryRequest
     * @property {string|null} [conversationId] GetMessageHistoryRequest conversationId
     * @property {Common.IPaginationRequest|null} [pagination] GetMessageHistoryRequest pagination
     */

    /**
     * Constructs a new GetMessageHistoryRequest.
     * @exports GetMessageHistoryRequest
     * @classdesc Represents a GetMessageHistoryRequest.
     * @implements IGetMessageHistoryRequest
     * @constructor
     * @param {IGetMessageHistoryRequest=} [properties] Properties to set
     */
    function GetMessageHistoryRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetMessageHistoryRequest conversationId.
     * @member {string} conversationId
     * @memberof GetMessageHistoryRequest
     * @instance
     */
    GetMessageHistoryRequest.prototype.conversationId = "";

    /**
     * GetMessageHistoryRequest pagination.
     * @member {Common.IPaginationRequest|null|undefined} pagination
     * @memberof GetMessageHistoryRequest
     * @instance
     */
    GetMessageHistoryRequest.prototype.pagination = null;

    /**
     * Creates a new GetMessageHistoryRequest instance using the specified properties.
     * @function create
     * @memberof GetMessageHistoryRequest
     * @static
     * @param {IGetMessageHistoryRequest=} [properties] Properties to set
     * @returns {GetMessageHistoryRequest} GetMessageHistoryRequest instance
     */
    GetMessageHistoryRequest.create = function create(properties) {
        return new GetMessageHistoryRequest(properties);
    };

    /**
     * Encodes the specified GetMessageHistoryRequest message. Does not implicitly {@link GetMessageHistoryRequest.verify|verify} messages.
     * @function encode
     * @memberof GetMessageHistoryRequest
     * @static
     * @param {IGetMessageHistoryRequest} message GetMessageHistoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMessageHistoryRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversationId);
        if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
            $root.Common.PaginationRequest.encode(message.pagination, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetMessageHistoryRequest message, length delimited. Does not implicitly {@link GetMessageHistoryRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetMessageHistoryRequest
     * @static
     * @param {IGetMessageHistoryRequest} message GetMessageHistoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMessageHistoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetMessageHistoryRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetMessageHistoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetMessageHistoryRequest} GetMessageHistoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMessageHistoryRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetMessageHistoryRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.conversationId = reader.string();
                    break;
                }
            case 2: {
                    message.pagination = $root.Common.PaginationRequest.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetMessageHistoryRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetMessageHistoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetMessageHistoryRequest} GetMessageHistoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMessageHistoryRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetMessageHistoryRequest message.
     * @function verify
     * @memberof GetMessageHistoryRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetMessageHistoryRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            if (!$util.isString(message.conversationId))
                return "conversationId: string expected";
        if (message.pagination != null && message.hasOwnProperty("pagination")) {
            var error = $root.Common.PaginationRequest.verify(message.pagination);
            if (error)
                return "pagination." + error;
        }
        return null;
    };

    /**
     * Creates a GetMessageHistoryRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetMessageHistoryRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetMessageHistoryRequest} GetMessageHistoryRequest
     */
    GetMessageHistoryRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetMessageHistoryRequest)
            return object;
        var message = new $root.GetMessageHistoryRequest();
        if (object.conversationId != null)
            message.conversationId = String(object.conversationId);
        if (object.pagination != null) {
            if (typeof object.pagination !== "object")
                throw TypeError(".GetMessageHistoryRequest.pagination: object expected");
            message.pagination = $root.Common.PaginationRequest.fromObject(object.pagination);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetMessageHistoryRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetMessageHistoryRequest
     * @static
     * @param {GetMessageHistoryRequest} message GetMessageHistoryRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetMessageHistoryRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.conversationId = "";
            object.pagination = null;
        }
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            object.conversationId = message.conversationId;
        if (message.pagination != null && message.hasOwnProperty("pagination"))
            object.pagination = $root.Common.PaginationRequest.toObject(message.pagination, options);
        return object;
    };

    /**
     * Converts this GetMessageHistoryRequest to JSON.
     * @function toJSON
     * @memberof GetMessageHistoryRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetMessageHistoryRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetMessageHistoryRequest
     * @function getTypeUrl
     * @memberof GetMessageHistoryRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetMessageHistoryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetMessageHistoryRequest";
    };

    return GetMessageHistoryRequest;
})();

$root.GetMessageHistoryResponse = (function() {

    /**
     * Properties of a GetMessageHistoryResponse.
     * @exports IGetMessageHistoryResponse
     * @interface IGetMessageHistoryResponse
     * @property {Common.IPaginationResponse|null} [pagination] GetMessageHistoryResponse pagination
     * @property {Array.<IMessageInfo>|null} [list] GetMessageHistoryResponse list
     */

    /**
     * Constructs a new GetMessageHistoryResponse.
     * @exports GetMessageHistoryResponse
     * @classdesc Represents a GetMessageHistoryResponse.
     * @implements IGetMessageHistoryResponse
     * @constructor
     * @param {IGetMessageHistoryResponse=} [properties] Properties to set
     */
    function GetMessageHistoryResponse(properties) {
        this.list = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetMessageHistoryResponse pagination.
     * @member {Common.IPaginationResponse|null|undefined} pagination
     * @memberof GetMessageHistoryResponse
     * @instance
     */
    GetMessageHistoryResponse.prototype.pagination = null;

    /**
     * GetMessageHistoryResponse list.
     * @member {Array.<IMessageInfo>} list
     * @memberof GetMessageHistoryResponse
     * @instance
     */
    GetMessageHistoryResponse.prototype.list = $util.emptyArray;

    /**
     * Creates a new GetMessageHistoryResponse instance using the specified properties.
     * @function create
     * @memberof GetMessageHistoryResponse
     * @static
     * @param {IGetMessageHistoryResponse=} [properties] Properties to set
     * @returns {GetMessageHistoryResponse} GetMessageHistoryResponse instance
     */
    GetMessageHistoryResponse.create = function create(properties) {
        return new GetMessageHistoryResponse(properties);
    };

    /**
     * Encodes the specified GetMessageHistoryResponse message. Does not implicitly {@link GetMessageHistoryResponse.verify|verify} messages.
     * @function encode
     * @memberof GetMessageHistoryResponse
     * @static
     * @param {IGetMessageHistoryResponse} message GetMessageHistoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMessageHistoryResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
            $root.Common.PaginationResponse.encode(message.pagination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.list != null && message.list.length)
            for (var i = 0; i < message.list.length; ++i)
                $root.MessageInfo.encode(message.list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetMessageHistoryResponse message, length delimited. Does not implicitly {@link GetMessageHistoryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetMessageHistoryResponse
     * @static
     * @param {IGetMessageHistoryResponse} message GetMessageHistoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMessageHistoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetMessageHistoryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GetMessageHistoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetMessageHistoryResponse} GetMessageHistoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMessageHistoryResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetMessageHistoryResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.pagination = $root.Common.PaginationResponse.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.MessageInfo.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetMessageHistoryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetMessageHistoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetMessageHistoryResponse} GetMessageHistoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMessageHistoryResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetMessageHistoryResponse message.
     * @function verify
     * @memberof GetMessageHistoryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetMessageHistoryResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pagination != null && message.hasOwnProperty("pagination")) {
            var error = $root.Common.PaginationResponse.verify(message.pagination);
            if (error)
                return "pagination." + error;
        }
        if (message.list != null && message.hasOwnProperty("list")) {
            if (!Array.isArray(message.list))
                return "list: array expected";
            for (var i = 0; i < message.list.length; ++i) {
                var error = $root.MessageInfo.verify(message.list[i]);
                if (error)
                    return "list." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetMessageHistoryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetMessageHistoryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetMessageHistoryResponse} GetMessageHistoryResponse
     */
    GetMessageHistoryResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GetMessageHistoryResponse)
            return object;
        var message = new $root.GetMessageHistoryResponse();
        if (object.pagination != null) {
            if (typeof object.pagination !== "object")
                throw TypeError(".GetMessageHistoryResponse.pagination: object expected");
            message.pagination = $root.Common.PaginationResponse.fromObject(object.pagination);
        }
        if (object.list) {
            if (!Array.isArray(object.list))
                throw TypeError(".GetMessageHistoryResponse.list: array expected");
            message.list = [];
            for (var i = 0; i < object.list.length; ++i) {
                if (typeof object.list[i] !== "object")
                    throw TypeError(".GetMessageHistoryResponse.list: object expected");
                message.list[i] = $root.MessageInfo.fromObject(object.list[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetMessageHistoryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetMessageHistoryResponse
     * @static
     * @param {GetMessageHistoryResponse} message GetMessageHistoryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetMessageHistoryResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.list = [];
        if (options.defaults)
            object.pagination = null;
        if (message.pagination != null && message.hasOwnProperty("pagination"))
            object.pagination = $root.Common.PaginationResponse.toObject(message.pagination, options);
        if (message.list && message.list.length) {
            object.list = [];
            for (var j = 0; j < message.list.length; ++j)
                object.list[j] = $root.MessageInfo.toObject(message.list[j], options);
        }
        return object;
    };

    /**
     * Converts this GetMessageHistoryResponse to JSON.
     * @function toJSON
     * @memberof GetMessageHistoryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetMessageHistoryResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetMessageHistoryResponse
     * @function getTypeUrl
     * @memberof GetMessageHistoryResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetMessageHistoryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetMessageHistoryResponse";
    };

    return GetMessageHistoryResponse;
})();

$root.ReadMessageRequest = (function() {

    /**
     * Properties of a ReadMessageRequest.
     * @exports IReadMessageRequest
     * @interface IReadMessageRequest
     * @property {string|null} [conversationId] ReadMessageRequest conversationId
     * @property {string|null} [messageId] ReadMessageRequest messageId
     */

    /**
     * Constructs a new ReadMessageRequest.
     * @exports ReadMessageRequest
     * @classdesc Represents a ReadMessageRequest.
     * @implements IReadMessageRequest
     * @constructor
     * @param {IReadMessageRequest=} [properties] Properties to set
     */
    function ReadMessageRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReadMessageRequest conversationId.
     * @member {string} conversationId
     * @memberof ReadMessageRequest
     * @instance
     */
    ReadMessageRequest.prototype.conversationId = "";

    /**
     * ReadMessageRequest messageId.
     * @member {string|null|undefined} messageId
     * @memberof ReadMessageRequest
     * @instance
     */
    ReadMessageRequest.prototype.messageId = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(ReadMessageRequest.prototype, "_messageId", {
        get: $util.oneOfGetter($oneOfFields = ["messageId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ReadMessageRequest instance using the specified properties.
     * @function create
     * @memberof ReadMessageRequest
     * @static
     * @param {IReadMessageRequest=} [properties] Properties to set
     * @returns {ReadMessageRequest} ReadMessageRequest instance
     */
    ReadMessageRequest.create = function create(properties) {
        return new ReadMessageRequest(properties);
    };

    /**
     * Encodes the specified ReadMessageRequest message. Does not implicitly {@link ReadMessageRequest.verify|verify} messages.
     * @function encode
     * @memberof ReadMessageRequest
     * @static
     * @param {IReadMessageRequest} message ReadMessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadMessageRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversationId);
        if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.messageId);
        return writer;
    };

    /**
     * Encodes the specified ReadMessageRequest message, length delimited. Does not implicitly {@link ReadMessageRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReadMessageRequest
     * @static
     * @param {IReadMessageRequest} message ReadMessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadMessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReadMessageRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ReadMessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReadMessageRequest} ReadMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadMessageRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReadMessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.conversationId = reader.string();
                    break;
                }
            case 2: {
                    message.messageId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReadMessageRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReadMessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReadMessageRequest} ReadMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadMessageRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReadMessageRequest message.
     * @function verify
     * @memberof ReadMessageRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReadMessageRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            if (!$util.isString(message.conversationId))
                return "conversationId: string expected";
        if (message.messageId != null && message.hasOwnProperty("messageId")) {
            properties._messageId = 1;
            if (!$util.isString(message.messageId))
                return "messageId: string expected";
        }
        return null;
    };

    /**
     * Creates a ReadMessageRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReadMessageRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReadMessageRequest} ReadMessageRequest
     */
    ReadMessageRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ReadMessageRequest)
            return object;
        var message = new $root.ReadMessageRequest();
        if (object.conversationId != null)
            message.conversationId = String(object.conversationId);
        if (object.messageId != null)
            message.messageId = String(object.messageId);
        return message;
    };

    /**
     * Creates a plain object from a ReadMessageRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReadMessageRequest
     * @static
     * @param {ReadMessageRequest} message ReadMessageRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReadMessageRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.conversationId = "";
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            object.conversationId = message.conversationId;
        if (message.messageId != null && message.hasOwnProperty("messageId")) {
            object.messageId = message.messageId;
            if (options.oneofs)
                object._messageId = "messageId";
        }
        return object;
    };

    /**
     * Converts this ReadMessageRequest to JSON.
     * @function toJSON
     * @memberof ReadMessageRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReadMessageRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ReadMessageRequest
     * @function getTypeUrl
     * @memberof ReadMessageRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReadMessageRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReadMessageRequest";
    };

    return ReadMessageRequest;
})();

$root.ReadMessageResponse = (function() {

    /**
     * Properties of a ReadMessageResponse.
     * @exports IReadMessageResponse
     * @interface IReadMessageResponse
     * @property {string|null} [conversationId] ReadMessageResponse conversationId
     * @property {string|null} [messageId] ReadMessageResponse messageId
     * @property {number|null} [unreadCount] ReadMessageResponse unreadCount
     */

    /**
     * Constructs a new ReadMessageResponse.
     * @exports ReadMessageResponse
     * @classdesc Represents a ReadMessageResponse.
     * @implements IReadMessageResponse
     * @constructor
     * @param {IReadMessageResponse=} [properties] Properties to set
     */
    function ReadMessageResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReadMessageResponse conversationId.
     * @member {string} conversationId
     * @memberof ReadMessageResponse
     * @instance
     */
    ReadMessageResponse.prototype.conversationId = "";

    /**
     * ReadMessageResponse messageId.
     * @member {string|null|undefined} messageId
     * @memberof ReadMessageResponse
     * @instance
     */
    ReadMessageResponse.prototype.messageId = null;

    /**
     * ReadMessageResponse unreadCount.
     * @member {number} unreadCount
     * @memberof ReadMessageResponse
     * @instance
     */
    ReadMessageResponse.prototype.unreadCount = 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(ReadMessageResponse.prototype, "_messageId", {
        get: $util.oneOfGetter($oneOfFields = ["messageId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ReadMessageResponse instance using the specified properties.
     * @function create
     * @memberof ReadMessageResponse
     * @static
     * @param {IReadMessageResponse=} [properties] Properties to set
     * @returns {ReadMessageResponse} ReadMessageResponse instance
     */
    ReadMessageResponse.create = function create(properties) {
        return new ReadMessageResponse(properties);
    };

    /**
     * Encodes the specified ReadMessageResponse message. Does not implicitly {@link ReadMessageResponse.verify|verify} messages.
     * @function encode
     * @memberof ReadMessageResponse
     * @static
     * @param {IReadMessageResponse} message ReadMessageResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadMessageResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversationId);
        if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.messageId);
        if (message.unreadCount != null && Object.hasOwnProperty.call(message, "unreadCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.unreadCount);
        return writer;
    };

    /**
     * Encodes the specified ReadMessageResponse message, length delimited. Does not implicitly {@link ReadMessageResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReadMessageResponse
     * @static
     * @param {IReadMessageResponse} message ReadMessageResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadMessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReadMessageResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ReadMessageResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReadMessageResponse} ReadMessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadMessageResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReadMessageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.conversationId = reader.string();
                    break;
                }
            case 2: {
                    message.messageId = reader.string();
                    break;
                }
            case 3: {
                    message.unreadCount = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReadMessageResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReadMessageResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReadMessageResponse} ReadMessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadMessageResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReadMessageResponse message.
     * @function verify
     * @memberof ReadMessageResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReadMessageResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            if (!$util.isString(message.conversationId))
                return "conversationId: string expected";
        if (message.messageId != null && message.hasOwnProperty("messageId")) {
            properties._messageId = 1;
            if (!$util.isString(message.messageId))
                return "messageId: string expected";
        }
        if (message.unreadCount != null && message.hasOwnProperty("unreadCount"))
            if (!$util.isInteger(message.unreadCount))
                return "unreadCount: integer expected";
        return null;
    };

    /**
     * Creates a ReadMessageResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReadMessageResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReadMessageResponse} ReadMessageResponse
     */
    ReadMessageResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ReadMessageResponse)
            return object;
        var message = new $root.ReadMessageResponse();
        if (object.conversationId != null)
            message.conversationId = String(object.conversationId);
        if (object.messageId != null)
            message.messageId = String(object.messageId);
        if (object.unreadCount != null)
            message.unreadCount = object.unreadCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReadMessageResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReadMessageResponse
     * @static
     * @param {ReadMessageResponse} message ReadMessageResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReadMessageResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.conversationId = "";
            object.unreadCount = 0;
        }
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            object.conversationId = message.conversationId;
        if (message.messageId != null && message.hasOwnProperty("messageId")) {
            object.messageId = message.messageId;
            if (options.oneofs)
                object._messageId = "messageId";
        }
        if (message.unreadCount != null && message.hasOwnProperty("unreadCount"))
            object.unreadCount = message.unreadCount;
        return object;
    };

    /**
     * Converts this ReadMessageResponse to JSON.
     * @function toJSON
     * @memberof ReadMessageResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReadMessageResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ReadMessageResponse
     * @function getTypeUrl
     * @memberof ReadMessageResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReadMessageResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReadMessageResponse";
    };

    return ReadMessageResponse;
})();

$root.SendFileUploadComplete = (function() {

    /**
     * Properties of a SendFileUploadComplete.
     * @exports ISendFileUploadComplete
     * @interface ISendFileUploadComplete
     * @property {string|null} [uploadId] SendFileUploadComplete uploadId
     * @property {string|null} [fileId] SendFileUploadComplete fileId
     */

    /**
     * Constructs a new SendFileUploadComplete.
     * @exports SendFileUploadComplete
     * @classdesc Represents a SendFileUploadComplete.
     * @implements ISendFileUploadComplete
     * @constructor
     * @param {ISendFileUploadComplete=} [properties] Properties to set
     */
    function SendFileUploadComplete(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendFileUploadComplete uploadId.
     * @member {string} uploadId
     * @memberof SendFileUploadComplete
     * @instance
     */
    SendFileUploadComplete.prototype.uploadId = "";

    /**
     * SendFileUploadComplete fileId.
     * @member {string} fileId
     * @memberof SendFileUploadComplete
     * @instance
     */
    SendFileUploadComplete.prototype.fileId = "";

    /**
     * Creates a new SendFileUploadComplete instance using the specified properties.
     * @function create
     * @memberof SendFileUploadComplete
     * @static
     * @param {ISendFileUploadComplete=} [properties] Properties to set
     * @returns {SendFileUploadComplete} SendFileUploadComplete instance
     */
    SendFileUploadComplete.create = function create(properties) {
        return new SendFileUploadComplete(properties);
    };

    /**
     * Encodes the specified SendFileUploadComplete message. Does not implicitly {@link SendFileUploadComplete.verify|verify} messages.
     * @function encode
     * @memberof SendFileUploadComplete
     * @static
     * @param {ISendFileUploadComplete} message SendFileUploadComplete message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendFileUploadComplete.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uploadId != null && Object.hasOwnProperty.call(message, "uploadId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uploadId);
        if (message.fileId != null && Object.hasOwnProperty.call(message, "fileId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.fileId);
        return writer;
    };

    /**
     * Encodes the specified SendFileUploadComplete message, length delimited. Does not implicitly {@link SendFileUploadComplete.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendFileUploadComplete
     * @static
     * @param {ISendFileUploadComplete} message SendFileUploadComplete message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendFileUploadComplete.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendFileUploadComplete message from the specified reader or buffer.
     * @function decode
     * @memberof SendFileUploadComplete
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendFileUploadComplete} SendFileUploadComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendFileUploadComplete.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendFileUploadComplete();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.uploadId = reader.string();
                    break;
                }
            case 2: {
                    message.fileId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SendFileUploadComplete message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendFileUploadComplete
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendFileUploadComplete} SendFileUploadComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendFileUploadComplete.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendFileUploadComplete message.
     * @function verify
     * @memberof SendFileUploadComplete
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendFileUploadComplete.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uploadId != null && message.hasOwnProperty("uploadId"))
            if (!$util.isString(message.uploadId))
                return "uploadId: string expected";
        if (message.fileId != null && message.hasOwnProperty("fileId"))
            if (!$util.isString(message.fileId))
                return "fileId: string expected";
        return null;
    };

    /**
     * Creates a SendFileUploadComplete message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendFileUploadComplete
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendFileUploadComplete} SendFileUploadComplete
     */
    SendFileUploadComplete.fromObject = function fromObject(object) {
        if (object instanceof $root.SendFileUploadComplete)
            return object;
        var message = new $root.SendFileUploadComplete();
        if (object.uploadId != null)
            message.uploadId = String(object.uploadId);
        if (object.fileId != null)
            message.fileId = String(object.fileId);
        return message;
    };

    /**
     * Creates a plain object from a SendFileUploadComplete message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendFileUploadComplete
     * @static
     * @param {SendFileUploadComplete} message SendFileUploadComplete
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendFileUploadComplete.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uploadId = "";
            object.fileId = "";
        }
        if (message.uploadId != null && message.hasOwnProperty("uploadId"))
            object.uploadId = message.uploadId;
        if (message.fileId != null && message.hasOwnProperty("fileId"))
            object.fileId = message.fileId;
        return object;
    };

    /**
     * Converts this SendFileUploadComplete to JSON.
     * @function toJSON
     * @memberof SendFileUploadComplete
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendFileUploadComplete.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SendFileUploadComplete
     * @function getTypeUrl
     * @memberof SendFileUploadComplete
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SendFileUploadComplete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SendFileUploadComplete";
    };

    return SendFileUploadComplete;
})();

$root.NewUpdateMessage = (function() {

    /**
     * Properties of a NewUpdateMessage.
     * @exports INewUpdateMessage
     * @interface INewUpdateMessage
     * @property {Array.<IMessageInfo>|null} [messages] NewUpdateMessage messages
     * @property {Array.<IUserInfo>|null} [users] NewUpdateMessage users
     * @property {Array.<IConversationInfo>|null} [conversations] NewUpdateMessage conversations
     */

    /**
     * Constructs a new NewUpdateMessage.
     * @exports NewUpdateMessage
     * @classdesc Represents a NewUpdateMessage.
     * @implements INewUpdateMessage
     * @constructor
     * @param {INewUpdateMessage=} [properties] Properties to set
     */
    function NewUpdateMessage(properties) {
        this.messages = [];
        this.users = [];
        this.conversations = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NewUpdateMessage messages.
     * @member {Array.<IMessageInfo>} messages
     * @memberof NewUpdateMessage
     * @instance
     */
    NewUpdateMessage.prototype.messages = $util.emptyArray;

    /**
     * NewUpdateMessage users.
     * @member {Array.<IUserInfo>} users
     * @memberof NewUpdateMessage
     * @instance
     */
    NewUpdateMessage.prototype.users = $util.emptyArray;

    /**
     * NewUpdateMessage conversations.
     * @member {Array.<IConversationInfo>} conversations
     * @memberof NewUpdateMessage
     * @instance
     */
    NewUpdateMessage.prototype.conversations = $util.emptyArray;

    /**
     * Creates a new NewUpdateMessage instance using the specified properties.
     * @function create
     * @memberof NewUpdateMessage
     * @static
     * @param {INewUpdateMessage=} [properties] Properties to set
     * @returns {NewUpdateMessage} NewUpdateMessage instance
     */
    NewUpdateMessage.create = function create(properties) {
        return new NewUpdateMessage(properties);
    };

    /**
     * Encodes the specified NewUpdateMessage message. Does not implicitly {@link NewUpdateMessage.verify|verify} messages.
     * @function encode
     * @memberof NewUpdateMessage
     * @static
     * @param {INewUpdateMessage} message NewUpdateMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewUpdateMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messages != null && message.messages.length)
            for (var i = 0; i < message.messages.length; ++i)
                $root.MessageInfo.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.users != null && message.users.length)
            for (var i = 0; i < message.users.length; ++i)
                $root.UserInfo.encode(message.users[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.conversations != null && message.conversations.length)
            for (var i = 0; i < message.conversations.length; ++i)
                $root.ConversationInfo.encode(message.conversations[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified NewUpdateMessage message, length delimited. Does not implicitly {@link NewUpdateMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NewUpdateMessage
     * @static
     * @param {INewUpdateMessage} message NewUpdateMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewUpdateMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NewUpdateMessage message from the specified reader or buffer.
     * @function decode
     * @memberof NewUpdateMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NewUpdateMessage} NewUpdateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewUpdateMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewUpdateMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.MessageInfo.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.UserInfo.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    if (!(message.conversations && message.conversations.length))
                        message.conversations = [];
                    message.conversations.push($root.ConversationInfo.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NewUpdateMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NewUpdateMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NewUpdateMessage} NewUpdateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewUpdateMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NewUpdateMessage message.
     * @function verify
     * @memberof NewUpdateMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NewUpdateMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messages != null && message.hasOwnProperty("messages")) {
            if (!Array.isArray(message.messages))
                return "messages: array expected";
            for (var i = 0; i < message.messages.length; ++i) {
                var error = $root.MessageInfo.verify(message.messages[i]);
                if (error)
                    return "messages." + error;
            }
        }
        if (message.users != null && message.hasOwnProperty("users")) {
            if (!Array.isArray(message.users))
                return "users: array expected";
            for (var i = 0; i < message.users.length; ++i) {
                var error = $root.UserInfo.verify(message.users[i]);
                if (error)
                    return "users." + error;
            }
        }
        if (message.conversations != null && message.hasOwnProperty("conversations")) {
            if (!Array.isArray(message.conversations))
                return "conversations: array expected";
            for (var i = 0; i < message.conversations.length; ++i) {
                var error = $root.ConversationInfo.verify(message.conversations[i]);
                if (error)
                    return "conversations." + error;
            }
        }
        return null;
    };

    /**
     * Creates a NewUpdateMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NewUpdateMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NewUpdateMessage} NewUpdateMessage
     */
    NewUpdateMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.NewUpdateMessage)
            return object;
        var message = new $root.NewUpdateMessage();
        if (object.messages) {
            if (!Array.isArray(object.messages))
                throw TypeError(".NewUpdateMessage.messages: array expected");
            message.messages = [];
            for (var i = 0; i < object.messages.length; ++i) {
                if (typeof object.messages[i] !== "object")
                    throw TypeError(".NewUpdateMessage.messages: object expected");
                message.messages[i] = $root.MessageInfo.fromObject(object.messages[i]);
            }
        }
        if (object.users) {
            if (!Array.isArray(object.users))
                throw TypeError(".NewUpdateMessage.users: array expected");
            message.users = [];
            for (var i = 0; i < object.users.length; ++i) {
                if (typeof object.users[i] !== "object")
                    throw TypeError(".NewUpdateMessage.users: object expected");
                message.users[i] = $root.UserInfo.fromObject(object.users[i]);
            }
        }
        if (object.conversations) {
            if (!Array.isArray(object.conversations))
                throw TypeError(".NewUpdateMessage.conversations: array expected");
            message.conversations = [];
            for (var i = 0; i < object.conversations.length; ++i) {
                if (typeof object.conversations[i] !== "object")
                    throw TypeError(".NewUpdateMessage.conversations: object expected");
                message.conversations[i] = $root.ConversationInfo.fromObject(object.conversations[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a NewUpdateMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NewUpdateMessage
     * @static
     * @param {NewUpdateMessage} message NewUpdateMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NewUpdateMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.messages = [];
            object.users = [];
            object.conversations = [];
        }
        if (message.messages && message.messages.length) {
            object.messages = [];
            for (var j = 0; j < message.messages.length; ++j)
                object.messages[j] = $root.MessageInfo.toObject(message.messages[j], options);
        }
        if (message.users && message.users.length) {
            object.users = [];
            for (var j = 0; j < message.users.length; ++j)
                object.users[j] = $root.UserInfo.toObject(message.users[j], options);
        }
        if (message.conversations && message.conversations.length) {
            object.conversations = [];
            for (var j = 0; j < message.conversations.length; ++j)
                object.conversations[j] = $root.ConversationInfo.toObject(message.conversations[j], options);
        }
        return object;
    };

    /**
     * Converts this NewUpdateMessage to JSON.
     * @function toJSON
     * @memberof NewUpdateMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NewUpdateMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NewUpdateMessage
     * @function getTypeUrl
     * @memberof NewUpdateMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NewUpdateMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NewUpdateMessage";
    };

    return NewUpdateMessage;
})();

$root.Common = (function() {

    /**
     * Namespace Common.
     * @exports Common
     * @namespace
     */
    var Common = {};

    Common.PaginationRequest = (function() {

        /**
         * Properties of a PaginationRequest.
         * @memberof Common
         * @interface IPaginationRequest
         * @property {number|null} [page] PaginationRequest page
         * @property {number|null} [pageSize] PaginationRequest pageSize
         */

        /**
         * Constructs a new PaginationRequest.
         * @memberof Common
         * @classdesc Represents a PaginationRequest.
         * @implements IPaginationRequest
         * @constructor
         * @param {Common.IPaginationRequest=} [properties] Properties to set
         */
        function PaginationRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PaginationRequest page.
         * @member {number} page
         * @memberof Common.PaginationRequest
         * @instance
         */
        PaginationRequest.prototype.page = 0;

        /**
         * PaginationRequest pageSize.
         * @member {number} pageSize
         * @memberof Common.PaginationRequest
         * @instance
         */
        PaginationRequest.prototype.pageSize = 0;

        /**
         * Creates a new PaginationRequest instance using the specified properties.
         * @function create
         * @memberof Common.PaginationRequest
         * @static
         * @param {Common.IPaginationRequest=} [properties] Properties to set
         * @returns {Common.PaginationRequest} PaginationRequest instance
         */
        PaginationRequest.create = function create(properties) {
            return new PaginationRequest(properties);
        };

        /**
         * Encodes the specified PaginationRequest message. Does not implicitly {@link Common.PaginationRequest.verify|verify} messages.
         * @function encode
         * @memberof Common.PaginationRequest
         * @static
         * @param {Common.IPaginationRequest} message PaginationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaginationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
            return writer;
        };

        /**
         * Encodes the specified PaginationRequest message, length delimited. Does not implicitly {@link Common.PaginationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.PaginationRequest
         * @static
         * @param {Common.IPaginationRequest} message PaginationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaginationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PaginationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof Common.PaginationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.PaginationRequest} PaginationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaginationRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.PaginationRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int32();
                        break;
                    }
                case 2: {
                        message.pageSize = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PaginationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.PaginationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.PaginationRequest} PaginationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaginationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PaginationRequest message.
         * @function verify
         * @memberof Common.PaginationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PaginationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            return null;
        };

        /**
         * Creates a PaginationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Common.PaginationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Common.PaginationRequest} PaginationRequest
         */
        PaginationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.Common.PaginationRequest)
                return object;
            var message = new $root.Common.PaginationRequest();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            return message;
        };

        /**
         * Creates a plain object from a PaginationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Common.PaginationRequest
         * @static
         * @param {Common.PaginationRequest} message PaginationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PaginationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.pageSize = 0;
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            return object;
        };

        /**
         * Converts this PaginationRequest to JSON.
         * @function toJSON
         * @memberof Common.PaginationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PaginationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PaginationRequest
         * @function getTypeUrl
         * @memberof Common.PaginationRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PaginationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Common.PaginationRequest";
        };

        return PaginationRequest;
    })();

    Common.PaginationResponse = (function() {

        /**
         * Properties of a PaginationResponse.
         * @memberof Common
         * @interface IPaginationResponse
         * @property {number|null} [total] PaginationResponse total
         * @property {number|null} [page] PaginationResponse page
         * @property {number|null} [pageSize] PaginationResponse pageSize
         * @property {number|null} [totalPage] PaginationResponse totalPage
         */

        /**
         * Constructs a new PaginationResponse.
         * @memberof Common
         * @classdesc Represents a PaginationResponse.
         * @implements IPaginationResponse
         * @constructor
         * @param {Common.IPaginationResponse=} [properties] Properties to set
         */
        function PaginationResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PaginationResponse total.
         * @member {number} total
         * @memberof Common.PaginationResponse
         * @instance
         */
        PaginationResponse.prototype.total = 0;

        /**
         * PaginationResponse page.
         * @member {number} page
         * @memberof Common.PaginationResponse
         * @instance
         */
        PaginationResponse.prototype.page = 0;

        /**
         * PaginationResponse pageSize.
         * @member {number} pageSize
         * @memberof Common.PaginationResponse
         * @instance
         */
        PaginationResponse.prototype.pageSize = 0;

        /**
         * PaginationResponse totalPage.
         * @member {number} totalPage
         * @memberof Common.PaginationResponse
         * @instance
         */
        PaginationResponse.prototype.totalPage = 0;

        /**
         * Creates a new PaginationResponse instance using the specified properties.
         * @function create
         * @memberof Common.PaginationResponse
         * @static
         * @param {Common.IPaginationResponse=} [properties] Properties to set
         * @returns {Common.PaginationResponse} PaginationResponse instance
         */
        PaginationResponse.create = function create(properties) {
            return new PaginationResponse(properties);
        };

        /**
         * Encodes the specified PaginationResponse message. Does not implicitly {@link Common.PaginationResponse.verify|verify} messages.
         * @function encode
         * @memberof Common.PaginationResponse
         * @static
         * @param {Common.IPaginationResponse} message PaginationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaginationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.total);
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageSize);
            if (message.totalPage != null && Object.hasOwnProperty.call(message, "totalPage"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalPage);
            return writer;
        };

        /**
         * Encodes the specified PaginationResponse message, length delimited. Does not implicitly {@link Common.PaginationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.PaginationResponse
         * @static
         * @param {Common.IPaginationResponse} message PaginationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaginationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PaginationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Common.PaginationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.PaginationResponse} PaginationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaginationResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.PaginationResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.total = reader.int32();
                        break;
                    }
                case 2: {
                        message.page = reader.int32();
                        break;
                    }
                case 3: {
                        message.pageSize = reader.int32();
                        break;
                    }
                case 4: {
                        message.totalPage = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PaginationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.PaginationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.PaginationResponse} PaginationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaginationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PaginationResponse message.
         * @function verify
         * @memberof Common.PaginationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PaginationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.totalPage != null && message.hasOwnProperty("totalPage"))
                if (!$util.isInteger(message.totalPage))
                    return "totalPage: integer expected";
            return null;
        };

        /**
         * Creates a PaginationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Common.PaginationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Common.PaginationResponse} PaginationResponse
         */
        PaginationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Common.PaginationResponse)
                return object;
            var message = new $root.Common.PaginationResponse();
            if (object.total != null)
                message.total = object.total | 0;
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.totalPage != null)
                message.totalPage = object.totalPage | 0;
            return message;
        };

        /**
         * Creates a plain object from a PaginationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Common.PaginationResponse
         * @static
         * @param {Common.PaginationResponse} message PaginationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PaginationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.total = 0;
                object.page = 0;
                object.pageSize = 0;
                object.totalPage = 0;
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.totalPage != null && message.hasOwnProperty("totalPage"))
                object.totalPage = message.totalPage;
            return object;
        };

        /**
         * Converts this PaginationResponse to JSON.
         * @function toJSON
         * @memberof Common.PaginationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PaginationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PaginationResponse
         * @function getTypeUrl
         * @memberof Common.PaginationResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PaginationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Common.PaginationResponse";
        };

        return PaginationResponse;
    })();

    return Common;
})();

$root.UserInfo = (function() {

    /**
     * Properties of a UserInfo.
     * @exports IUserInfo
     * @interface IUserInfo
     * @property {string|null} [id] UserInfo id
     * @property {string|null} [email] UserInfo email
     * @property {string|null} [nickname] UserInfo nickname
     * @property {string|null} [avatarUrl] UserInfo avatarUrl
     * @property {number|null} [state] UserInfo state
     * @property {number|Long|null} [updateTime] UserInfo updateTime
     */

    /**
     * Constructs a new UserInfo.
     * @exports UserInfo
     * @classdesc Represents a UserInfo.
     * @implements IUserInfo
     * @constructor
     * @param {IUserInfo=} [properties] Properties to set
     */
    function UserInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserInfo id.
     * @member {string} id
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.id = "";

    /**
     * UserInfo email.
     * @member {string} email
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.email = "";

    /**
     * UserInfo nickname.
     * @member {string|null|undefined} nickname
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.nickname = null;

    /**
     * UserInfo avatarUrl.
     * @member {string|null|undefined} avatarUrl
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.avatarUrl = null;

    /**
     * UserInfo state.
     * @member {number} state
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.state = 0;

    /**
     * UserInfo updateTime.
     * @member {number|Long} updateTime
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(UserInfo.prototype, "_nickname", {
        get: $util.oneOfGetter($oneOfFields = ["nickname"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(UserInfo.prototype, "_avatarUrl", {
        get: $util.oneOfGetter($oneOfFields = ["avatarUrl"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new UserInfo instance using the specified properties.
     * @function create
     * @memberof UserInfo
     * @static
     * @param {IUserInfo=} [properties] Properties to set
     * @returns {UserInfo} UserInfo instance
     */
    UserInfo.create = function create(properties) {
        return new UserInfo(properties);
    };

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @function encode
     * @memberof UserInfo
     * @static
     * @param {IUserInfo} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
        if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
        if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatarUrl);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
        if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.updateTime);
        return writer;
    };

    /**
     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserInfo
     * @static
     * @param {IUserInfo} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof UserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.email = reader.string();
                    break;
                }
            case 3: {
                    message.nickname = reader.string();
                    break;
                }
            case 4: {
                    message.avatarUrl = reader.string();
                    break;
                }
            case 5: {
                    message.state = reader.int32();
                    break;
                }
            case 6: {
                    message.updateTime = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserInfo message.
     * @function verify
     * @memberof UserInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.nickname != null && message.hasOwnProperty("nickname")) {
            properties._nickname = 1;
            if (!$util.isString(message.nickname))
                return "nickname: string expected";
        }
        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl")) {
            properties._avatarUrl = 1;
            if (!$util.isString(message.avatarUrl))
                return "avatarUrl: string expected";
        }
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        if (message.updateTime != null && message.hasOwnProperty("updateTime"))
            if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                return "updateTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserInfo} UserInfo
     */
    UserInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.UserInfo)
            return object;
        var message = new $root.UserInfo();
        if (object.id != null)
            message.id = String(object.id);
        if (object.email != null)
            message.email = String(object.email);
        if (object.nickname != null)
            message.nickname = String(object.nickname);
        if (object.avatarUrl != null)
            message.avatarUrl = String(object.avatarUrl);
        if (object.state != null)
            message.state = object.state | 0;
        if (object.updateTime != null)
            if ($util.Long)
                (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
            else if (typeof object.updateTime === "string")
                message.updateTime = parseInt(object.updateTime, 10);
            else if (typeof object.updateTime === "number")
                message.updateTime = object.updateTime;
            else if (typeof object.updateTime === "object")
                message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserInfo
     * @static
     * @param {UserInfo} message UserInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.email = "";
            object.state = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.updateTime = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.nickname != null && message.hasOwnProperty("nickname")) {
            object.nickname = message.nickname;
            if (options.oneofs)
                object._nickname = "nickname";
        }
        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl")) {
            object.avatarUrl = message.avatarUrl;
            if (options.oneofs)
                object._avatarUrl = "avatarUrl";
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        if (message.updateTime != null && message.hasOwnProperty("updateTime"))
            if (typeof message.updateTime === "number")
                object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
            else
                object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
        return object;
    };

    /**
     * Converts this UserInfo to JSON.
     * @function toJSON
     * @memberof UserInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UserInfo
     * @function getTypeUrl
     * @memberof UserInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UserInfo";
    };

    return UserInfo;
})();

$root.GetUserList = (function() {

    /**
     * Properties of a GetUserList.
     * @exports IGetUserList
     * @interface IGetUserList
     * @property {Common.IPaginationRequest|null} [pagination] GetUserList pagination
     * @property {string|null} [word] GetUserList word
     */

    /**
     * Constructs a new GetUserList.
     * @exports GetUserList
     * @classdesc Represents a GetUserList.
     * @implements IGetUserList
     * @constructor
     * @param {IGetUserList=} [properties] Properties to set
     */
    function GetUserList(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetUserList pagination.
     * @member {Common.IPaginationRequest|null|undefined} pagination
     * @memberof GetUserList
     * @instance
     */
    GetUserList.prototype.pagination = null;

    /**
     * GetUserList word.
     * @member {string} word
     * @memberof GetUserList
     * @instance
     */
    GetUserList.prototype.word = "";

    /**
     * Creates a new GetUserList instance using the specified properties.
     * @function create
     * @memberof GetUserList
     * @static
     * @param {IGetUserList=} [properties] Properties to set
     * @returns {GetUserList} GetUserList instance
     */
    GetUserList.create = function create(properties) {
        return new GetUserList(properties);
    };

    /**
     * Encodes the specified GetUserList message. Does not implicitly {@link GetUserList.verify|verify} messages.
     * @function encode
     * @memberof GetUserList
     * @static
     * @param {IGetUserList} message GetUserList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUserList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
            $root.Common.PaginationRequest.encode(message.pagination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.word != null && Object.hasOwnProperty.call(message, "word"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.word);
        return writer;
    };

    /**
     * Encodes the specified GetUserList message, length delimited. Does not implicitly {@link GetUserList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetUserList
     * @static
     * @param {IGetUserList} message GetUserList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUserList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetUserList message from the specified reader or buffer.
     * @function decode
     * @memberof GetUserList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetUserList} GetUserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUserList.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetUserList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.pagination = $root.Common.PaginationRequest.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.word = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetUserList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetUserList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetUserList} GetUserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUserList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetUserList message.
     * @function verify
     * @memberof GetUserList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetUserList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pagination != null && message.hasOwnProperty("pagination")) {
            var error = $root.Common.PaginationRequest.verify(message.pagination);
            if (error)
                return "pagination." + error;
        }
        if (message.word != null && message.hasOwnProperty("word"))
            if (!$util.isString(message.word))
                return "word: string expected";
        return null;
    };

    /**
     * Creates a GetUserList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetUserList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetUserList} GetUserList
     */
    GetUserList.fromObject = function fromObject(object) {
        if (object instanceof $root.GetUserList)
            return object;
        var message = new $root.GetUserList();
        if (object.pagination != null) {
            if (typeof object.pagination !== "object")
                throw TypeError(".GetUserList.pagination: object expected");
            message.pagination = $root.Common.PaginationRequest.fromObject(object.pagination);
        }
        if (object.word != null)
            message.word = String(object.word);
        return message;
    };

    /**
     * Creates a plain object from a GetUserList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetUserList
     * @static
     * @param {GetUserList} message GetUserList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetUserList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.pagination = null;
            object.word = "";
        }
        if (message.pagination != null && message.hasOwnProperty("pagination"))
            object.pagination = $root.Common.PaginationRequest.toObject(message.pagination, options);
        if (message.word != null && message.hasOwnProperty("word"))
            object.word = message.word;
        return object;
    };

    /**
     * Converts this GetUserList to JSON.
     * @function toJSON
     * @memberof GetUserList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetUserList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetUserList
     * @function getTypeUrl
     * @memberof GetUserList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetUserList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetUserList";
    };

    return GetUserList;
})();

$root.GetUserListResponse = (function() {

    /**
     * Properties of a GetUserListResponse.
     * @exports IGetUserListResponse
     * @interface IGetUserListResponse
     * @property {Common.IPaginationResponse|null} [pagination] GetUserListResponse pagination
     * @property {Array.<IUserInfo>|null} [list] GetUserListResponse list
     */

    /**
     * Constructs a new GetUserListResponse.
     * @exports GetUserListResponse
     * @classdesc Represents a GetUserListResponse.
     * @implements IGetUserListResponse
     * @constructor
     * @param {IGetUserListResponse=} [properties] Properties to set
     */
    function GetUserListResponse(properties) {
        this.list = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetUserListResponse pagination.
     * @member {Common.IPaginationResponse|null|undefined} pagination
     * @memberof GetUserListResponse
     * @instance
     */
    GetUserListResponse.prototype.pagination = null;

    /**
     * GetUserListResponse list.
     * @member {Array.<IUserInfo>} list
     * @memberof GetUserListResponse
     * @instance
     */
    GetUserListResponse.prototype.list = $util.emptyArray;

    /**
     * Creates a new GetUserListResponse instance using the specified properties.
     * @function create
     * @memberof GetUserListResponse
     * @static
     * @param {IGetUserListResponse=} [properties] Properties to set
     * @returns {GetUserListResponse} GetUserListResponse instance
     */
    GetUserListResponse.create = function create(properties) {
        return new GetUserListResponse(properties);
    };

    /**
     * Encodes the specified GetUserListResponse message. Does not implicitly {@link GetUserListResponse.verify|verify} messages.
     * @function encode
     * @memberof GetUserListResponse
     * @static
     * @param {IGetUserListResponse} message GetUserListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUserListResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
            $root.Common.PaginationResponse.encode(message.pagination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.list != null && message.list.length)
            for (var i = 0; i < message.list.length; ++i)
                $root.UserInfo.encode(message.list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetUserListResponse message, length delimited. Does not implicitly {@link GetUserListResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetUserListResponse
     * @static
     * @param {IGetUserListResponse} message GetUserListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUserListResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetUserListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GetUserListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetUserListResponse} GetUserListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUserListResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetUserListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.pagination = $root.Common.PaginationResponse.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.UserInfo.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetUserListResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetUserListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetUserListResponse} GetUserListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUserListResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetUserListResponse message.
     * @function verify
     * @memberof GetUserListResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetUserListResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pagination != null && message.hasOwnProperty("pagination")) {
            var error = $root.Common.PaginationResponse.verify(message.pagination);
            if (error)
                return "pagination." + error;
        }
        if (message.list != null && message.hasOwnProperty("list")) {
            if (!Array.isArray(message.list))
                return "list: array expected";
            for (var i = 0; i < message.list.length; ++i) {
                var error = $root.UserInfo.verify(message.list[i]);
                if (error)
                    return "list." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetUserListResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetUserListResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetUserListResponse} GetUserListResponse
     */
    GetUserListResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GetUserListResponse)
            return object;
        var message = new $root.GetUserListResponse();
        if (object.pagination != null) {
            if (typeof object.pagination !== "object")
                throw TypeError(".GetUserListResponse.pagination: object expected");
            message.pagination = $root.Common.PaginationResponse.fromObject(object.pagination);
        }
        if (object.list) {
            if (!Array.isArray(object.list))
                throw TypeError(".GetUserListResponse.list: array expected");
            message.list = [];
            for (var i = 0; i < object.list.length; ++i) {
                if (typeof object.list[i] !== "object")
                    throw TypeError(".GetUserListResponse.list: object expected");
                message.list[i] = $root.UserInfo.fromObject(object.list[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetUserListResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetUserListResponse
     * @static
     * @param {GetUserListResponse} message GetUserListResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetUserListResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.list = [];
        if (options.defaults)
            object.pagination = null;
        if (message.pagination != null && message.hasOwnProperty("pagination"))
            object.pagination = $root.Common.PaginationResponse.toObject(message.pagination, options);
        if (message.list && message.list.length) {
            object.list = [];
            for (var j = 0; j < message.list.length; ++j)
                object.list[j] = $root.UserInfo.toObject(message.list[j], options);
        }
        return object;
    };

    /**
     * Converts this GetUserListResponse to JSON.
     * @function toJSON
     * @memberof GetUserListResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetUserListResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetUserListResponse
     * @function getTypeUrl
     * @memberof GetUserListResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetUserListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetUserListResponse";
    };

    return GetUserListResponse;
})();

$root.Command = (function() {

    /**
     * Properties of a Command.
     * @exports ICommand
     * @interface ICommand
     * @property {string|null} [event] Command event
     * @property {string|null} [userId] Command userId
     * @property {string|null} [client] Command client
     * @property {string|null} [requestId] Command requestId
     * @property {Array.<Uint8Array>|null} [payload] Command payload
     */

    /**
     * Constructs a new Command.
     * @exports Command
     * @classdesc Represents a Command.
     * @implements ICommand
     * @constructor
     * @param {ICommand=} [properties] Properties to set
     */
    function Command(properties) {
        this.payload = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Command event.
     * @member {string} event
     * @memberof Command
     * @instance
     */
    Command.prototype.event = "";

    /**
     * Command userId.
     * @member {string} userId
     * @memberof Command
     * @instance
     */
    Command.prototype.userId = "";

    /**
     * Command client.
     * @member {string} client
     * @memberof Command
     * @instance
     */
    Command.prototype.client = "";

    /**
     * Command requestId.
     * @member {string} requestId
     * @memberof Command
     * @instance
     */
    Command.prototype.requestId = "";

    /**
     * Command payload.
     * @member {Array.<Uint8Array>} payload
     * @memberof Command
     * @instance
     */
    Command.prototype.payload = $util.emptyArray;

    /**
     * Creates a new Command instance using the specified properties.
     * @function create
     * @memberof Command
     * @static
     * @param {ICommand=} [properties] Properties to set
     * @returns {Command} Command instance
     */
    Command.create = function create(properties) {
        return new Command(properties);
    };

    /**
     * Encodes the specified Command message. Does not implicitly {@link Command.verify|verify} messages.
     * @function encode
     * @memberof Command
     * @static
     * @param {ICommand} message Command message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Command.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.event != null && Object.hasOwnProperty.call(message, "event"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.event);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
        if (message.client != null && Object.hasOwnProperty.call(message, "client"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.client);
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.requestId);
        if (message.payload != null && message.payload.length)
            for (var i = 0; i < message.payload.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.payload[i]);
        return writer;
    };

    /**
     * Encodes the specified Command message, length delimited. Does not implicitly {@link Command.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Command
     * @static
     * @param {ICommand} message Command message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Command.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Command message from the specified reader or buffer.
     * @function decode
     * @memberof Command
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Command} Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Command.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Command();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.event = reader.string();
                    break;
                }
            case 2: {
                    message.userId = reader.string();
                    break;
                }
            case 3: {
                    message.client = reader.string();
                    break;
                }
            case 4: {
                    message.requestId = reader.string();
                    break;
                }
            case 5: {
                    if (!(message.payload && message.payload.length))
                        message.payload = [];
                    message.payload.push(reader.bytes());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Command message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Command
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Command} Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Command.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Command message.
     * @function verify
     * @memberof Command
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Command.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.event != null && message.hasOwnProperty("event"))
            if (!$util.isString(message.event))
                return "event: string expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.client != null && message.hasOwnProperty("client"))
            if (!$util.isString(message.client))
                return "client: string expected";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isString(message.requestId))
                return "requestId: string expected";
        if (message.payload != null && message.hasOwnProperty("payload")) {
            if (!Array.isArray(message.payload))
                return "payload: array expected";
            for (var i = 0; i < message.payload.length; ++i)
                if (!(message.payload[i] && typeof message.payload[i].length === "number" || $util.isString(message.payload[i])))
                    return "payload: buffer[] expected";
        }
        return null;
    };

    /**
     * Creates a Command message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Command
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Command} Command
     */
    Command.fromObject = function fromObject(object) {
        if (object instanceof $root.Command)
            return object;
        var message = new $root.Command();
        if (object.event != null)
            message.event = String(object.event);
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.client != null)
            message.client = String(object.client);
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.payload) {
            if (!Array.isArray(object.payload))
                throw TypeError(".Command.payload: array expected");
            message.payload = [];
            for (var i = 0; i < object.payload.length; ++i)
                if (typeof object.payload[i] === "string")
                    $util.base64.decode(object.payload[i], message.payload[i] = $util.newBuffer($util.base64.length(object.payload[i])), 0);
                else if (object.payload[i].length >= 0)
                    message.payload[i] = object.payload[i];
        }
        return message;
    };

    /**
     * Creates a plain object from a Command message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Command
     * @static
     * @param {Command} message Command
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Command.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.payload = [];
        if (options.defaults) {
            object.event = "";
            object.userId = "";
            object.client = "";
            object.requestId = "";
        }
        if (message.event != null && message.hasOwnProperty("event"))
            object.event = message.event;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.client != null && message.hasOwnProperty("client"))
            object.client = message.client;
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.payload && message.payload.length) {
            object.payload = [];
            for (var j = 0; j < message.payload.length; ++j)
                object.payload[j] = options.bytes === String ? $util.base64.encode(message.payload[j], 0, message.payload[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.payload[j]) : message.payload[j];
        }
        return object;
    };

    /**
     * Converts this Command to JSON.
     * @function toJSON
     * @memberof Command
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Command.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Command
     * @function getTypeUrl
     * @memberof Command
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Command.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Command";
    };

    return Command;
})();

$root.ErrorResult = (function() {

    /**
     * Properties of an ErrorResult.
     * @exports IErrorResult
     * @interface IErrorResult
     * @property {number|null} [errorCode] ErrorResult errorCode
     * @property {string|null} [errorMessage] ErrorResult errorMessage
     * @property {string|null} [timestamp] ErrorResult timestamp
     */

    /**
     * Constructs a new ErrorResult.
     * @exports ErrorResult
     * @classdesc Represents an ErrorResult.
     * @implements IErrorResult
     * @constructor
     * @param {IErrorResult=} [properties] Properties to set
     */
    function ErrorResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ErrorResult errorCode.
     * @member {number} errorCode
     * @memberof ErrorResult
     * @instance
     */
    ErrorResult.prototype.errorCode = 0;

    /**
     * ErrorResult errorMessage.
     * @member {string} errorMessage
     * @memberof ErrorResult
     * @instance
     */
    ErrorResult.prototype.errorMessage = "";

    /**
     * ErrorResult timestamp.
     * @member {string} timestamp
     * @memberof ErrorResult
     * @instance
     */
    ErrorResult.prototype.timestamp = "";

    /**
     * Creates a new ErrorResult instance using the specified properties.
     * @function create
     * @memberof ErrorResult
     * @static
     * @param {IErrorResult=} [properties] Properties to set
     * @returns {ErrorResult} ErrorResult instance
     */
    ErrorResult.create = function create(properties) {
        return new ErrorResult(properties);
    };

    /**
     * Encodes the specified ErrorResult message. Does not implicitly {@link ErrorResult.verify|verify} messages.
     * @function encode
     * @memberof ErrorResult
     * @static
     * @param {IErrorResult} message ErrorResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ErrorResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
        if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified ErrorResult message, length delimited. Does not implicitly {@link ErrorResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ErrorResult
     * @static
     * @param {IErrorResult} message ErrorResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ErrorResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ErrorResult message from the specified reader or buffer.
     * @function decode
     * @memberof ErrorResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ErrorResult} ErrorResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ErrorResult.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ErrorResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.errorCode = reader.int32();
                    break;
                }
            case 2: {
                    message.errorMessage = reader.string();
                    break;
                }
            case 3: {
                    message.timestamp = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ErrorResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ErrorResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ErrorResult} ErrorResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ErrorResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ErrorResult message.
     * @function verify
     * @memberof ErrorResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ErrorResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (!$util.isInteger(message.errorCode))
                return "errorCode: integer expected";
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
            if (!$util.isString(message.errorMessage))
                return "errorMessage: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isString(message.timestamp))
                return "timestamp: string expected";
        return null;
    };

    /**
     * Creates an ErrorResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ErrorResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ErrorResult} ErrorResult
     */
    ErrorResult.fromObject = function fromObject(object) {
        if (object instanceof $root.ErrorResult)
            return object;
        var message = new $root.ErrorResult();
        if (object.errorCode != null)
            message.errorCode = object.errorCode | 0;
        if (object.errorMessage != null)
            message.errorMessage = String(object.errorMessage);
        if (object.timestamp != null)
            message.timestamp = String(object.timestamp);
        return message;
    };

    /**
     * Creates a plain object from an ErrorResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ErrorResult
     * @static
     * @param {ErrorResult} message ErrorResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ErrorResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.errorCode = 0;
            object.errorMessage = "";
            object.timestamp = "";
        }
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            object.errorCode = message.errorCode;
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
            object.errorMessage = message.errorMessage;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        return object;
    };

    /**
     * Converts this ErrorResult to JSON.
     * @function toJSON
     * @memberof ErrorResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ErrorResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ErrorResult
     * @function getTypeUrl
     * @memberof ErrorResult
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ErrorResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ErrorResult";
    };

    return ErrorResult;
})();

module.exports = $root;
