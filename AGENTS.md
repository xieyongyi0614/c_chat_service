# c_chat_service 项目说明

## 项目定位

`c_chat_service` 是 Corner Chat 即时通讯应用的**后端服务仓库**。基于 **NestJS** 框架，提供 RESTful API 与 WebSocket 实时通信服务，使用 **Prisma ORM** 连接 **MySQL** 数据库，采用 **JWT** 进行身份认证。

- 仓库地址：`https://github.com/xieyongyi0614/c_chat_service`
- 前端仓库：`c_chat`（Electron + React 桌面客户端）
- 运行时：Node.js，pnpm
- 框架版本：NestJS 11

---

## 目录结构

```
c_chat_service/
├── src/
│   ├── main.ts              # 应用入口
│   ├── app/                 # 根模块（全局配置、拦截器、过滤器注册）
│   ├── auth/                # 认证模块（JWT 策略、Guard、DTO、控制器、服务）
│   ├── api/
│   │   ├── chat/            # 聊天模块（WebSocket 网关、消息处理、会话服务）
│   │   └── web/             # Web/管理模块
│   │       ├── users/       # 用户管理 REST 接口
│   │       └── upload/      # 文件上传 REST 接口
│   ├── common/              # 全局公共模块（请求上下文、日志服务、中间件）
│   ├── core/                # 核心模块（Prisma 数据库、异常过滤器、响应拦截器）
│   ├── config/              # 配置服务模块
│   ├── constants/           # 常量定义（错误码、分页默认值）
│   ├── types/               # 类型定义（API 类型、Socket 类型、用户类型）
│   ├── utils/               # 工具函数（分页转换、HTTP 工具、Protobuf 转换）
│   └── proto/               # Protobuf 定义与生成代码（与前端共享协议）
├── prisma/
│   └── schema.prisma        # 数据库模型定义（7 个表）
├── uploads/                 # 文件上传存储目录
├── generated/               # Prisma Client 生成代码
├── docs/                    # 文档图片
├── test/                    # 测试文件
└── scripts/                 # 脚本
```

---

## 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 框架 | NestJS 11 | 企业级 Node.js 服务端框架 |
| 语言 | TypeScript 5.7 | 类型安全 |
| 数据库 | MySQL 8.0 | 关系型数据库 |
| ORM | Prisma 7 | 数据库建模、迁移、类型生成 |
| 数据库驱动 | @prisma/adapter-mariadb | MariaDB/MySQL 直连适配器 |
| 实时通信 | Socket.IO 4.x (@nestjs/platform-socket.io) | WebSocket 网关 |
| 消息编码 | Protobuf (protobufjs) | 二进制消息编解码 |
| 认证 | @nestjs/jwt + passport-jwt + bcryptjs | JWT 认证方案 |
| 请求校验 | class-validator + class-transformer | DTO 自动校验 |
| API 文档 | @nestjs/swagger | Swagger 自动文档 |
| 图片处理 | sharp | 上传图片压缩与缩略图 |
| 文件上传 | Multer（内置）| multipart/form-data 解析 |
| 请求追踪 | AsyncLocalStorage | 异步上下文传递 |
| 测试 | Jest + Supertest | 单元测试与 E2E 测试 |

---

## 架构概览

### 请求处理流程

```
HTTP 请求
  │
  ▼
RequestContextMiddleware   ← 生成/提取 requestId，记录 IP/UA
  │
  ▼
Guard (JwtAuthGuard)       ← 验证 JWT token
  │
  ▼
Controller                  ← 路由处理
  │
  ▼
Service                     ← 业务逻辑
  │
  ▼
PrismaService               ← 数据库操作
  │
  ▼
ResponseInterceptor         ← 统一响应格式包装
  │
  ▼
HTTP 响应

─────────────────────────────

WebSocket 消息
  │
  ▼
ChatGateway.handleConnection()  ← JWT 认证 + 加入会话房间
  │
  ▼
handleProtobufMessage()         ← 解码 Command 消息
  │
  ▼
MessageHandler.dispatch()       ← 按事件类型路由到具体 Handler
  │
  ▼
Service (ChatService/MessageService/UsersService)
  │
  ▼
PrismaService                   ← 数据库操作
  │
  ▼
MessageHandler.sendMessageToClient()  ← Protobuf 编码 + emit
  │
  ▼
Socket.IO 消息
```

### 模块依赖图

```
AppModule (根模块)
  ├── ConfigModule         (全局，环境变量)
  ├── CoreModule           (全局，PrismaService)
  ├── CommonModule         (全局，RequestContextService + ContextLoggerService)
  ├── AuthModule           (JWT 认证，Passport 策略)
  ├── ChatModule           (WebSocket 网关，消息/会话服务)
  │     └── 依赖 AuthModule (WsJwtAuthGuard)
  └── AdminModule          (REST API：用户管理 + 文件上传)
        └── 依赖 AuthModule (JwtAuthGuard)
```

---

## 模块详解

### 1. app — 根模块

**文件**：`src/app/app.module.ts`

负责组装所有子模块，注册全局提供者：
- `ResponseInterceptor`（`APP_INTERCEPTOR`）：将所有成功响应包装为 `{ code, message, data, timestamp, requestId }` 格式
- `HttpExceptionFilter`（`APP_FILTER`）：捕获所有异常，返回统一的错误 JSON 格式
- `RequestContextMiddleware`（全局中间件）：为每个请求创建异步上下文

**应用入口**（`src/main.ts`）：
- 设置全局 API 前缀 `api`
- 静态资源目录 `uploads`
- Swagger 文档地址 `api/document`
- 全局 `ValidationPipe`
- 默认端口 `3001`

---

### 2. auth — 认证模块

**文件**：`src/auth/`

| 文件 | 说明 |
|------|------|
| `auth.module.ts` | 模块定义，导入 PassportModule + JwtModule，导出 AuthService |
| `auth.controller.ts` | `POST /auth/sign-up`（注册）、`POST /auth/sign-in`（登录） |
| `auth.service.ts` | 注册（邮箱/手机查重、bcrypt 密码哈希）、登录（凭据校验、JWT 签发）、Socket 认证 |
| `jwt.strategy.ts` | Passport JWT 策略，从 Authorization Header 提取 token，校验并加载用户 |
| `guards/jwt-auth.guard.ts` | HTTP 路由 JWT 守卫（继承 AuthGuard） |
| `guards/jwt-auth.guard.ts` | WebSocket JWT 守卫（`WsJwtAuthGuard`，从 `client.handshake.auth` 提取 token） |
| `guards/roles.guard.ts` | 角色权限守卫（读取 `@Roles()` 装饰器的元数据） |
| `decorators/current-user.decorator.ts` | `@CurrentUser()` 参数装饰器，提取 `request.user` |
| `decorators/roles.decorator.ts` | `@Roles(...roles)` 装饰器，设置角色元数据 |
| `dto/auth.dto.ts` | `RegisterDto`（邮箱/用户名/密码/手机/性别）、`LoginDto`、`AuthResponseDto` |

**JWT 认证流程**：
1. 用户通过 `/auth/sign-in` 或 `/auth/sign-up` 获取 `access_token`
2. HTTP 请求：在 `Authorization: Bearer <token>` 头中携带
3. WebSocket 连接：在 `client.handshake.auth.token` 中携带
4. `JwtStrategy` 验证 token 有效性，从数据库加载用户信息，注入 `request.user`
5. `@CurrentUser()` 装饰器可在任何控制器/网关方法中获取当前用户

---

### 3. chat — 聊天模块（WebSocket 实时通信）

**文件**：`src/api/chat/`

这是整个后端的核心模块，处理所有实时聊天业务。

#### 网关层

| 文件 | 说明 |
|------|------|
| `gateways/chat.gateway.ts` | Socket.IO `/chat` 命名空间网关，处理连接/断开/消息路由 |
| `gateways/message.handler.ts` | 消息处理器注册（6 个事件处理函数） |
| `gateways/message-handler.registry.ts` | 抽象基类，Protobuf 消息解码、路由分发、消息发送/广播 |

**ChatGateway 核心逻辑**：

- **连接时**（`handleConnection`）：
  1. WsJwtAuthGuard 认证
  2. 校验用户状态
  3. 推送当前用户信息（`UserInfo`）
  4. 查询用户所有会话 ID
  5. 将用户 Socket 加入所有会话房间（Socket.IO Room）

- **断开时**（`handleDisconnect`）：
  1. 从 `userSockets` 映射中移除
  2. 清理 `roomUsers` 映射

- **消息接收**（`handleProtobufMessage`）：
  1. 解码 `Command` Protobuf 消息
  2. 调用 `dispatch(command, client)` 路由到对应 Handler

**状态管理**：
- `userSockets: Map<userId, Set<socketId>>` — 跟踪用户的所有活跃连接
- `roomUsers: Map<roomId, Set<userId>>` — 跟踪房间中的用户

**已注册的事件处理函数**：

| 客户端事件 | 处理函数 | 说明 |
|------------|----------|------|
| `ping` | `handlePing` | 心跳检测，返回 `pong` |
| `getUserList` | `handleGetUserList` | 分页获取用户列表 |
| `sendMessage` | `handleSendMessage` | 发送消息：ACK 确认→创建/查找会话→写入数据库→广播 |
| `getConversationList` | `handleGetConversationList` | 分页获取会话列表（含未读数、最后消息等） |
| `getMessageHistory` | `handleGetMessageHistory` | 分页获取消息历史 |
| `readMessage` | `handleReadMessage` | 标记会话已读，更新未读数 |

#### 服务层

| 文件 | 说明 |
|------|------|
| `services/chat.service.ts` | 会话管理：创建私聊/群聊会话、获取用户会话列表（含批量用户查询优化） |
| `services/message.service.ts` | 消息管理：消息去重（`clientMsgId`）、序列号生成（`conversation_sequence` 原子递增）、已读标记 |
| `services/chat-room.service.ts` | 已废弃（全部注释），原 ChatRoom 模型已被 Conversation 替代 |

**sendMessage 完整流程**：
1. 客户端发送 `SendMessageRequest`（含 `clientMsgId`）
2. 服务端立即返回 `AckSendMessage`（确认收到）
3. `ChatService.getOrCreatePrivateConversation()` 查找/创建会话
4. `MessageService.sendMessage()` 在事务中：去重→生成 `msgId`→写入 `Message_history`→更新 `Conversation.lastMsgContent`
5. 广播 `MessageInfo` 到会话房间所有在线用户

**私聊会话 ID 生成**：
- `chat.util.ts` 中的 `generatePrivateConversationId(userId1, userId2)` 函数
- 对两个用户 ID 排序后用逗号拼接，取 MD5 哈希，确保同一对用户始终得到相同的会话 ID

---

### 4. web — Web/管理模块（REST API）

**文件**：`src/api/web/`

#### users — 用户管理

| 文件 | 说明 |
|------|------|
| `users.controller.ts` | `GET /api/users/userInfo`（JWT 认证，获取当前用户信息） |
| `users.service.ts` | `list()`（分页搜索）、`getUserById()`、`getMultipleUsers()`（批量获取，避免 N+1） |
| `dto/user.dto.ts` | `UserSearchDto`（分页 + 昵称/邮箱/关键词搜索） |

#### upload — 文件上传

| 文件 | 说明 |
|------|------|
| `upload.controller.ts` | `POST /api/upload/single`（单文件）、`POST /api/upload/batch`（批量，最多 10 个）、`POST /api/upload/chunk`（分片上传） |
| `upload.service.ts` | 文件校验（类型/大小）、SHA-256 去重、sharp 压缩、按日期存储、分片组装 |
| `dto/upload.dto.ts` | `UploadFileDto`、`UploadChunkDto`（含 uploadId/chunkIndex/totalChunks）等 |
| `types/upload.types.ts` | `FileUpload`、`FileUploadResult` 类型 |

**上传限制**：
- 允许类型：图片（jpg/png/gif/webp/svg）、文档（pdf/doc/docx/xls/xlsx/ppt/pptx/txt）、压缩包（zip/rar/7z/gz）、视频（mp4/avi/mov/mkv）、音频（mp3/wav/flac/aac/ogg）
- 单文件最大：200MB
- 分片大小最大：10MB
- 分片文件总大小最大：500MB
- 图片处理：sharp 压缩至 85% 质量

---

### 5. common — 公共模块（全局）

**文件**：`src/common/`

| 文件 | 说明 |
|------|------|
| `services/request-context.service.ts` | 基于 `AsyncLocalStorage` 的异步请求上下文（requestId/userId/userRole/userEmail/IP/UA） |
| `services/context-logger.service.ts` | 上下文感知的日志服务，自动附加 `[ReqID|User|Role|IP]` 前缀 |
| `middleware/request-context.middleware.ts` | 全局中间件，为每个请求创建上下文、记录请求耗时 |
| `dto/requestParams.dto.ts` | `PaginationDto`（page/pageSize，最大 5000）、`RequestListParams`（分页+搜索） |

---

### 6. core — 核心模块（全局）

**文件**：`src/core/`

| 文件 | 说明 |
|------|------|
| `database/prisma/prisma.service.ts` | PrismaClient 封装，通过 `@prisma/adapter-mariadb` 直连 MySQL |
| `database/prisma/prisma.module.ts` | 全局模块，导出 PrismaService |
| `filter/http-exception.filter.ts` | 全局异常过滤器，统一返回 `{ code, message, data, timestamp, requestId }` |
| `interceptor/ResponseInterceptor.ts` | 全局响应拦截器，统一包装成功响应、处理状态码映射 |

---

### 7. config — 配置服务

**文件**：`src/config/`

| 文件 | 说明 |
|------|------|
| `config.module.ts` | 全局模块 |
| `config.service.ts` | `MyConfigService`，封装 NestJS ConfigService，提供类型安全的配置项获取 |

**配置项**：`globalPrefix`、`databaseUrl`、`jwtSecret`、`jwtExpiresIn`、`port`、数据库连接信息、Redis 连接信息、上传基础配置。

---

### 8. proto — Protobuf 协议

**文件**：`src/proto/`

与前端 `c_chat/packages/shared-protobuf` 共享相同的协议定义。

| 文件 | 说明 |
|------|------|
| `static/Command.proto` | 消息信封：`{ event, userId, client, requestId, payload[] }` |
| `static/Common.proto` | 分页请求/响应 |
| `static/User.proto` | `UserInfo`、`GetUserList`、`GetUserListResponse` |
| `static/Chat.proto` | 会话、消息、发送/已读等业务消息 |
| `static/ErrorResult.proto` | 错误格式：`{ errorCode, errorMessage, timestamp }` |
| `protoMap.ts` | 事件与 Protobuf 类的编解码映射表 |

---

## 数据库模型（Prisma Schema）

**文件**：`prisma/schema.prisma`  
**数据库**：MySQL  
**模型数量**：7 个

### User（用户表）

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String (cuid) | 主键 |
| email | String (unique) | 邮箱 |
| password | String | bcrypt 加密密码 |
| phone | String? (unique) | 手机号 |
| nickname | String? | 昵称 |
| avatarUrl | String? | 头像 URL |
| gender | Int | 0=女，1=男，2=其他 |
| state | Int | -1=已删除，0=正常 |
| birthday | DateTime? | 生日 |
| signature | String? | 个性签名 |
| location | String? | 所在地 |
| backgroundWall | String? | 背景墙 |
| updateTime | DateTime | 更新时间（自动） |
| createTime | DateTime | 创建时间（默认 now） |

### Group（群组表）

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String (cuid) | 主键 |
| name | String | 群名称 |
| avatarUrl | String? | 群头像 |
| notice | String? (Text) | 群公告 |
| ownerId | String | 群主 ID（外键→User） |
| state | Int (default 0) | -1=已解散，0=正常 |
| updateTime | DateTime | 更新时间 |
| createTime | DateTime | 创建时间 |

### Group_member（群成员表）

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String (cuid) | 主键 |
| groupId | String | 群 ID |
| userId | String | 用户 ID |
| role | Int (default 2) | 0=群主，1=管理员，2=普通成员 |
| alias | String? | 群内别名 |
| state | Int (default 0) | -1=已退出/被踢，0=正常 |
| updateTime | DateTime | 更新时间 |
| createTime | DateTime | 创建时间 |

唯一约束：`[groupId, userId]`

### Conversation（会话表）

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String (cuid) | 主键 |
| type | Int | 1=私聊，2=群聊 |
| targetId | String? | 私聊=对方用户 ID，群聊=群 ID |
| lastMsgContent | String? (Text) | 最后一条消息内容（冗余，优化列表展示） |
| lastMsgTime | DateTime? | 最后一条消息时间 |
| updateTime | DateTime | 更新时间 |
| createTime | DateTime | 创建时间 |

索引：`[type, targetId]`

### Conversation_sequence（会话序列号表）

| 字段 | 类型 | 说明 |
|------|------|------|
| conversationId | String (PK) | 会话 ID |
| lastMsgId | Int (default 0) | 当前最大消息 ID |

用于原子递增生成每条会话内的消息序列号。

### Conversation_participant（会话参与者表）

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String (cuid) | 主键 |
| conversationId | String | 会话 ID（外键→Conversation） |
| userId | String | 用户 ID（外键→User） |
| isTop | Boolean (default false) | 是否置顶 |
| isDisturb | Boolean (default false) | 免打扰 |
| remark | String? | 个人备注 |
| isDeleted | Boolean (default false) | 软删除 |
| lastReadMessageId | Int (default 0) | 最后已读消息 msgId |
| unreadCount | Int (default 0) | 未读计数 |
| updateTime | DateTime | 更新时间 |
| createTime | DateTime | 创建时间 |

唯一约束：`[conversationId, userId]`

### Message_history（消息历史表）

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String (cuid) | 主键 |
| senderId | String | 发送者 ID（外键→User） |
| conversationId | String | 会话 ID（外键→Conversation） |
| msgId | Int | 会话内消息序号（由 Conversation_sequence 原子递增） |
| clientMsgId | String? | 客户端生成的消息 ID（去重） |
| content | String? (Text) | 消息内容 |
| type | Int | 0=文本，1=图片，2=视频，3=文件，4=音频 |
| state | Int (default 0) | -2=已撤回，-1=已删除，0=正常，1=已编辑 |
| fileId | String? | 关联文件 ID（外键→File） |
| mediaGroupId | String? | 媒体组 ID（同一批发送的图片/文件） |
| createTime | DateTime | 创建时间 |
| updateTime | DateTime | 更新时间 |

唯一约束：`[conversationId, msgId]`、`[conversationId, senderId, clientMsgId]`（去重）  
索引：`[conversationId, msgId DESC]`、`[conversationId, mediaGroupId]`

### File（文件表）

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String (cuid) | 主键 |
| hash | String (unique) | SHA-256 哈希（去重） |
| filename | String | 存储文件名 |
| originalName | String | 原始文件名 |
| mimeType | String | MIME 类型 |
| fileType | Int | 0=图片，1=视频，2=音频，3=文件 |
| size | Int | 文件大小（字节） |
| storagePath | String | 存储路径 |
| url | String | 访问 URL |
| thumbUrl | String? | 缩略图 URL |
| width | Int? | 图片/视频宽度 |
| height | Int? | 图片/视频高度 |
| duration | Int? | 媒体时长 |
| status | Int (default 1) | 0=上传中，1=完成，-1=失败 |
| refCount | Int (default 0) | 引用计数 |
| alt | String? | 替代文本 |
| description | String? | 描述 |
| uploaderId | String | 上传者 ID（外键→User） |
| updateTime | DateTime | 更新时间 |
| createTime | DateTime | 创建时间 |

索引：`[uploaderId]`、`[fileType]`

---

## 数据库表关系图

```
User ──1:N── Message_history     (senderId)
User ──1:N── File                 (uploaderId)
User ──1:N── Conversation_participant (userId)
User ──1:N── Group                (ownerId)
User ──1:N── Group_member         (userId)

Conversation ──1:N── Message_history        (conversationId)
Conversation ──1:N── Conversation_participant (conversationId)
Conversation ──1:1── Conversation_sequence   (conversationId)

Group ──1:N── Group_member (groupId)

File ──1:N── Message_history (fileId)
```

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm install` | 安装依赖 |
| `pnpm run start:dev` | 开发模式热重载启动 |
| `pnpm run start` | 使用 `.env.development` 启动（debug + watch 模式） |
| `pnpm run build` | 构建 NestJS 应用 |
| `pnpm run start:prod` | 生产环境启动（`node dist/main`） |
| `pnpm run prisma:generate` | 生成 Prisma Client |
| `pnpm run prisma:migrate` | 执行本地迁移（开发） |
| `pnpm run prisma:migrate:deploy` | 部署迁移（生产） |
| `pnpm run prisma:studio` | 打开 Prisma Studio 可视化管理 |
| `pnpm run prisma:push` | 直接推送 Schema 到数据库（不生成迁移文件） |
| `pnpm run test` | 运行 Jest 单元测试 |
| `pnpm run test:e2e` | 运行 E2E 测试 |
| `pnpm run lint` | 代码检查 |

---

## 环境变量

**文件**：`.env.development`

主要配置项（通过 `ConfigService` 读取）：

| 变量 | 说明 |
|------|------|
| `PORT` | 服务端口（默认 3001） |
| `NODE_ENV` | 运行环境 |
| `DB_HOST` / `DB_USER` / `DB_PASSWORD` / `DB_NAME` | MySQL 连接信息 |
| `DB_CONNECTION_LIMIT` | 数据库连接池大小 |
| `JWT_SECRET` | JWT 签名密钥 |
| `JWT_EXPIRES_IN` | JWT 过期时间 |
| `ALLOWED_ORIGINS` | CORS 允许的源 |
| `UPLOAD_URL` / `UPLOAD_PATH` | 上传文件 URL 前缀和存储路径 |

---

## API 端点汇总

### 认证（auth）

| 方法 | 路径 | 认证 | 说明 |
|------|------|------|------|
| POST | `/api/auth/sign-up` | 无 | 用户注册 |
| POST | `/api/auth/sign-in` | 无 | 用户登录 |

### 用户（users）

| 方法 | 路径 | 认证 | 说明 |
|------|------|------|------|
| GET | `/api/users/userInfo` | JWT | 获取当前用户信息 |

### 文件上传（upload）

| 方法 | 路径 | 认证 | 说明 |
|------|------|------|------|
| POST | `/api/upload/single` | JWT | 上传单个文件 |
| POST | `/api/upload/batch` | JWT | 批量上传（最多 10 个） |
| POST | `/api/upload/chunk` | JWT | 分片上传 |

### 实时通信（WebSocket）

| 命名空间 | 事件 | 协议 | 说明 |
|----------|------|------|------|
| `/chat` | `message` | Protobuf `Command` | 所有聊天业务消息的统一入口 |
| `/chat` | `ping` | Protobuf | 心跳 |
| `/chat` | `sendMessage` | Protobuf | 发送消息 |
| `/chat` | `getConversationList` | Protobuf | 获取会话列表 |
| `/chat` | `getMessageHistory` | Protobuf | 获取消息历史 |
| `/chat` | `readMessage` | Protobuf | 标记已读 |
| `/chat` | `getUserList` | Protobuf | 获取用户列表 |

---

## 开发注意事项

1. **数据库先决条件**：首次运行前必须执行 `prisma:generate` 和 `prisma:migrate:deploy`，确保 Prisma Client 与数据库结构同步
2. **MySQL 版本**：需要 MySQL 8.0+，使用 MariaDB 适配器直连（不依赖 `mysql2` 包）
3. **Protobuf 同步**：`src/proto/static/*.proto` 需与前端 `c_chat/packages/shared-protobuf/src/static/` 中的定义保持一致，修改后需在两端重新生成代码
4. **文件上传目录**：`uploads/` 目录需确保写权限，文件按日期分目录存储（`{year}/{month}/{day}/{uuid}{ext}`），分片上传临时文件在 `uploads/chunked/{uploadId}/`
5. **WebSocket 命名空间**：聊天网关绑定在 `/chat` 命名空间，客户端连接地址为 `http://localhost:3001/chat`
6. **多设备支持**：`ChatGateway` 中的 `userSockets` 映射支持同一用户多个 Socket 连接（多设备/多窗口），所有连接都会被加入相同的会话房间
7. **消息去重**：依赖 `(conversationId, senderId, clientMsgId)` 唯一约束，事务内先查后插
8. **私聊会话 ID**：由 `generatePrivateConversationId()` 函数通过 MD5 计算，确保两人之间始终只有一个会话
