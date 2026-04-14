# Nest.js 聊天室项目架构与开发规范

## 项目概述

本项目旨在构建一个基于 Nest.js 的实时聊天室，用户可以通过该平台进行消息交流，支持多端接入（包括 Web 和移动设备）。项目采用 Prisma 作为 ORM，Docker 进行容器化，Jest 进行单元测试。

## 目录结构

```plaintext
src
├── api
│   ├── chat  # 业务接口层 /chat socket 接口
├── core                  # 核心模块
│   ├── auth              # 身份验证模块
│   │   ├── auth.service.ts
│   │   ├── auth.controller.ts
│   │   └── auth.module.ts
│   ├── database          # 数据库访问层
│   │   └── prisma        # Prisma 配置与管理
│   │       ├── prisma.service.ts
│   │       └── prisma.module.ts
│   └── common            # 公共工具模块
│       ├── logger.service.ts
│       └── error-handler.middleware.ts
├── config                # 配置文件
│   └── app.config.ts
└── main.ts               # 启动文件
```
