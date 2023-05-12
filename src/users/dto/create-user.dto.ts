import { IsNotEmpty, IsString, IsEmail, MinLength, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsBoolean()
  admin: boolean;

  @IsString()
  photo: string;
}
