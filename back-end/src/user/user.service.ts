import { Injectable } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { RegisterDto, RegisterResponseDto } from './user_dto/register.dto';

// ---------------------------------------------------------------------------------
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // get all users
  async getUsers(): Promise<UserModel[]> {
    try {
      const resp: any = await this.prisma.user.findMany();
      for (const user of resp) {
        user.id = user.id.toString();
      }
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // get a single user -- dto has been added
  async getUser(id: number): Promise<any> {
    try {
      const resp: any = await this.prisma.user.findFirst({
        where: {
          id: BigInt(id),
        },
      });
      resp.id = resp.id.toString();
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // get a single user's all posts
  async getUserPosts(id: number): Promise<any> {
    // get user info
    let user: RegisterResponseDto;
    try {
      user = await this.getUser(id);
    } catch (e) {
      // FIXME: exception
      console.error(`User with this ID does not exist: ${e}`);
    }
    const resp: any = await this.prisma.user.findFirst({
      where: { id: BigInt(user.id), email: user.email },
      include: {
        posts: true,
      },
    });
    console.log('🚀 ~ UserService ~ getUserPosts ~ resp', resp);
    return resp.posts;
  }

  // register a user -- dto has been added
  async registerUser(data: RegisterDto): Promise<UserModel> {
    try {
      const resp = await this.prisma.user.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        },
      });
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
