import { User } from '../entities/user.entity';
export declare type ICreateUserDTO = Omit<User, 'id' | 'createdAt'>;
