import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { Booking } from '../entities/booking.entity'

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>
  ) { }

  async create(model: Booking): Promise<Booking> {
    const spot = this.bookingsRepository.create(model)
    await this.bookingsRepository.save(spot)
    return spot
  }
}
