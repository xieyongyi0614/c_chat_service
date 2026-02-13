# Prisma 数据库配置

## 快速开始

### 1. 配置环境变量

在项目根目录创建 `.env` 或 `.env.development` 文件：

```env
DATABASE_URL="mysql://root:password@localhost:3306/c_chat_service"
```

### 2. 创建数据库迁移

```bash
pnpm prisma:migrate
```

这会自动：
- 创建迁移文件
- 应用迁移到数据库
- 生成 Prisma Client

### 3. 启动应用

```bash
pnpm start:dev
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm prisma:migrate` | 创建并应用迁移 |
| `pnpm prisma:generate` | 生成 Prisma Client |
| `pnpm prisma:studio` | 打开数据库管理界面 |
| `pnpm prisma:push` | 直接同步 Schema（开发用） |
| `pnpm prisma:migrate:reset` | 重置数据库（会删除所有数据） |

## 详细说明

查看 [DATABASE_SETUP.md](./DATABASE_SETUP.md) 获取完整的设置指南。

## 注意事项

1. **Prisma 7.0 配置变更**: 数据库连接 URL 现在在 `prisma.config.ts` 中配置，而不是 `schema.prisma`
2. **环境变量**: 确保 `DATABASE_URL` 已正确配置
3. **数据库**: 确保 MySQL/MariaDB 服务正在运行，且数据库已创建
