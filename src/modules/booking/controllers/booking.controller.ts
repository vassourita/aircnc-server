import { Controller, Body, UseGuards, Post, Request } from '@nestjs/common'

import { Request as Req } from 'express'

import { JwtAuthGuard } from '@shared/providers/jwt/jwt.guard'

import { Booking } from '../entities/booking.entity'
import { BookingService } from '../services/booking.service'

@Controller('/bookings')
export class BookingController {
  constructor(
    private bookingService: BookingService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async store(
    @Request() request: Req,
    @Body() model: Booking
  ): Promise<Booking> {
    const userId = request.user.id
    const spot = await this.bookingService.create({
      ...model,
      userId
    })
    return spot
  }
}
