import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { IUpdateBookingDTO } from '../dtos/update-booking.dto'
import { Booking } from '../entities/booking.entity'

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>
  ) { }

  async create(model: Booking): Promise<Booking> {
    const booking = this.bookingsRepository.create(model)
    await this.bookingsRepository.save(booking)
    return booking
  }

  async approveOrReject({ bookingId, approved }: IUpdateBookingDTO): Promise<Booking> {
    const booking = await this.bookingsRepository.findOne(bookingId)
    if (!booking) {
      throw new NotFoundException('Booking does not exists')
    }
    booking.approved = approved
    await this.bookingsRepository.save(booking)
    return booking
  }
}
