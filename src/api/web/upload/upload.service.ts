// import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
// import { PrismaService } from '../../../core/database';
// import { ConfigService } from '@nestjs/config';
// import * as fs from 'fs-extra';
// import * as path from 'path';
// import { v4 as uuidv4 } from 'uuid';
// import sharp from 'sharp';
// import {
//   UploadFileDto,
//   UploadResponseDto,
//   BatchUploadResponseDto,
//   GetFilesQueryDto
// } from './dto/upload.dto';
// import { FileUpload } from './types/upload.types';

// @Injectable()
// export class UploadService {
//   private readonly uploadPath: string;
//   private readonly baseUrl: string;
//   private readonly allowedMimeTypes: string[];
//   private readonly maxFileSize: number;

//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly configService: ConfigService
//   ) {
//     this.uploadPath = this.configService.get<string>('UPLOAD_PATH', './uploads');
//     this.baseUrl = this.configService.get<string>('BASE_URL', 'http://localhost:3001');
//     this.allowedMimeTypes = [
//       'image/jpeg',
//       'image/jpg',
//       'image/png',
//       'image/gif',
//       'image/webp',
//       'image/svg+xml'
//     ];
//     this.maxFileSize = 10 * 1024 * 1024; // 10MB
//   }

//   /**
//    * 单文件上传
//    */
//   async uploadFile(
//     file: FileUpload,
//     uploaderId: string,
//     uploadDto?: UploadFileDto
//   ): Promise<UploadResponseDto> {
//     try {
//       // 验证文件
//       this.validateFile(file);

//       // 确保上传目录存在
//       await this.ensureUploadDirectory();

//       // 生成唯一文件名
//       const fileExtension = path.extname(file.originalname);
//       const filename = `${uuidv4()}${fileExtension}`;
//       const filePath = path.join(this.uploadPath, filename);

//       // 处理图片文件（压缩和优化）
//       let processedBuffer = file.buffer;
//       if (this.isImageFile(file.mimetype)) {
//         processedBuffer = await this.processImage(file.buffer);
//       }

//       // 保存文件
//       await fs.writeFile(filePath, processedBuffer);

//       // 生成文件URL
//       const fileUrl = `${this.baseUrl}/uploads/${filename}`;

//       // 保存到数据库
//       const savedFile = await this.prisma.file.create({
//         data: {
//           filename,
//           originalName: file.originalname,
//           mimeType: file.mimetype,
//           size: processedBuffer.length,
//           path: filePath,
//           url: fileUrl,
//           alt: uploadDto?.alt,
//           description: uploadDto?.description,
//           uploaderId
//         }
//       });

//       return {
//         id: savedFile.id,
//         filename: savedFile.filename,
//         originalName: savedFile.originalName,
//         mimeType: savedFile.mimeType,
//         size: savedFile.size,
//         path: savedFile.path,
//         url: savedFile.url,
//         alt: savedFile.alt,
//         description: savedFile.description,
//         createdAt: savedFile.createdAt,
//         updatedAt: savedFile.updatedAt
//       };
//     } catch (error) {
//       throw new InternalServerErrorException(`文件上传失败: ${error.message}`);
//     }
//   }

//   /**
//    * 批量文件上传
//    */
//   async uploadFiles(
//     files: FileUpload[],
//     uploaderId: string,
//     uploadDto?: UploadFileDto
//   ): Promise<BatchUploadResponseDto> {
//     const results: BatchUploadResponseDto = {
//       success: [],
//       failed: [],
//       total: files.length,
//       successCount: 0,
//       failedCount: 0
//     };

//     for (const file of files) {
//       try {
//         const result = await this.uploadFile(file, uploaderId, uploadDto);
//         results.success.push(result);
//         results.successCount++;
//       } catch (error) {
//         results.failed.push({
//           filename: file.originalname,
//           error: error.message
//         });
//         results.failedCount++;
//       }
//     }

//     return results;
//   }

//   /**
//    * 获取文件列表
//    */
//   async getFiles(query: GetFilesQueryDto, uploaderId?: string) {
//     const { page = 1, limit = 10, search, mimeType } = query;
//     const skip = (page - 1) * limit;

//     const where: Record<string, unknown> = {};

//     if (uploaderId) {
//       where.uploaderId = uploaderId;
//     }

//     if (search) {
//       where.OR = [
//         { originalName: { contains: search } },
//         { description: { contains: search } },
//         { alt: { contains: search } }
//       ];
//     }

//     if (mimeType) {
//       where.mimeType = { contains: mimeType };
//     }

//     const [files, total] = await Promise.all([
//       this.prisma.file.findMany({
//         where,
//         skip,
//         take: limit,
//         orderBy: { createdAt: 'desc' },
//         include: {
//           uploader: {
//             select: {
//               id: true,
//               username: true,
//               email: true
//             }
//           }
//         }
//       }),
//       this.prisma.file.count({ where })
//     ]);

//     return {
//       files,
//       pagination: {
//         page,
//         limit,
//         total,
//         totalPages: Math.ceil(total / limit)
//       }
//     };
//   }

//   /**
//    * 删除文件
//    */
//   async deleteFile(fileId: string, uploaderId?: string): Promise<void> {
//     const where: Record<string, unknown> = { id: fileId };
//     if (uploaderId) {
//       where.uploaderId = uploaderId;
//     }

//     const file = await this.prisma.file.findFirst({ where });
//     if (!file) {
//       throw new BadRequestException('文件不存在');
//     }

//     try {
//       // 删除物理文件
//       if (await fs.pathExists(file.path)) {
//         await fs.remove(file.path);
//       }

//       // 删除数据库记录
//       await this.prisma.file.delete({ where: { id: fileId } });
//     } catch (error) {
//       throw new InternalServerErrorException(`文件删除失败: ${error.message}`);
//     }
//   }

//   /**
//    * 验证文件
//    */
//   private validateFile(file: FileUpload): void {
//     if (!file) {
//       throw new BadRequestException('没有上传文件');
//     }

//     if (file.size > this.maxFileSize) {
//       throw new BadRequestException(`文件大小不能超过 ${this.maxFileSize / 1024 / 1024}MB`);
//     }

//     if (!this.allowedMimeTypes.includes(file.mimetype)) {
//       throw new BadRequestException(`不支持的文件类型: ${file.mimetype}`);
//     }
//   }

//   /**
//    * 确保上传目录存在
//    */
//   private async ensureUploadDirectory(): Promise<void> {
//     try {
//       await fs.ensureDir(this.uploadPath);
//     } catch (error) {
//       throw new InternalServerErrorException('创建上传目录失败');
//     }
//   }

//   /**
//    * 判断是否为图片文件
//    */
//   private isImageFile(mimeType: string): boolean {
//     return mimeType.startsWith('image/');
//   }

//   /**
//    * 处理图片文件（压缩和优化）
//    */
//   private async processImage(buffer: Buffer): Promise<Buffer> {
//     try {
//       return await sharp(buffer)
//         .jpeg({ quality: 85 })
//         .png({ quality: 85 })
//         .webp({ quality: 85 })
//         .toBuffer();
//     } catch (error) {
//       // 如果处理失败，返回原始buffer
//       return buffer;
//     }
//   }
// }
