import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Spot } from '../entities/spot.entity'
import { ICreateSpotDTO } from '../dtos/create-spot.dto'

@Injectable()
export class SpotService {
  constructor(
    @InjectRepository(Spot)
    private spotsRepository: Repository<Spot>
  ) { }

  findByTechs(techs: string[]): Promise<Spot[]> {
    return this.spotsRepository
      .createQueryBuilder()
      .where('lower(techs::text)::text[] @> (lower(:techs::text)::text[])::text[]', { techs })
      .getMany()
  }

  async create(model: ICreateSpotDTO): Promise<Spot> {
    const spot = this.spotsRepository.create(model)
    await this.spotsRepository.save(spot)
    return spot
  }
}
