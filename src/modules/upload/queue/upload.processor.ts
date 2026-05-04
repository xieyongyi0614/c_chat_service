import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';
import { MergeService } from '../services/merge.service';

@Processor('upload')
@Injectable()
export class UploadProcessor {
  constructor(private merge: MergeService) {}

  @Process('merge')
  async handle(job: Job<{ uploadId: string }>) {
    await this.merge.merge(job.data.uploadId);
  }
}
