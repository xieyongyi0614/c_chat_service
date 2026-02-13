# 数据库设置指南

## 前置要求

1. 确保已安装 MySQL/MariaDB 数据库
2. 确保已创建数据库（如果使用环境变量中的 `DATABASE_NAME`）

## 环境变量配置

在项目根目录创建 `.env` 或 `.env.development` 文件，配置以下环境变量：

```env
# 数据库配置（用于 Prisma 迁移）
DATABASE_URL="mysql://用户名:密码@主机:端口/数据库名"

# 或者使用分离的配置（用于 PrismaService）
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=your_password
DATABASE_NAME=c_chat_service

# JWT 配置
JWT_SECRET=your-secret-key-change-this-in-production
JWT_EXPIRES_IN=7d

# 应用配置
PORT=3001
NODE_ENV=development
```

### DATABASE_URL 格式说明

```
mysql://[用户名]:[密码]@[主机]:[端口]/[数据库名]?[参数]
```

示例：

```
mysql://root:password123@localhost:3306/c_chat_service
```

## 数据库迁移步骤

### 重要提示

Prisma 7.0 使用 `prisma.config.ts` 来配置数据库连接 URL，而不是在 `schema.prisma` 中。

确保 `prisma.config.ts` 中已配置 `DATABASE_URL` 环境变量。

### 1. 配置环境变量

在 `.env` 或 `.env.development` 文件中设置：

```env
DATABASE_URL="mysql://用户名:密码@主机:端口/数据库名"
```

例如：

```env
DATABASE_URL="mysql://root:password123@localhost:3306/c_chat_service"
```

### 2. 创建初始迁移

```bash
pnpm prisma:migrate
```

这会：

- 创建 `prisma/migrations` 目录
- 生成初始迁移文件
- 应用迁移到数据库
- 自动生成 Prisma Client

### 3. 手动生成 Prisma Client（如果需要）

```bash
pnpm prisma:generate
# 或
pnpm db:generate
```

### 3. 应用迁移（生产环境）

```bash
pnpm prisma:migrate:deploy
```

### 4. 重置数据库（开发环境，会删除所有数据）

```bash
pnpm prisma:migrate:reset
```

## 快速开始（推荐）

### 方式一：使用迁移（推荐用于生产环境）

```bash
# 1. 确保环境变量已配置
# 2. 生成迁移并应用
pnpm prisma:migrate

# 3. 生成 Prisma Client
pnpm prisma:generate
```

### 方式二：直接推送 Schema（仅用于开发环境）

```bash
# 直接同步 Schema 到数据库（不创建迁移文件）
pnpm prisma:push
```

⚠️ **注意**: `prisma db push` 不会创建迁移文件，仅用于快速原型开发。

## 常用命令

### 查看数据库（Prisma Studio）

```bash
pnpm prisma:studio
```

这会打开一个 Web 界面，可以在浏览器中查看和编辑数据库数据。

### 创建新的迁移

```bash
# 修改 schema.prisma 后
pnpm db:migrate add_migration_name
```

### 查看迁移状态

```bash
npx prisma migrate status
```

## 故障排除

### 问题 1: 迁移失败 - 数据库连接错误

**解决方案**:

1. 检查 `DATABASE_URL` 是否正确
2. 确保数据库服务正在运行
3. 确保数据库已创建
4. 检查用户名和密码是否正确

### 问题 2: 迁移失败 - 表已存在

**解决方案**:

```bash
# 如果数据库已有表结构，可以重置迁移
pnpm prisma:migrate:reset
```

⚠️ **警告**: 这会删除所有数据！

### 问题 3: Prisma Client 未生成

**解决方案**:

```bash
pnpm prisma:generate
```

### 问题 4: 迁移文件冲突

**解决方案**:

1. 检查 `prisma/migrations` 目录
2. 如果有冲突，可以手动解决或重置迁移

## 数据库模型说明

当前 Schema 包含以下模型：

1. **User** - 用户表
2. **MessageHistory** - 消息历史表
3. **ChatRoom** - 聊天室表
4. **ChatRoomParticipant** - 聊天室参与者表
5. **Friend** - 好友关系表
6. **FriendApply** - 好友申请表

## 下一步

迁移完成后：

1. 启动应用: `pnpm start:dev`
2. 测试注册接口: `POST /api/auth/register`
3. 测试登录接口: `POST /api/auth/login`
4. 使用 Token 连接 Socket.IO 聊天服务

## 参考文档

- [Prisma 迁移文档](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Prisma Schema 参考](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
