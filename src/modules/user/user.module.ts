import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { authConfig } from '@config/auth.config'
import { JwtStrategy } from '@shared/providers/jwt/jwt.provider'

import { SessionController } from './controllers/session.controller'
import { UserController } from './controllers/user.controller'
import { User } from './entities/user.entity'
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register(authConfig.jwt)
  ],
  controllers: [UserController, SessionController],
  providers: [UserService, AuthService, JwtStrategy]
})
export class UserModule { }
