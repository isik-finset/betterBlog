import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { RegisterDto } from './user_dto/register.dto';
import { Prisma, User as UserModel } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  //   async getUsers(): Promise<UserModel[]> {
  //     try {
  //       const users = await this.prisma.user.findMany();
  //       return users;
  //     } catch (e) {
  //       console.error(e);
  //       return e;
  //     }
  //   }

  //   async registerUser(registerData: RegisterDto): Promise<UserModel> {
  //     try {
  //       const result = await this.prisma.user.create({
  //         data: {
  //           firstName: registerData.firstName,
  //           lastName: registerData.lastName,
  //           email: registerData.email,
  //           password: registerData.password,
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
  // }

  // get a single user
  async getUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<UserModel | null> {
    try {
      const resp = await this.prisma.user.findUnique({
        where: userWhereUniqueInput,
      });
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // get all users
  async getUsers(): Promise<UserModel[]> {
    try {
      const resp: any = await this.prisma.user.findMany();
      //   const result: any = []
      for (const user of resp) {
        user.id = user.id.toString();
      }
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  // register a user
  async registerUser(data: any): Promise<UserModel> {
    try {
      const resp: any = await this.prisma.user.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        },
      });
      resp.id = resp.id.toString();
      return resp;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
