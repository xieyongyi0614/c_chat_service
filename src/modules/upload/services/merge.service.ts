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
    const s = await this.prisma.upload_session.findUnique({ where: { id: uploadId } });
    if (!s) throw new Error('upload session not found');

    await this.session.setMerging(uploadId);

    const chunkDir = path.join(this.base, 'chunked', uploadId);
    const finalPath = path.join(this.base, `${uploadId}_${s.fileName}`);

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
