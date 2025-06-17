import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class SignupDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[0-9])/, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, and one number.',
  })
  password: string;
}
