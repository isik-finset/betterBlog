import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly body: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly topic: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly author: string;
}

export class CreatePostResponseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly body: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly topic: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly author: string;

  constructor(userData) {
    this.id = userData.id.toString();
  }
}
