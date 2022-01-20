import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PostModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
