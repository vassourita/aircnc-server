import { sign, verify } from 'jsonwebtoken';
import { Injectable } from "@nestjs/common";
import { authConfig } from '@config/auth.config';
import { TokenPayloadDTO } from '../dtos/token-payload.dto';

@Injectable()
export class TokenService {
  generateToken(id: string): string {
    const token = sign({ id }, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn,
    });
    return token;
  }

  decodeAuthorization(auth: string): string {
    if (!auth) {
      throw new Error()
    }

    const parts = auth.split(' ');
    if (!(parts.length === 2)) {
      throw new Error()
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
      throw new Error()
    }

    try {
      const payload = <TokenPayloadDTO>verify(token, authConfig.jwt.secret as string);

      return payload.id;
    } catch {
      return null;
    }
  }
}