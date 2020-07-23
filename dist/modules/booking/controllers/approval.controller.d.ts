import { Booking } from '../entities/booking.entity';
import { BookingService } from '../services/booking.service';
export declare class ApprovalController {
    private bookingService;
    constructor(bookingService: BookingService);
    store(bookingId: any): Promise<Booking>;
}
