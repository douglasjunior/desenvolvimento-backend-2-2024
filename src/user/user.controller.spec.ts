import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './data/user.entity';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [User],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User])
      ],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('deve criar um novo usuário', async () => {
    const newUser = await controller.createUser({
      name: 'Douglas',
      email: 'user@mail.com',
      password: 'senha123',
      age: 35
    });

    expect(newUser).toEqual({
      name: 'Douglas',
      email: 'user@mail.com',
      password: 'senha123',
      age: 35,
      id: 1,
    });
  });

  it('deve retornar os usuários criados', async () => {
    await controller.createUser({
      name: 'Douglas',
      email: 'user@mail.com',
      password: 'senha123',
      age: 35
    });
    await controller.createUser({
      name: 'Bruna',
      email: 'user2@mail.com',
      password: 'senha123',
      age: 35
    });

    const users = await controller.getUsers();
    expect(users).toEqual([
      {
        name: 'Douglas',
        email: 'user@mail.com',
        age: 35,
        id: 1,
      },
      {
        name: 'Bruna',
        email: 'user2@mail.com',
        age: 35,
        id: 2,
      }
    ]);
  });
});


