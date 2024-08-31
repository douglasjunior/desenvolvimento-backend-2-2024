import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './app-config/app-config.module';
import { AppConfigService } from './app-config/app-config.service';

@Module({
  imports: [ 
    TypeOrmModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return {
          type: 'sqlite',
          database: path.join('database', 'db.sqlite'),
          entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
          synchronize: appConfigService.databaseSynchronize,
        }
      },
    }),
    UserModule,
    AuthModule,
    AppConfigModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
