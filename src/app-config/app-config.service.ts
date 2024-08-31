import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {

  constructor(private configService: ConfigService) {}

  get jwtKey(): string {
    return this.configService.get<string>('JWT_KEY');
  }

  get databaseSynchronize(): boolean {
    return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
  }

  get serverPort(): number {
    return this.configService.get<number>('SERVER_PORT');
  }

}
