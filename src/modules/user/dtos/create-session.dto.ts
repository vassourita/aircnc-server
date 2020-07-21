import { User } from "../entities/user.entity";

export interface ICreateSessionDTO extends Omit<User, 'id' | 'createdAt' | 'name'> { }