import * as path from 'path';
import * as fs from 'fs-extra';
import { pipeline } from 'stream/promises';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../core/database/prisma/prisma.service';
import { SessionService } from './session.service';

@Injectable()
export class MergeService {
  private base = path.join(process.cwd(), 'uploads');

  constructor(
    private prisma: PrismaService,
    private session: SessionService,
  ) {}

  async merge(uploadId: string) {
    const s = await this.prisma.uploadSession.findUnique({ where: { id: uploadId } });
    if (!s) throw new Error('upload session not found');

    await this.session.setMerging(uploadId);

    const chunkDir = path.join(this.base, 'chunked', uploadId);

    const date = s?.createdAt ? new Date(s.createdAt) : new Date();
    const dayFolder = date.toISOString().slice(0, 10); // YYYY-MM-DD
    const finalDir = path.join(this.base, dayFolder);
    await fs.ensureDir(finalDir);

    const ext = path.extname(s.fileName) ?? '';
    const finalPath = path.join(finalDir, `${uploadId}${ext}`);

    const write = fs.createWriteStream(finalPath);

    for (let i = 0; i < s.totalChunks; i++) {
      const chunk = path.join(chunkDir, `${i}.chunk`);
      if (!(await fs.pathExists(chunk))) {
        write.end();
        throw new Error(`missing chunk ${i}`);
      }

      await pipeline(fs.createReadStream(chunk), write, { end: false });
    }

    write.end();

    const stat = await fs.stat(finalPath);

    const file = await this.prisma.file.upsert({
      where: { fileHash: s.fileHash },
      create: {
        fileName: s.fileName,
        fileHash: s.fileHash,
        size: BigInt(stat.size),
        url: `/uploads/${dayFolder}/${path.basename(finalPath)}`,
        uploaderId: s.uploaderId,
      },
      update: {},
    });

    await this.session.setSuccess(uploadId);

    await fs.remove(chunkDir);

    return file;
  }
}
