import { Spot } from '@modules/spot/entities/spot.entity';
import { User } from '@modules/user/entities/user.entity';
export declare class Booking {
    id: string;
    date: string;
    approved: boolean;
    userId: string;
    user: User;
    spotId: string;
    spot: Spot;
    createdAt: string;
}
