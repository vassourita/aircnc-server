import { Request as Req } from 'express';
import { Booking } from '../entities/booking.entity';
import { BookingService } from '../services/booking.service';
export declare class BookingController {
    private bookingService;
    constructor(bookingService: BookingService);
    store(request: Req, model: Booking, spotId: string): Promise<Booking>;
}
