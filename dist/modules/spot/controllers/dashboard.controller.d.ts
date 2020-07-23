import { Request as Req } from 'express';
import { Spot } from '../entities/spot.entity';
import { SpotService } from '../services/spot.service';
export declare class DashboardController {
    private spotService;
    constructor(spotService: SpotService);
    index(request: Req): Promise<Spot[]>;
}
