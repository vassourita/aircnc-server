import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { SessionController } from './controllers/session.controller';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { authConfig } from '@config/auth.config';
import { JwtStrategy } from '@shared/providers/token/jwt.provider';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register(authConfig.jwt)
  ],
  exports: [AuthService],
  controllers: [UserController, SessionController],
  providers: [UserService, AuthService, JwtStrategy]
})
export class UserModule { }
