# 快速设置指南

## 第一步：创建环境变量文件

在项目根目录创建 `.env` 文件（或 `.env.development`），内容如下：

```env
# 数据库配置（用于 Prisma 迁移）
DATABASE_URL="mysql://root:password@localhost:3306/c_chat_service"

# 数据库配置（用于 PrismaService）
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=password
DATABASE_NAME=c_chat_service

# JWT 配置
JWT_SECRET=your-secret-key-change-this-in-production
JWT_EXPIRES_IN=7d

# 应用配置
PORT=3001
NODE_ENV=development
```

**重要提示**：

- 替换 `root`、`password`、`localhost`、`3306` 和 `c_chat_service` 为你的实际数据库配置
- 确保数据库已创建（如果不存在，需要先创建数据库）

### 创建数据库（MySQL/MariaDB）

```sql
CREATE DATABASE c_chat_service CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## 第二步：初始化数据库

### Windows (PowerShell)

```powershell
.\scripts\setup-database.ps1
```

### Linux/Mac

```bash
bash scripts/setup-database.sh
```

### 或手动执行

```bash
# 1. 生成 Prisma Client
pnpm prisma:generate

# 2. 创建并应用迁移
pnpm prisma:migrate
```

## 第三步：启动应用

```bash
pnpm start:dev
```

应用将在 `http://localhost:3001` 启动。

## 验证设置

### 1. 检查数据库迁移状态

```bash
npx prisma migrate status
```

### 2. 打开 Prisma Studio 查看数据库

```bash
pnpm prisma:studio
```

访问 http://localhost:5555 查看数据库内容。

### 3. 测试 API

#### 注册用户

```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "username": "测试用户",
    "password": "password123"
  }'
```

#### 登录

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## 常见问题

### 问题 1: 数据库连接失败

**错误**: `Can't reach database server`

**解决**:

1. 检查数据库服务是否运行
2. 检查 `.env` 文件中的 `DATABASE_URL` 是否正确
3. 确保数据库已创建

### 问题 2: 迁移失败

**解决**:

```bash
# 重置数据库（⚠️ 会删除所有数据）
pnpm prisma:migrate:reset

# 然后重新迁移
pnpm prisma:migrate
```

### 问题 3: Prisma Client 未生成

**解决**:

```bash
pnpm prisma:generate
```

## 下一步

- 查看 [README_DATABASE.md](./README_DATABASE.md) 了解详细的数据库设置
- 查看 [src/auth/API_USAGE.md](./src/auth/API_USAGE.md) 了解 API 使用
- 查看 [src/chat/README.md](./src/chat/README.md) 了解 Socket.IO 聊天服务
