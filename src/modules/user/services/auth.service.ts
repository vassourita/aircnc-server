import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { authConfig } from '@config/auth.config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) { }

  comparePassword(password: string, hashed: string): Promise<boolean> {
    return compare(password, hashed);
  }

  hashPassword(password: string): Promise<string> {
    return hash(password, authConfig.auth.saltRounds);
  }

  signToken(id: string): Promise<string> {
    return this.jwtService.signAsync({ id })
  }
}