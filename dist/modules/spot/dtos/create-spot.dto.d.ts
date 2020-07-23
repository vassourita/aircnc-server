import { Spot } from '../entities/spot.entity';
export declare type ICreateSpotDTO = Omit<Spot, 'id' | 'createdAt' | 'user'>;
