import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  private lastId = 2;
  private users = [
    {
      id: 1,
      name: 'Douglas',
      age: 35
    },
    {
      id: 2,
      name: 'Maria',
      age: 25
    }
  ];

  updateUser(userId: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      throw new NotFoundException('Usuário não encontrado');
    }
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateUserDto,
    }
    return this.users[userIndex];
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: ++this.lastId,
    };
    this.users.push(newUser);
    return newUser;
  }

  getUserById(userId: number) {
    const user = this.users.find(user => user.id === userId);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  getUsers() {
    return this.users;
  }
}
