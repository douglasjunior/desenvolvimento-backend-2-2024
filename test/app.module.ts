import * as path from "path";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppConfigModule } from "../src/app-config/app-config.module";
import { AuthModule } from "../src/auth/auth.module";
import { UserModule } from "../src/user/user.module";
import { AppController } from "../src/app.controller";
import { AppService } from "../src/app.service";

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [path.join(__dirname, '..', 'src', '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    AppConfigModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
