import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { SessionController } from './controllers/session.controller';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController, SessionController],
  providers: [UserService, AuthService, TokenService]
})
export class UserModule { }
