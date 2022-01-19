import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto, RegisterResponseDto } from './user_dto/register.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getUser() {
    const resp = this.userService.getUsers();
    return resp;
  }

  @Post('/register')
  async registerUser(
    @Body() registerData: RegisterDto,
  ): Promise<RegisterResponseDto> {
    const result = await this.userService.registerUser(registerData);
    const resp = new RegisterResponseDto(result);
    return resp;
  }
}
