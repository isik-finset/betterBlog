import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User as UserModel } from '@prisma/client';
import { RegisterDto, RegisterResponseDto } from './user_dto/register.dto';

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
  @Get('/:id/posts')
  async getUserPostById(
    @Param('id') id: number,
  ): Promise<any> {
    const result = await this.userService.getUserPosts(id);
    return result;
  }

  // get a single user
  @Get('/:id')
  async getUserById(
    @Param('id') id: number,
  ): Promise<RegisterResponseDto> {
    const result = await this.userService.getUser(id);
    return result;
  }

  // register user -- dto has been added
  @Post('/signup')
  async registerUser(
    @Body() userData: RegisterDto,
  ): Promise<RegisterResponseDto> {
    const result = await this.userService.registerUser(userData);
    const resp = new RegisterResponseDto(result);
    return resp;
  }
}
