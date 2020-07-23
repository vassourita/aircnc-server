import { Request as Req } from 'express';
import { User } from '../entities/user.entity';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
export declare class UserController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    index(): Promise<User[]>;
    show(id: string): Promise<User>;
    store(model: User): Promise<User>;
    destroy(id: string, request: Req): Promise<void>;
}
