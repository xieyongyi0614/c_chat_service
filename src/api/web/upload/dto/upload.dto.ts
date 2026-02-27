import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';

export class UploadFileDto {
  @ApiProperty({ description: '文件描述' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: '图片alt属性' })
  @IsOptional()
  @IsString()
  alt?: string;
}

export class UploadResponseDto {
  @ApiProperty({ description: '文件ID' })
  id: string;

  @ApiProperty({ description: '文件名' })
  filename: string;

  @ApiProperty({ description: '原始文件名' })
  originalName: string;

  @ApiProperty({ description: 'MIME类型' })
  mimeType: string;

  @ApiProperty({ description: '文件大小（字节）' })
  size: number;

  @ApiProperty({ description: '文件路径' })
  path: string;

  @ApiProperty({ description: '文件URL' })
  url: string;

  @ApiProperty({ description: '图片alt属性', required: false })
  alt?: string;

  @ApiProperty({ description: '文件描述', required: false })
  description?: string;

  @ApiProperty({ description: '上传时间' })
  createdAt: Date;

  @ApiProperty({ description: '更新时间' })
  updatedAt: Date;
}

export class BatchUploadResponseDto {
  @ApiProperty({ description: '成功上传的文件列表', type: [UploadResponseDto] })
  success: UploadResponseDto[];

  @ApiProperty({ description: '失败的文件列表' })
  failed: Array<{
    filename: string;
    error: string;
  }>;

  @ApiProperty({ description: '总文件数' })
  total: number;

  @ApiProperty({ description: '成功数量' })
  successCount: number;

  @ApiProperty({ description: '失败数量' })
  failedCount: number;
}

export class GetFilesQueryDto {
  @ApiProperty({ description: '页码', required: false, default: 1 })
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiProperty({ description: '每页数量', required: false, default: 10 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  @ApiProperty({ description: '搜索关键词', required: false })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({ description: '文件类型', required: false })
  @IsOptional()
  @IsString()
  mimeType?: string;
}
