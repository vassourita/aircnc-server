import { Strategy } from 'passport-jwt';
import { ITokenPayloadDTO } from '@modules/user/dtos/token-payload.dto';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: ITokenPayloadDTO): Promise<{
        userId: string;
    }>;
}
export {};
