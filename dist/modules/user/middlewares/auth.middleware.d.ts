import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class LoggerMiddleware implements NestMiddleware {
    private jwtService;
    constructor(jwtService: JwtService);
    use(request: Request, response: Response, next: Function): void;
}
