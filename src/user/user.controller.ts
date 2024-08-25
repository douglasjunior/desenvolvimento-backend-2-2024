import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

// http://localhost:3000/user
@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  // GET http://localhost:3000/user
  @Get('/')
  getUsers() {
    return this.userService.getUsers();
  }

  // GET http://localhost:3000/user/2
  @Get('/:userId')
  getUserById(@Param('userId') userId: string) {
    return this.userService.getUserById(Number(userId));
  }

  // POST http://localhost:3000/user
  // BODY: { "name": "Douglas", "age": 35 }
  @Post('/')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  // PATCH http://localhost:3000/user/2
  // BODY: { "name": "Douglas" } ou { "age": 35 } ou { "name": "Douglas", "age": 35 }
  @Patch('/:userId')
  updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(Number(userId), updateUserDto);
  }
}
