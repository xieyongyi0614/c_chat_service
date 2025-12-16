import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../core/database';
import { RegisterDto, LoginDto, AuthResponseDto } from '.';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
  //   const { email, username, password, role } = registerDto;
  //   const existingUser = await this.prisma.user.findUnique({
  //     where: { email },
  //   });
  //   if (existingUser) {
  //     throw new ConflictException('用户已存在');
  //   }

  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   const user = await this.prisma.user.create({
  //     data: { email, username, password: hashedPassword, role: role },
  //   });

  //   // 生成JWT token
  //   const payload = { sub: user.id, email: user.email, role: user.role };
  //   const access_token = this.jwtService.sign(payload);

  //   return {
  //     access_token,
  //     user: {
  //       id: user.id,
  //       email: user.email,
  //       username: user.username,
  //       role: user.role,
  //     },
  //   };
  // }

  // async login(loginDto: LoginDto): Promise<AuthResponseDto> {
  //   const { email, password } = loginDto;

  //   const user = await this.prisma.user.findUnique({ where: { email } });

  //   if (!user) {
  //     throw new UnauthorizedException('用户不存在');
  //   }

  //   const isPasswordValid = await bcrypt.compare(password, user.password);
  //   if (!isPasswordValid) {
  //     throw new UnauthorizedException('密码错误');
  //   }

  //   const payload = { sub: user.id, email: user.email, role: user.role };
  //   const access_token = this.jwtService.sign(payload);

  //   return {
  //     access_token,
  //     user: {
  //       id: user.id,
  //       email: user.email,
  //       username: user.username,
  //       role: user.role,
  //     },
  //   };
  // }

  // async validateUser(userId: string) {
  //   const user = await this.prisma.user.findUnique({
  //     where: { id: userId },
  //     // select: SAFE_USER_SELECT,
  //   });
  //   return user || null;
  // }
}
