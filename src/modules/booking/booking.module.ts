import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { authConfig } from '@config/auth.config'
import { JwtStrategy } from '@shared/providers/jwt/jwt.provider'

import { BookingController } from './controllers/booking.controller'
import { Booking } from './entities/booking.entity'
import { BookingService } from './services/booking.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking]),
    JwtModule.register(authConfig.jwt)
  ],
  controllers: [BookingController],
  providers: [BookingService, JwtStrategy]
})
export class BookingModule { }
