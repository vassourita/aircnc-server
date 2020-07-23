import { Request as Req } from 'express';
import { Spot } from '../entities/spot.entity';
import { SpotService } from '../services/spot.service';
export declare class SpotController {
    private spotService;
    constructor(spotService: SpotService);
    index(techs: string[]): Promise<Spot[]>;
    store(file: any, request: Req, model: Spot): Promise<Spot>;
}
