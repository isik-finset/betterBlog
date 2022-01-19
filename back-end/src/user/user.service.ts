import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { RegisterDto } from './user_dto/register.dto';
import { User as UserModel } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers(): Promise<UserModel[]> {
    try {
      const users = await this.prismaService.user.findMany();
      return users;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
  async registerUser(registerData: RegisterDto): Promise<UserModel> {
    try {
      const result = await this.prismaService.user.create({
        data: {
          firstName: registerData.firstName,
          lastName: registerData.lastName,
          email: registerData.email,
          password: registerData.password,
        },
      });
      if (!result) {
        throw new HttpException(
          'internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
