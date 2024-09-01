import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello NestJS!');
  });

  it('/user (POST) deve validar o e-mail no cadastro de usuários', async () => {
    return request(app.getHttpServer())
      .post('/user')
      .send({
        name: 'Douglas',
        email: 'isso-não-é-um-email',
        password: 'senha123',
        age: 35
      })
      .expect(400)
      .expect({
        message: ['email must be an email'],
        error: 'Bad Request',
        statusCode: 400
      });
  });
});
