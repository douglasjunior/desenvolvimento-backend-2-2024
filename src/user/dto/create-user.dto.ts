import { IsNotEmpty, Min, } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @Min(1)
  age: number;
}
