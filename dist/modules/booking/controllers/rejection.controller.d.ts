import { Booking } from '../entities/booking.entity';
import { BookingService } from '../services/booking.service';
export declare class RejectionController {
    private bookingService;
    constructor(bookingService: BookingService);
    store(bookingId: any): Promise<Booking>;
}
