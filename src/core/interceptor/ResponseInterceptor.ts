import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { ContextLoggerService, RequestContextService } from '../../common';

// 配置接口
export interface ResponseInterceptorConfig {
  useStatusCodeAsCode?: boolean;
  excludePaths?: string[];
}

export const RESPONSE_INTERCEPTOR_CONFIG = 'RESPONSE_INTERCEPTOR_CONFIG';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, API.ApiResponse<T>> {
  private readonly config: ResponseInterceptorConfig;

  constructor(
    private readonly logger: ContextLoggerService,
    private readonly contextService: RequestContextService,

    @Inject(RESPONSE_INTERCEPTOR_CONFIG)
    config?: ResponseInterceptorConfig
  ) {
    this.config = { useStatusCodeAsCode: true, excludePaths: [], ...config };
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<API.ApiResponse<T>> {
    const request = context.switchToHttp().getRequest();

    if (this.shouldSkip(request.url)) {
      return next.handle();
    }

    return next.handle().pipe(map((data) => this.transformResponse(context, data)));
  }

  private transformResponse(context: ExecutionContext, data: unknown): API.ApiResponse<T> {
    const response = context.switchToHttp().getResponse();

    const statusCode = this.getNormalizedStatusCode(response.statusCode || 200);
    const baseResponse: API.ApiResponse<T> = {
      code: this.resolveCode(data, statusCode),
      message: this.resolveMessage(data, statusCode),
      data: this.resolveData(data),
      timestamp: this.generateTimestamp(),
      requestId: this.getRequestId() ?? ''
    };
    response.setHeader('X-Request-Id', baseResponse.requestId);

    this.logger.log('baseResponse' + JSON.stringify(baseResponse));
    return baseResponse;
  }

  private resolveCode(data: any, statusCode: number): number {
    if (data?.code !== undefined) return data.code;
    return this.config.useStatusCodeAsCode ? statusCode : 200;
  }

  private resolveMessage(data: any, statusCode: number): string {
    if (data?.message) return data.message;
    return this.getStatusMessage(statusCode);
  }

  private resolveData(data: any): T {
    if (data === null || data === undefined) return null as T;
    if (this.isApiResponseLike(data)) return data.data ?? null;
    return data;
  }

  private generateTimestamp(): number {
    return Date.now();
  }

  private isApiResponseLike(obj: any): boolean {
    return obj && typeof obj === 'object' && ('message' in obj || 'data' in obj || 'code' in obj);
  }

  private shouldSkip(url: string): boolean {
    return (
      this.config.excludePaths?.some((path) => url.includes(path) || new RegExp(path).test(url)) ??
      false
    );
  }
  private getNormalizedStatusCode(statusCode: number): number {
    if (statusCode > 200 && statusCode < 400) {
      return 200;
    } else if ([409, 422].includes(statusCode)) {
      return 400;
    } else if ([502, 503].includes(statusCode)) {
      return 500;
    }
    return statusCode;
  }
  private getStatusMessage(statusCode: number): string {
    const messages: Record<number, string> = {
      200: '操作成功',
      400: '参数错误',
      401: '未授权',
      403: '禁止访问',
      404: '资源不存在',
      500: '服务器错误'
    };

    return messages[statusCode] || (statusCode < 400 ? 'success' : 'error');
  }
  private getRequestId(): string | undefined {
    const requestContext = this.contextService.getContext();
    return requestContext.requestId || this.generateRequestId();
  }
  private generateRequestId(): string {
    return uuidv4();
  }
}
