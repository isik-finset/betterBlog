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
import { userInfo } from 'os';
@Controller('posts')
export class UserController {
  constructor(private readonly postService: PostService) {}

  // get all posts
  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllPosts(): Promise<PostModel[]> {
    const resp = await this.postService.posts();
    return resp;
  }

  // get a single post
  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async getUserById(
    @AuthUser() user,
    @Param('id') postId: number,
  ): Promise<PostModel> {
    const resp = await this.postService.post(postId, user);
    return resp;
  }

  // post a Post
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
    const { title, description, body, topic, authorId } = postData;
    // const resp = await this.postService.createPost({
    //   title,
    //   description,
    //   body,
    //   topic,
    //   author: {
    //     connect: { id: authorId }, // look into the User - Post connection
    //   },
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
  // @Patch('/:id')
  // async updatePost(@Param('id') id: string, @Body('')): Promise<PostModel> {
  //     const resp = await this.postService.updatePost()
  // }

  //
}
