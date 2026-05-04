import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../core/database/prisma/prisma.service';
import { InitUploadDto } from '../dto/init-upload.dto';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async create(dto: InitUploadDto, userId: string) {
    const totalChunks = Math.ceil(dto.fileSize / dto.chunkSize);

    return this.prisma.upload_session.create({
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
    return this.prisma.upload_session.update({
      where: { id: uploadId },
      data: {
        uploadedCount: { increment: 1 },
        status: 1,
      },
    });
  }

  async findFile(hash: string, size: number) {
    return this.prisma.file.findUnique({ where: { fileHash: hash, size } });
  }

  async setMerging(uploadId: string) {
    return this.prisma.upload_session.update({
      where: { id: uploadId },
      data: { status: 2 },
    });
  }

  async setSuccess(uploadId: string) {
    return this.prisma.upload_session.update({
      where: { id: uploadId },
      data: { status: 3 },
    });
  }
}
