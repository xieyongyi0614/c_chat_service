# Core 模块结构

这个目录包含了博客系统的核心业务逻辑，按照功能模块进行组织。

## 目录结构

```
core/
├── article/                    # 文章模块
│   ├── entity/                 # 实体定义
│   │   └── article.entity.ts   # 文章实体和 DTO
│   ├── interfaces/             # 接口定义
│   │   └── article.interface.ts # 文章服务接口
│   ├── article.controller.ts   # 文章控制器
│   └── article.service.ts      # 文章服务
├── category/                   # 分类模块
│   ├── entity/
│   │   └── category.entity.ts
│   ├── interfaces/
│   │   └── category.interface.ts
│   ├── category.controller.ts
│   └── categories.service.ts
├── tag/                        # 标签模块
│   ├── entity/
│   │   └── tag.entity.ts
│   ├── interfaces/
│   │   └── tag.interface.ts
│   ├── tag.controller.ts
│   └── tags.service.ts
├── database/                   # 数据库模块
│   ├── redis/                  # Redis 相关 (待实现)
│   ├── test/                   # 测试相关 (待实现)
│   ├── database.module.ts      # 数据库模块
│   └── database.service.ts     # 数据库服务
└── core.module.ts              # 核心模块入口
```

## 功能特性

### 文章模块 (Article)

- 文章的 CRUD 操作
- 文章发布/取消发布
- 文章搜索和分页
- 文章分类和标签关联
- 文章浏览量统计

### 分类模块 (Category)

- 分类的 CRUD 操作
- 分类下的文章统计
- 分类 slug 唯一性验证

### 标签模块 (Tag)

- 标签的 CRUD 操作
- 标签下的文章统计
- 标签 slug 唯一性验证

### 数据库模块 (Database)

- MySQL 数据库连接管理
- 数据库健康检查
- 原生 SQL 查询支持
- 事务管理

## 使用示例

### 在控制器中使用服务

```typescript
import { Controller, Get, Query } from '@nestjs/common';
import { ArticleService } from '../core/article/article.service';

@Controller('api/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getArticles(@Query() query: ArticleQueryDto) {
    return this.articleService.findAll(query);
  }
}
```

### 数据库连接检查

```typescript
import { DatabaseService } from '../core/database/database.service';

@Injectable()
export class HealthService {
  constructor(private readonly databaseService: DatabaseService) {}

  async checkHealth() {
    const isConnected = await this.databaseService.checkConnection();
    return { database: isConnected ? 'connected' : 'disconnected' };
  }
}
```

## 环境配置

确保在 `.env` 文件中配置正确的数据库连接：

```env
DATABASE_URL="mysql://username:password@localhost:3306/corner_blog"
```

## API 端点

### 文章 API

- `GET /articles` - 获取文章列表
- `GET /articles/:id` - 获取单个文章
- `GET /articles/slug/:slug` - 通过 slug 获取文章
- `POST /articles` - 创建文章
- `PUT /articles/:id` - 更新文章
- `DELETE /articles/:id` - 删除文章
- `PUT /articles/:id/publish` - 发布文章
- `PUT /articles/:id/unpublish` - 取消发布文章

### 分类 API

- `GET /categories` - 获取分类列表
- `GET /categories/:id` - 获取单个分类
- `GET /categories/slug/:slug` - 通过 slug 获取分类
- `POST /categories` - 创建分类
- `PUT /categories/:id` - 更新分类
- `DELETE /categories/:id` - 删除分类

### 标签 API

- `GET /tags` - 获取标签列表
- `GET /tags/:id` - 获取单个标签
- `GET /tags/slug/:slug` - 通过 slug 获取标签
- `POST /tags` - 创建标签
- `PUT /tags/:id` - 更新标签
- `DELETE /tags/:id` - 删除标签
