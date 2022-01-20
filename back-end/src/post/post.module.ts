import { Module } from '@nestjs/common';
import { PostController } from 'src/post/post.controller';
import { PostService } from 'src/post/post.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class PostModule {}
