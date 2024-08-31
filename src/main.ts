import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AppConfigService } from './app-config/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const appConfigService = app.get(AppConfigService);
  await app.listen(appConfigService.serverPort);
  console.log('Servidor iniciado na porta: ' + appConfigService.serverPort)
}
bootstrap();
