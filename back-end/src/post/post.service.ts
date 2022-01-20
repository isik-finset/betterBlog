import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './post_dto/create_post.dto';
import { Post as PostModel, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // return all posts
  async posts(): Promise<PostModel[]> {
    try {
      const resp: any = await this.prisma.post.findMany();
      for (const post of resp) {
        post.id = post.id.toString();
        post.authorId = post.authorId.toString();
      }
      console.log(resp);
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // return a single post -- the logic can be used for updating a post
  async post(id: any): Promise<PostModel | null> {
    try {
      const resp: any = await this.prisma.post.findFirst({
        where: {
          //   authorId: user.id,
          id: Number(id),
        },
      });
      resp.id = resp.id.toString();
      resp.authorId = resp.authorId.toString();
      console.log(resp);
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // create post
  async createPost(data: any): Promise<PostModel> {
    try {
      const resp: any = await this.prisma.post.create({
        data: {
          title: data.title,
          body: data.body,
          description: data.description,
          topic: data.topic,
          author: {
            connect: { id: data.authorId },
          },
        },
      });
      resp.authorId = resp.authorId.toString();
      console.log(resp);
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // update post
  async updatePost(id: number, data: any): Promise<PostModel> {
    try {
      const resp: any = await this.prisma.post.update({
        where: {
          id: Number(id),
        },
        data: {
          title: data.title,
          description: data.description,
          body: data.body,
          topic: data.topic,
        },
      });
      resp.id = resp.id.toString();
      resp.authorId = resp.authorId.toString();
      console.log(resp);
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // delete post
  async deletePost(id: number): Promise<PostModel> {
    try {
      const resp = await this.prisma.post.delete({
        where: {
          id: Number(id),
        },
      });
      //   resp.id = resp.id.toString();
      console.log(resp);
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
