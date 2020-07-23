import { Repository } from 'typeorm';
import { ICreateUserDTO } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOneById(id: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    create(model: ICreateUserDTO): Promise<User>;
    remove(id: string): Promise<void>;
}
