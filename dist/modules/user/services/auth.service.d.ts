import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    comparePassword(password: string, hashed: string): Promise<boolean>;
    hashPassword(password: string): Promise<string>;
    signToken(id: string): Promise<string>;
}
