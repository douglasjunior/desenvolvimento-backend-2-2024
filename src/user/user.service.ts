import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './data/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async updateUser(userId: number, updateUserDto: UpdateUserDto) {
    const userCount = await this.usersRepository.countBy({
      id: userId,
    });
    if (!userCount) {
      throw new NotFoundException('Usuário não encontrado');
    }
    const updatedUser = await this.usersRepository.save({
      ...updateUserDto,
      id: userId,
    })
    return updatedUser;
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.save(createUserDto);
    return newUser;
  }

  async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({
      email: email,
    });
    return user;
  }

  async getUserById(userId: number) {
    const user = await this.usersRepository.findOne({
      select: ['id', 'name', 'email', 'age'],
      where: {
        id: userId,
      }
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async getUsers() {
    const users = await this.usersRepository.find({
      select: ['id', 'name', 'email', 'age'],
    });
    return users;
  }
}
