# c_chat_service — AI Context

## 项目定位

NestJS 后端服务，提供 IM 系统的 **REST API + WebSocket 实时通信**。
使用 Prisma + MySQL，JWT 鉴权，Protobuf 作为消息协议。

---

## 核心架构

### 技术栈

- NestJS 11（模块化架构）
- Prisma + MySQL
- Socket.IO（WebSocket）
- Protobuf（消息编码）
- JWT（认证）

---

## 模块结构（关键）

```id="yo1y5g"
AppModule
  ├── ConfigModule（全局配置）
  ├── CoreModule（Prisma / 全局拦截器 / 过滤器）
  ├── CommonModule（上下文 / 日志）
  ├── AuthModule（JWT 认证）
  ├── ChatModule（WebSocket 核心）
  └── AdminModule（REST：用户 / 上传）
```

---

## 请求流程

### HTTP

```id="7r48f0"
Middleware → Guard → Controller → Service → Prisma → Interceptor → Response
```

### WebSocket

```id="0r0lp8"
Client → Gateway → Protobuf decode → Handler → Service → DB → emit
```

---

## Chat（核心模块）

### 职责

- WebSocket 连接管理
- 消息分发（Command + Protobuf）
- 会话 / 消息处理

### 核心流程（发送消息）

```id="6f1xkm"
Client → sendMessage
  → ACK
  → 创建/查找会话
  → 写入 Message_history
  → 更新 Conversation
  → 广播消息
```

---

## 关键设计

### 1️⃣ Protobuf 消息模型

```id="n6k9m6"
Command {
  event
  payload
}
```

所有 WS 消息统一入口 → `dispatch`

---

### 2️⃣ 会话模型

- Conversation（会话）
- Message_history（消息）
- Conversation_participant（参与者）
- Conversation_sequence（消息序号）

👉 msgId 在会话内递增（保证顺序）

---

### 3️⃣ 消息可靠性

- clientMsgId 去重
- ACK 确认机制
- 事务写入（Prisma）

---

### 4️⃣ 多设备支持

```id="7hck9h"
userSockets: userId → Set<socketId>
```

同一用户多连接 → 全部广播

---

### 5️⃣ 本地优化

- lastMsgContent 冗余字段（会话列表）
- 批量查询用户（避免 N+1）

---

## Upload（上传系统）

支持：

- 单文件 / 批量
- 分片上传
- SHA-256 去重
- 图片压缩（sharp）

限制：

- 单文件 ≤ 200MB
- 分片 ≤ 10MB

---

## Auth（认证）

- JWT（HTTP + WS）
- HTTP：Authorization header
- WS：handshake.auth.token

---

## Config（类型安全）

- registerAs + ConfigType
- Joi 校验（启动时）
- 按模块拆分（redis / jwt / upload / db）

---

## 数据库核心关系

```id="7jptfj"
User → Message
User → Conversation_participant
Conversation → Message_history
Conversation → Sequence
File → Message
```

---

## 重要约定

- WebSocket 必须使用 Protobuf
- 所有消息走 Command 分发
- msgId 保证会话内有序
- 禁止跨层调用（必须走 Service）
- 上传必须走 hash 去重

---

## 当前重点

- 分片上传优化
- 消息可靠性（ACK / 重试）
- 会话未读数同步

---
