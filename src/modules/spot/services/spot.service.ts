import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { ICreateSpotDTO } from '../dtos/create-spot.dto'
import { Spot } from '../entities/spot.entity'

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

  findByUser(userId: string): Promise<Spot[]> {
    return this.spotsRepository.find({
      where: { userId }
    })
  }

  async create(model: ICreateSpotDTO): Promise<Spot> {
    const spot = this.spotsRepository.create(model)
    await this.spotsRepository.save(spot)
    return spot
  }
}
