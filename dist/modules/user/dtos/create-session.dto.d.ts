import { User } from '../entities/user.entity';
export declare type ICreateSessionDTO = Omit<User, 'id' | 'createdAt' | 'name'>;
