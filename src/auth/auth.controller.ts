import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  UnauthorizedException,
  Headers
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, AuthResponseDto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { MyConfigService } from '../config/config.service';

@ApiTags('认证')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly configService: MyConfigService
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: '用户注册' })
  @ApiResponse({
    status: 201,
    description: '注册成功',
    type: AuthResponseDto
  })
  @ApiResponse({ status: 409, description: '邮箱或手机号已被注册' })
  async register(@Body() registerDto: RegisterDto): Promise<AuthResponseDto> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '用户登录' })
  @ApiResponse({
    status: 200,
    description: '登录成功',
    type: AuthResponseDto
  })
  @ApiResponse({ status: 401, description: '邮箱或密码错误' })
  async login(@Body() loginDto: LoginDto): Promise<AuthResponseDto> {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取当前用户信息' })
  @ApiResponse({ status: 200, description: '获取成功' })
  @ApiResponse({ status: 401, description: '未授权' })
  async getProfile(@Headers('authorization') authorization: string) {
    // 从请求头中提取 token
    const token = this.extractTokenFromHeader(authorization);

    if (!token) {
      throw new UnauthorizedException('未提供认证令牌');
    }

    try {
      // 解析 token 获取用户信息
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.jwtSecret
      });

      if (!payload || !payload.sub) {
        throw new UnauthorizedException('无效的认证令牌');
      }

      // 根据用户 ID 从数据库获取完整的用户信息
      const user = await this.authService.validateUser(payload.sub);

      if (!user) {
        throw new UnauthorizedException('用户不存在或已被禁用');
      }

      return {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        avatar_url: user.avatar_url
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('认证失败: ' + (error.message || '未知错误'));
    }
  }

  /**
   * 从 Authorization 请求头中提取 token
   */
  private extractTokenFromHeader(authorization: string | undefined): string | null {
    if (!authorization) {
      return null;
    }

    const parts = authorization.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return null;
    }

    return parts[1];
  }
}
