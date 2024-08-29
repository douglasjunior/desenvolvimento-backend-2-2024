import { IsEmail, IsNotEmpty, MaxLength, Min, MinLength, } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @Min(1)
  age: number;

  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(20)
  password: string;
}
