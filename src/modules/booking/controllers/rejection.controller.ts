import { Controller, UseGuards, Post, Param } from '@nestjs/common'

import { JwtAuthGuard } from '@shared/providers/jwt/jwt.guard'

import { Booking } from '../entities/booking.entity'
import { BookingService } from '../services/booking.service'

@Controller('/bookings/:booking_id/rejections')
export class RejectionController {
  constructor(
    private bookingService: BookingService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async store(
    @Param('booking_id') bookingId
  ): Promise<Booking> {
    const booking = await this.bookingService.approveOrReject({
      approved: false,
      bookingId
    })
    return booking
  }
}
