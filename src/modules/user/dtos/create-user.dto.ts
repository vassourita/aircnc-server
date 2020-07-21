import { User } from "../entities/user.entity";

export interface ICreateUserDTO extends Omit<User, 'id' | 'createdAt'> { }