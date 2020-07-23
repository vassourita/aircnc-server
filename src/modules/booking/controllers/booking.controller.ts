import { Controller, Body, UseGuards, Post, Request, Param } from '@nestjs/common'

import { Request as Req } from 'express'

import { JwtAuthGuard } from '@shared/providers/jwt/jwt.guard'

import { Booking } from '../entities/booking.entity'
import { BookingService } from '../services/booking.service'

@Controller('/spots/:spot_id/bookings')
export class BookingController {
  constructor(
    private bookingService: BookingService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async store(
    @Request() request: Req,
    @Body() model: Booking,
    @Param('spot_id') spotId: string
  ): Promise<Booking> {
    const userId = request.user.id
    const booking = await this.bookingService.create({
      ...model,
      userId,
      spotId
    })
    return booking
  }
}
