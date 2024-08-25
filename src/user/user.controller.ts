import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// http://localhost:3000/user
@Controller('user')
export class UserController {

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
    console.log('user created', createUserDto);
    return createUserDto;
  }

  // PATCH http://localhost:3000/user/2
  // BODY: { "name": "Douglas" } ou { "age": 35 } ou { "name": "Douglas", "age": 35 }
  @Patch('/:userId')
  updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto) {
    console.log('user updated', updateUserDto);
    return updateUserDto;
  }
}
