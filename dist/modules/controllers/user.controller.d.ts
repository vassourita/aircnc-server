import { User } from '../user/entities/user.entity';
import { UserService } from '../user/services/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    index(): Promise<User[]>;
    show(id: string): Promise<User>;
    store(model: User): Promise<User>;
}
