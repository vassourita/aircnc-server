import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Spot } from '../entities/spot.entity'
import { ICreateSpotDTO } from '../dtos/create-spot.dto'

@Injectable()
export class SpotService {
  constructor(
    @InjectRepository(Spot)
    private SpotsRepository: Repository<Spot>
  ) { }

  findByTechs(techs: string[]): Promise<Spot[]> {
    return this.SpotsRepository
      .createQueryBuilder()
      .where('techs::text[] @> (:techs)::text[]', { techs })
      .getMany()
  }

  async create(model: ICreateSpotDTO): Promise<Spot> {
    const spot = this.SpotsRepository.create(model)
    await this.SpotsRepository.save(spot)
    return spot
  }
}
