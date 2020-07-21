import { Spot } from '../entities/spot.entity'

export type ICreateSpotDTO = Omit<Spot, 'id' | 'createdAt' | 'user'>
