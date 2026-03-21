import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { MyConfigService } from '../config/config.service';
import { AuthTypes } from 'src/types/api/users-types';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    myConfigService: MyConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: myConfigService.jwtSecret
    });
  }

  async validate(payload: AuthTypes.JWTPayload) {
    const user = await this.authService.validateUser(payload.id);
    if (!user) {
      throw new UnauthorizedException('用户不存在或已被禁用');
    }
    return user;
  }
}
