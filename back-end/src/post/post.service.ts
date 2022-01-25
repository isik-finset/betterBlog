import { Injectable } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './post_dto/post.dto';

// ---------------------------------------------------------------------------------
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
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // return a single post
  async post(id: any): Promise<any> {
    try {
      const resp: any = await this.prisma.post.findFirst({
        where: {
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

  // create a Post
  async createPost(data: CreatePostDto): Promise<PostModel> {
    try {
      const resp: any = await this.prisma.post.create({
        data: {
          title: data.title,
          body: data.body,
          description: data.description,
          topic: data.topic,
          firstName: data.firstName,
          lastName: data.lastName,
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

  // delete a Post
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

  // update a Post
  async updatePost(id: number, data: CreatePostDto): Promise<PostModel> {
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
}
