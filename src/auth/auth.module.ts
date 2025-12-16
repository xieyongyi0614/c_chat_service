import { Module } from '@nestjs/common';
import { JwtModule, JwtSignOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService, JwtStrategy } from '.';
import { MyConfigModule, MyConfigService } from '../config';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [MyConfigModule],
      useFactory: (myConfigService: MyConfigService) => {
        return {
          secret: myConfigService.jwtSecret,
          signOptions: { expiresIn: myConfigService.jwtExpiresIn as JwtSignOptions['expiresIn'] }
        };
      },
      inject: [MyConfigService]
    })
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
