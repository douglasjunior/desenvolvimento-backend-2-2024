import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  async signIn(authDto: AuthDto) {
    const user = await this.usersService.getUserByEmail(authDto.email);
    if (user?.password !== authDto.password) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async getProfile(userId: number) {
    const user = await this.usersService.getUserById(userId);
    return user;
  }
}
