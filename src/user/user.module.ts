import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { loggerMiddleware } from 'src/common/middleware/logger-fn.middleware';
// import { LoggerMiddleware } from 'src/common/middleware/logger.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(loggerMiddleware)
      .forRoutes(UserController);
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes(UserController);
  }
}





