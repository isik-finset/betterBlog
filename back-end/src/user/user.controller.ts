import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User as UserModel } from '@prisma/client';
import { JwtAuthGuard } from 'src/guards/auth.guard';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // get all users
  @Get('/')
  //   @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async getAllUsers() {
    const resp = await this.userService.getUsers();
    return resp;
  }

  // get a single user
  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    const resp = await this.userService.getUser(id);
    return resp;
  }

  // register user
  @Post('/register')
  async registerUser(
    @Body()
    userData: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
  ): Promise<UserModel> {
    const resp = await this.userService.registerUser(userData);
    return resp;
  }
}
