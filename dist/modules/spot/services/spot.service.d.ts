import { Repository } from 'typeorm';
import { ICreateSpotDTO } from '../dtos/create-spot.dto';
import { Spot } from '../entities/spot.entity';
export declare class SpotService {
    private spotsRepository;
    constructor(spotsRepository: Repository<Spot>);
    findByTechs(techs: string[]): Promise<Spot[]>;
    findByUser(userId: string): Promise<Spot[]>;
    create(model: ICreateSpotDTO): Promise<Spot>;
}
