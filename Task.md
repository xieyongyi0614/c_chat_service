好，这次我不给你“片段”，直接给你一套**完整可跑的 TG 模式上传模块（NestJS + Prisma + Bull + Redis）**，而且是**已经按“解耦 UploadSession / File”设计好的版本**，你可以直接接你现在的 IM。

我会按你项目节奏来：**最小可落地 + 可扩展**

---

# 🧱 一、最终 Prisma（确认版 ✅）

```prisma
model UploadSession {
  id            String   @id @default(cuid())
  fileName      String
  fileHash      String
  fileSize      BigInt
  chunkSize     Int
  totalChunks   Int
  uploadedCount Int      @default(0)

  status        Int      // 0 waiting / 1 uploading / 2 merging / 3 success / -1 fail

  uploaderId    String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model UploadChunk {
  id         String  @id @default(cuid())
  uploadId   String
  chunkIndex Int
  chunkHash  String?

  createdAt  DateTime @default(now())

  @@unique([uploadId, chunkIndex])
}

model File {
  id          String   @id @default(cuid())
  fileName    String
  fileHash    String   @unique
  size        BigInt
  url         String

  uploaderId  String
  createdAt   DateTime @default(now())
}
```

---

# 📁 二、目录结构（直接照建）

```bash
src/modules/upload/
  upload.module.ts
  upload.controller.ts
  upload.service.ts

  services/
    session.service.ts
    chunk.service.ts
    merge.service.ts

  queue/
    upload.processor.ts
```

---

# ⚙️ 三、UploadModule

```ts
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'upload',
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService, SessionService, ChunkService, MergeService, UploadProcessor],
})
export class UploadModule {}
```

---

# 🚀 四、Controller（标准 TG API）

```ts
@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Post('init')
  init(@Body() dto: InitUploadDto, @CurrentUser('id') userId: string) {
    return this.uploadService.init(dto, userId);
  }

  @Post('chunk')
  @UseInterceptors(FileInterceptor('chunk'))
  uploadChunk(@UploadedFile() file: Express.Multer.File, @Body() dto: UploadChunkDto) {
    return this.uploadService.uploadChunk(file, dto);
  }

  @Get('status')
  status(@Query('uploadId') uploadId: string) {
    return this.uploadService.status(uploadId);
  }

  @Post('complete')
  complete(@Body('uploadId') uploadId: string) {
    return this.uploadService.complete(uploadId);
  }
}
```

---

# 🧠 五、UploadService（核心调度）

```ts
@Injectable()
export class UploadService {
  constructor(
    private session: SessionService,
    private chunk: ChunkService,
    private merge: MergeService,
    @InjectQueue('upload') private queue: Queue,
  ) {}

  async init(dto: InitUploadDto, userId: string) {
    // 秒传
    const file = await this.session.findFile(dto.fileHash);
    if (file) {
      return { isInstant: true, file };
    }

    return this.session.create(dto, userId);
  }

  async uploadChunk(file: Express.Multer.File, dto: UploadChunkDto) {
    await this.chunk.save(dto, file);

    await this.session.markUploaded(dto.uploadId);

    return { ok: true };
  }

  async status(uploadId: string) {
    return {
      uploadedChunks: await this.chunk.list(uploadId),
    };
  }

  async complete(uploadId: string) {
    await this.queue.add('merge', { uploadId });
    return { queued: true };
  }
}
```

---

# 📦 六、SessionService

```ts
@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async create(dto: InitUploadDto, userId: string) {
    const totalChunks = Math.ceil(dto.fileSize / dto.chunkSize);

    return this.prisma.uploadSession.create({
      data: {
        fileName: dto.fileName,
        fileHash: dto.fileHash,
        fileSize: BigInt(dto.fileSize),
        chunkSize: dto.chunkSize,
        totalChunks,
        uploaderId: userId,
        status: 0,
      },
    });
  }

  async markUploaded(uploadId: string) {
    return this.prisma.uploadSession.update({
      where: { id: uploadId },
      data: {
        uploadedCount: { increment: 1 },
        status: 1,
      },
    });
  }

  async findFile(hash: string) {
    return this.prisma.file.findUnique({ where: { fileHash: hash } });
  }

  async setMerging(uploadId: string) {
    return this.prisma.uploadSession.update({
      where: { id: uploadId },
      data: { status: 2 },
    });
  }

  async setSuccess(uploadId: string) {
    return this.prisma.uploadSession.update({
      where: { id: uploadId },
      data: { status: 3 },
    });
  }
}
```

---

# 📂 七、ChunkService（关键）

```ts
@Injectable()
export class ChunkService {
  private base = path.join(process.cwd(), 'uploads/chunked');

  async save(dto: UploadChunkDto, file: Express.Multer.File) {
    const dir = path.join(this.base, dto.uploadId);
    await fs.ensureDir(dir);

    const filePath = path.join(dir, `${dto.chunkIndex}.chunk`);

    if (await fs.pathExists(filePath)) return;

    await fs.writeFile(filePath, file.buffer);
  }

  async list(uploadId: string) {
    const dir = path.join(this.base, uploadId);
    if (!(await fs.pathExists(dir))) return [];

    const files = await fs.readdir(dir);

    return files.map((f) => Number(f.split('.')[0]));
  }
}
```

---

# 🔥 八、MergeService（最关键）

```ts
import { pipeline } from 'stream/promises';

@Injectable()
export class MergeService {
  private base = path.join(process.cwd(), 'uploads');

  constructor(
    private prisma: PrismaService,
    private session: SessionService,
  ) {}

  async merge(uploadId: string) {
    const s = await this.prisma.uploadSession.findUnique({
      where: { id: uploadId },
    });

    await this.session.setMerging(uploadId);

    const chunkDir = path.join(this.base, 'chunked', uploadId);
    const finalPath = path.join(this.base, `${uploadId}_${s.fileName}`);

    const write = fs.createWriteStream(finalPath);

    for (let i = 0; i < s.totalChunks; i++) {
      const chunk = path.join(chunkDir, `${i}.chunk`);

      await pipeline(fs.createReadStream(chunk), write, { end: false });
    }

    write.end();

    const stat = await fs.stat(finalPath);

    // 🔥 关键：用 fileHash 做去重（TG核心）
    const file = await this.prisma.file.upsert({
      where: { fileHash: s.fileHash },
      create: {
        fileName: s.fileName,
        fileHash: s.fileHash,
        size: stat.size,
        url: `/uploads/${path.basename(finalPath)}`,
        uploaderId: s.uploaderId,
      },
      update: {},
    });

    await this.session.setSuccess(uploadId);

    await fs.remove(chunkDir);

    return file;
  }
}
```

---

# ⚙️ 九、Queue Processor

```ts
@Processor('upload')
export class UploadProcessor {
  constructor(private merge: MergeService) {}

  @Process('merge')
  async handle(job: Job<{ uploadId: string }>) {
    await this.merge.merge(job.data.uploadId);
  }
}
```

---

# 🧩 十、DTO

```ts
export class InitUploadDto {
  fileName: string;
  fileSize: number;
  fileHash: string;
  chunkSize: number;
}

export class UploadChunkDto {
  uploadId: string;
  chunkIndex: number;
}
```

---

# 🧠 十一、前端（TG方式关键点）

```ts
import pLimit from 'p-limit';

const limit = pLimit(4);

await Promise.all(chunks.map((chunk, i) => limit(() => uploadChunk(uploadId, i, chunk))));
```

---

# 🔥 十二、这一版你已经具备

✅ 真·分片（乱序可传）
✅ 断点续传
✅ 秒传（fileHash）
✅ 不爆内存（stream）
✅ 队列合并
✅ 可扩展 OSS
✅ 可直接接 IM

---

# 🎯 下一步（建议你一定要做）

你现在只差最后一块拼图：

## 👉 把 File 接到 Message

实现：

```ts
message = {
  type: 'file',
  fileId: xxx,
};
```

---

# 🚀 如果你继续往 TG 靠

我可以帮你再升级：

- WebSocket 实时上传进度（像 TG）
- 上传失败自动重试
- 多文件消息（你之前在做的）
- Electron 零拷贝上传（性能翻倍）

只要你说：

👉 **“继续做 TG 消息 + 上传一体化”**
