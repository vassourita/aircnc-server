import { Booking } from '@modules/booking/entities/booking.entity';
import { Spot } from '@modules/spot/entities/spot.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    spots: Spot[];
    bookings: Booking[];
    createdAt: string;
}
