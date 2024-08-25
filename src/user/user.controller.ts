import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

// http://localhost:3000/user
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET http://localhost:3000/user
  @Get('/')
  getUsers() {
    return [
      {
        id: 1,
        name: 'Douglas'
      },
      {
        id: 2,
        name: 'Bruna'
      }
    ]
  }

  // GET http://localhost:3000/user/2
  @Get('/:userId')
  getUserById(@Param('userId') userId: string) {
    return {
      id: Number(userId),
      name: 'Douglas'
    }
  }

  // POST http://localhost:3000/user
  // BODY: { "name": "Douglas", "age": 35 }
  @Post('/')
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return createUserDto;
  }
}
