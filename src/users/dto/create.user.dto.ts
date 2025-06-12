import { IsString, Min, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(3, {
    message: 'Username must be at least 3 characters long',
  })
  @IsString()
  username: string;

  @MinLength(8, {
    message: 'Password must be at least 6 characters long',
  })
  @IsString()
  password: string;
}
