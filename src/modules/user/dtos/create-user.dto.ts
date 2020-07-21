import { User } from '../entities/user.entity'

export type ICreateUserDTO = Omit<User, 'id' | 'createdAt'>
