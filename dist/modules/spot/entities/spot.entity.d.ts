import { Booking } from '@modules/booking/entities/booking.entity';
import { User } from '@modules/user/entities/user.entity';
export declare class Spot {
    id: string;
    thumbnail: string;
    company: string;
    price: number;
    techs: string[];
    userId: string;
    user: User;
    bookings: Booking[];
    createdAt: string;
}
