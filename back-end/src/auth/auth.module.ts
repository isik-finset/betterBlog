import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
