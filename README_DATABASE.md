# 数据库初始化指南

## 快速开始

### 1. 创建环境变量文件

复制示例文件并配置数据库连接：

```bash
# Windows (PowerShell)
Copy-Item .env.example .env

# Linux/Mac
cp .env.example .env
```

### 2. 编辑 .env 文件

打开 `.env` 文件，配置数据库连接信息：

```env
DATABASE_URL="mysql://root:password@localhost:3306/c_chat_service"
```

**重要**: 
- 确保数据库已创建（如果不存在，需要先创建数据库）
- 替换 `root`、`password`、`localhost`、`3306` 和 `c_chat_service` 为你的实际配置

### 3. 运行数据库初始化

#### Windows (PowerShell)
```powershell
.\scripts\setup-database.ps1
```

#### Linux/Mac
```bash
bash scripts/setup-database.sh
```

#### 或手动执行
```bash
# 生成 Prisma Client
pnpm prisma:generate

# 创建并应用迁移
pnpm prisma:migrate
```

## 详细步骤

### 方式一：使用迁移（推荐）

```bash
# 1. 确保 .env 文件已配置 DATABASE_URL
# 2. 创建初始迁移
pnpm prisma:migrate

# 这会：
# - 创建 prisma/migrations 目录
# - 生成迁移文件
# - 应用迁移到数据库
# - 自动生成 Prisma Client
```

### 方式二：直接推送 Schema（仅开发环境）

```bash
# 直接同步 Schema 到数据库（不创建迁移文件）
pnpm prisma:push

# 然后生成 Prisma Client
pnpm prisma:generate
```

⚠️ **注意**: `prisma db push` 不会创建迁移文件，仅用于快速原型开发。

## 常见问题

### 问题 1: 数据库连接失败

**错误信息**: `Can't reach database server`

**解决方案**:
1. 检查数据库服务是否运行
2. 检查 `.env` 文件中的 `DATABASE_URL` 是否正确
3. 确保数据库已创建（MySQL/MariaDB）

**创建数据库示例**:
```sql
CREATE DATABASE c_chat_service CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 问题 2: 迁移失败 - 表已存在

**解决方案**:

```bash
# 重置数据库（⚠️ 会删除所有数据）
pnpm prisma:migrate:reset

# 或手动删除表后重新迁移
```

### 问题 3: Prisma Client 未生成

**解决方案**:

```bash
pnpm prisma:generate
```

### 问题 4: 环境变量未加载

**解决方案**:

确保 `.env` 文件在项目根目录，并且包含 `DATABASE_URL`。

## 验证数据库设置

### 1. 检查迁移状态

```bash
npx prisma migrate status
```

### 2. 打开 Prisma Studio 查看数据库

```bash
pnpm prisma:studio
```

这会打开一个 Web 界面 (http://localhost:5555)，可以在浏览器中查看和编辑数据。

### 3. 测试应用启动

```bash
pnpm start:dev
```

如果应用正常启动，说明数据库连接成功。

## 数据库模型

当前 Schema 包含以下表：

1. **User** - 用户表
2. **MessageHistory** - 消息历史表
3. **ChatRoom** - 聊天室表
4. **ChatRoomParticipant** - 聊天室参与者表
5. **Friend** - 好友关系表
6. **FriendApply** - 好友申请表

## 常用命令

```bash
# 生成 Prisma Client
pnpm prisma:generate

# 创建新迁移
pnpm db:migrate migration_name

# 应用迁移（生产环境）
pnpm prisma:migrate:deploy

# 重置数据库（开发环境，会删除所有数据）
pnpm prisma:migrate:reset

# 查看数据库
pnpm prisma:studio

# 直接推送 Schema（开发环境）
pnpm prisma:push
```

## 下一步

数据库设置完成后：

1. ✅ 启动应用: `pnpm start:dev`
2. ✅ 测试注册: `POST /api/auth/register`
3. ✅ 测试登录: `POST /api/auth/login`
4. ✅ 使用 Token 连接 Socket.IO 聊天服务

## 参考文档

- [Prisma 迁移文档](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Prisma Schema 参考](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
