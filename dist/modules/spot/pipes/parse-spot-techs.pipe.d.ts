import { PipeTransform } from '@nestjs/common';
import { IParseSpotTechsDTO } from '../dtos/parse-spot-techs.dto';
export declare class ParseSpotTechsPipe implements PipeTransform {
    transform(body: IParseSpotTechsDTO | string): string[] | {
        techs: string[];
        user: import("../../user/entities/user.entity").User;
        userId: string;
        bookings: import("../../booking/entities/booking.entity").Booking[];
        id: string;
        createdAt: string;
        thumbnail: string;
        company: string;
        price: number;
    };
}
