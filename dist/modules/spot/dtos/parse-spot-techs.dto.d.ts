import { Spot } from '../entities/spot.entity';
export interface IParseSpotTechsDTO extends Omit<Spot, 'techs'> {
    techs: string;
}
