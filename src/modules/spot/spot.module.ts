import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { authConfig } from '@config/auth.config'
import { SpotController } from './controllers/spot.controller'
import { SpotService } from './services/spot.service'
import { Spot } from './entities/spot.entity'
import { JwtStrategy } from '@shared/providers/jwt/jwt.provider'
import { MulterModule } from '@nestjs/platform-express'
import { uploadConfig } from '@config/upload.config'

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
