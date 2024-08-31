import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'sqlite',
          database: path.join('database', 'db.sqlite'),
          entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
          synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
        }
      },
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
