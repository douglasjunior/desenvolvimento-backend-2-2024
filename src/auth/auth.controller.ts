import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  // POST http://localhost:3000/auth
  // BODY: { "email": "user@mail.com", "password": "senha123" }
  @Post()
  async signIn(@Body() authDto: AuthDto) {
    return this.authService.signIn(authDto);
  }

  // GET http://localhost:3000/auth/profile
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() request: Request) {
    return this.authService.getProfile(request['user'].sub);
  }

}
