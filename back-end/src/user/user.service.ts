import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { RegisterDto, RegisterResponseDto } from './user_dto/register.dto';
import { Prisma, User as UserModel } from '@prisma/client';

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
  async getUser(id: any): Promise<RegisterResponseDto> {
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

  // findOne user
  async findOne(email: string): Promise<UserModel> {
    try {
      const resp: any = await this.prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      console.log(resp);
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
