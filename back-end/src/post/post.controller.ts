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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePostDto, CreatePostResponseDto } from './post_dto/post.dto';

// ---------------------------------------------------------------------------------
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
  // @UseGuards(JwtAuthGuard)
  async getUserById(@Param('id') id: string): Promise<any> {
    const resp = await this.postService.post(id);
    return resp;
  }

  // create a Post ---> Private Route
  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async registerUser(
    @Body() postData: CreatePostDto,
  ): Promise<CreatePostResponseDto> {
    const result = await this.postService.createPost(postData);
    const resp = new CreatePostResponseDto(result);
    return resp;
  }

  // delete a post ---> Private Route
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deletePost(@Param('id') id: number): Promise<PostModel> {
    const resp = await this.postService.deletePost(id);
    return resp;
  }

  // update a Post ---> Private Route
  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async updatePost(
    @Param('id') id: number,
    @Body() data: CreatePostDto,
  ): Promise<CreatePostResponseDto> {
    const result = await this.postService.updatePost(id, data);
    const resp = new CreatePostResponseDto(result);
    return resp;
  }
}
