import { IsNotEmpty, Min, NotEquals, ValidateIf, } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  name?: string;

  @Min(1)
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  age?: number;
}
