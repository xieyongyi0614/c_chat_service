import { Global, Module } from '@nestjs/common';
import { MyConfigService } from './config.service';

@Global()
@Module({
  providers: [MyConfigService],
  exports: [MyConfigService]
})
export class MyConfigModule {}
