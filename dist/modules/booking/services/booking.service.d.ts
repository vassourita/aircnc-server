import { Repository } from 'typeorm';
import { Spot } from '@modules/spot/entities/spot.entity';
import { IUpdateBookingDTO } from '../dtos/update-booking.dto';
import { Booking } from '../entities/booking.entity';
export declare class BookingService {
    private bookingsRepository;
    private spotsRepository;
    constructor(bookingsRepository: Repository<Booking>, spotsRepository: Repository<Spot>);
    create(model: Booking): Promise<Booking>;
    approveOrReject({ bookingId, approved }: IUpdateBookingDTO): Promise<Booking>;
}
