import { compare, hash } from 'bcryptjs';
import { Injectable } from "@nestjs/common";
import { authConfig } from '@config/auth.config';

@Injectable()
export class AuthService {
  comparePassword(password: string, hashed: string): Promise<boolean> {
    return compare(password, hashed);
  }

  hashPassword(password: string): Promise<string> {
    return hash(password, authConfig.auth.saltRounds);
  }
}