import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PostService } from 'src/post/post.service';
import { Post as PostModel } from '@prisma/client';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from 'src/decorators/auth-user.decorator';
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // get all posts
  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllPosts() {
    const resp = await this.postService.posts();
    return resp;
  }

  // get a single post
  @Get('/:id')
  //   @UseGuards(JwtAuthGuard)
  async getUserById(
    // @AuthUser() user,
    @Param('id') id: string,
  ): Promise<PostModel> {
    const resp = await this.postService.post(id);
    return resp;
  }

  // get all posts of a given user
  @Get('/user/:id')
  async getPostById(@Param('id') id: number): Promise<PostModel> {
    const resp = await this.postService.singlePosts(id);
    return resp;
  }

  // create a Post
  @Post('/create')
  async registerUser(
    @Body()
    postData: {
      title: string;
      description: string;
      body: string;
      topic: string;
      authorId: number;
    },
  ): Promise<PostModel> {
    const resp = await this.postService.createPost(postData);
    return resp;
  }

  // delete a post
  @Delete('/:id')
  async deletePost(@Param('id') id: number): Promise<PostModel> {
    const resp = await this.postService.deletePost(id);
    return resp;
  }

  // update a Post
  @Patch('/:id')
  async updatePost(
    @Param('id') id: number,
    @Body() data: any,
  ): Promise<PostModel> {
    const resp = await this.postService.updatePost(id, data);
    return resp;
  }
}
