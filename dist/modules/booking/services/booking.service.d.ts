import { Repository } from 'typeorm';
import { IUpdateBookingDTO } from '../dtos/update-booking.dto';
import { Booking } from '../entities/booking.entity';
export declare class BookingService {
    private bookingsRepository;
    constructor(bookingsRepository: Repository<Booking>);
    create(model: Booking): Promise<Booking>;
    approveOrReject({ bookingId, approved }: IUpdateBookingDTO): Promise<Booking>;
}
