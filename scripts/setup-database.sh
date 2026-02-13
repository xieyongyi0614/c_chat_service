#!/bin/bash

# 数据库初始化脚本
# 使用方法: bash scripts/setup-database.sh

echo "🚀 开始设置数据库..."

# 检查 .env 文件是否存在
if [ ! -f .env ]; then
  echo "⚠️  .env 文件不存在，正在从 .env.example 创建..."
  if [ -f .env.example ]; then
    cp .env.example .env
    echo "✅ 已创建 .env 文件，请编辑其中的数据库配置"
    echo "📝 请确保已创建数据库并配置正确的连接信息"
    read -p "按 Enter 键继续..."
  else
    echo "❌ .env.example 文件不存在，请手动创建 .env 文件"
    exit 1
  fi
fi

# 检查 DATABASE_URL 是否配置
if ! grep -q "DATABASE_URL" .env || grep -q "DATABASE_URL=\"\"" .env; then
  echo "⚠️  请先在 .env 文件中配置 DATABASE_URL"
  echo "   格式: DATABASE_URL=\"mysql://用户名:密码@主机:端口/数据库名\""
  exit 1
fi

echo "📦 生成 Prisma Client..."
pnpm prisma:generate

echo "🔄 创建数据库迁移..."
pnpm prisma:migrate

echo "✅ 数据库设置完成！"
echo ""
echo "📊 可以使用以下命令查看数据库:"
echo "   pnpm prisma:studio"
