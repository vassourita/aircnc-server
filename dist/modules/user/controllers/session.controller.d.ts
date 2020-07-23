import { ICreateSessionDTO } from '../dtos/create-session.dto';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
export declare class SessionController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    store(body: ICreateSessionDTO): Promise<{
        token: string;
    }>;
}
