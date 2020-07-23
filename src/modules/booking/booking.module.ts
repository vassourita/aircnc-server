import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { authConfig } from '@config/auth.config'
import { Spot } from '@modules/spot/entities/spot.entity'
import { JwtStrategy } from '@shared/providers/jwt/jwt.provider'

import { ApprovalController } from './controllers/approval.controller'
import { BookingController } from './controllers/booking.controller'
import { RejectionController } from './controllers/rejection.controller'
import { Booking } from './entities/booking.entity'
import { BookingService } from './services/booking.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, Spot]),
    JwtModule.register(authConfig.jwt)
  ],
  controllers: [BookingController, ApprovalController, RejectionController],
  providers: [BookingService, JwtStrategy]
})
export class BookingModule { }
