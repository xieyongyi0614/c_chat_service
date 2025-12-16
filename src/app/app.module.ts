import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { APP_FILTER, APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
import {
  CoreModule,
  HttpExceptionFilter,
  RESPONSE_INTERCEPTOR_CONFIG,
  ResponseInterceptor,
} from '../core';
import { CommonModule, RequestContextMiddleware } from '../common';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),

    CoreModule,
    AuthModule,
    CommonModule,

    // AdminModule,

    // RouterModule.register([{ path: 'admin', module: AdminModule }]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: RESPONSE_INTERCEPTOR_CONFIG,
      useValue: { useStatusCodeAsCode: true, excludePaths: [] },
    },
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class AppModule implements NestModule {
  /**  */
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}
