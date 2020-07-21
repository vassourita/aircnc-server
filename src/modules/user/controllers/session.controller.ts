import { Controller, Param, Get, Body, Post, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { ICreateSessionDTO } from '../dtos/create-session.dto';

@Controller('/sessions')
export class SessionController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) { }

  @Post('/')
  async store(@Body() body: ICreateSessionDTO): Promise<{ token: string }> {
    const user = await this.userService.findOneByEmail(body.email);
    if (!user) {
      throw new NotFoundException('User does not exists');
    }

    const isValidLogin = await this.authService.comparePassword(body.password, user.password);
    if (!isValidLogin) {
      throw new UnauthorizedException('Wrong password');
    }

    const token = await this.authService.signToken(user.id);

    return { token };
  }
}