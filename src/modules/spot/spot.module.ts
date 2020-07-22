import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { MulterModule } from '@nestjs/platform-express'
import { TypeOrmModule } from '@nestjs/typeorm'

import { authConfig } from '@config/auth.config'
import { uploadConfig } from '@config/upload.config'
import { JwtStrategy } from '@shared/providers/jwt/jwt.provider'

import { SpotController } from './controllers/spot.controller'
import { Spot } from './entities/spot.entity'
import { SpotService } from './services/spot.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Spot]),
    JwtModule.register(authConfig.jwt),
    MulterModule.register({
      dest: uploadConfig.dir,
      storage: uploadConfig.storage
    })
  ],
  controllers: [SpotController],
  providers: [SpotService, JwtStrategy]
})
export class SpotModule { }
