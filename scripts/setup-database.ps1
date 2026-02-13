# 数据库初始化脚本 (PowerShell)
# 使用方法: .\scripts\setup-database.ps1

Write-Host "🚀 开始设置数据库..." -ForegroundColor Cyan

# 检查 .env 文件是否存在
if (-not (Test-Path .env)) {
    Write-Host "⚠️  .env 文件不存在，正在从 .env.example 创建..." -ForegroundColor Yellow
    if (Test-Path .env.example) {
        Copy-Item .env.example .env
        Write-Host "✅ 已创建 .env 文件，请编辑其中的数据库配置" -ForegroundColor Green
        Write-Host "📝 请确保已创建数据库并配置正确的连接信息" -ForegroundColor Yellow
        Read-Host "按 Enter 键继续"
    } else {
        Write-Host "❌ .env.example 文件不存在，请手动创建 .env 文件" -ForegroundColor Red
        exit 1
    }
}

# 检查 DATABASE_URL 是否配置
$envContent = Get-Content .env -Raw
if (-not $envContent -or $envContent -notmatch 'DATABASE_URL\s*=\s*"[^"]+"') {
    Write-Host "⚠️  请先在 .env 文件中配置 DATABASE_URL" -ForegroundColor Yellow
    Write-Host "   格式: DATABASE_URL=`"mysql://用户名:密码@主机:端口/数据库名`"" -ForegroundColor Yellow
    exit 1
}

Write-Host "📦 生成 Prisma Client..." -ForegroundColor Cyan
pnpm prisma:generate

Write-Host "🔄 创建数据库迁移..." -ForegroundColor Cyan
pnpm prisma:migrate

Write-Host "✅ 数据库设置完成！" -ForegroundColor Green
Write-Host ""
Write-Host "📊 可以使用以下命令查看数据库:" -ForegroundColor Cyan
Write-Host "   pnpm prisma:studio" -ForegroundColor White
