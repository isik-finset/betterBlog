import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './post_dto/create_post.dto';
import { Post as PostModel, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // return a single post
  async post(postId, user): Promise<PostModel | null> {
    try {
      const resp = await this.prisma.post.findFirst({
        where: {
          authorId: user.id,
          id: postId,
        },
      });
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // return all posts
  async posts(): Promise<PostModel[]> {
    try {
      const resp = await this.prisma.post.findMany();
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // create post
  async createPost(data: any): Promise<PostModel> {
    try {
      const resp = await this.prisma.post.create({
        data: {
          title: data.title,
          body: data.body,
          description: data.description,
          topic: data.topic,
          authorId: 33,
        },
      });
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // update post
  async updatePost(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<PostModel> {
    const { data, where } = params;
    try {
      const resp = await this.prisma.post.update({
        data,
        where,
      });
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
          id: id,
        },
      });
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}

// @Injectable()
// export class UserService {
//   constructor(private readonly prismaService: PrismaService) {}

//   // return all posts
//   async getPosts(): Promise<PostModel[]> {
//     try {
//       const posts = await this.prismaService.post.findMany();
//       return posts;
//     } catch (e) {
//       console.error(e);
//       return e;
//     }
//   }

//   // return a single post
//   async getSinglePost(): Promise<PostModel[]> {
//     try {

//     } catch (e) {
//         console.error(e);
//         return e;
//     }
//   }

//   // publish post
//   async publishPost(registerData: CreatePostDto): Promise<PostModel> {
//     try {
//       const result = await this.prismaService.post.create({
//         data: {
//           title: registerData.title,
//           description: registerData.description,
//           body: registerData.body,
//           topic: registerData.topic,
//           author: registerData.author, // figure out the logic for author
//         },
//       });
//       if (!result) {
//         throw new HttpException(
//           'internal server error',
//           HttpStatus.INTERNAL_SERVER_ERROR,
//         );
//       }
//       return result;
//     } catch (e) {
//       console.error(e);
//       return e;
//     }
//   }

//   // edit post

//   // delete post
// }
