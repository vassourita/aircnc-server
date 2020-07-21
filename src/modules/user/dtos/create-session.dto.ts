import { User } from '../entities/user.entity'

export type ICreateSessionDTO = Omit<User, 'id' | 'createdAt' | 'name'>
