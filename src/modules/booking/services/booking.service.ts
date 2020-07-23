import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { Spot } from '@modules/spot/entities/spot.entity'

import { IUpdateBookingDTO } from '../dtos/update-booking.dto'
import { Booking } from '../entities/booking.entity'

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
    @InjectRepository(Spot)
    private spotsRepository: Repository<Spot>
  ) { }

  async create(model: Booking): Promise<Booking> {
    const spot = await this.spotsRepository.findOne(model.spotId)
    if (!spot) {
      throw new NotFoundException('Spot does not exists')
    }

    if (spot.userId === model.userId) {
      throw new UnauthorizedException('You cannot create a booking with yourself')
    }

    const booking = this.bookingsRepository.create(model)
    booking.spot = spot

    await this.bookingsRepository.save(booking)

    return booking
  }

  async approveOrReject({ bookingId, approved }: IUpdateBookingDTO): Promise<Booking> {
    const booking = await this.bookingsRepository.findOne(bookingId)
    if (!booking) {
      throw new NotFoundException('Booking does not exists')
    }

    if (booking.approved !== null) {
      throw new UnauthorizedException(`This booking has already been ${booking.approved ? 'approved' : 'rejected'}`)
    }

    booking.approved = approved
    await this.bookingsRepository.save(booking)
    return booking
  }
}
