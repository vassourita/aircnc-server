import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { ExtractJwt, Strategy } from 'passport-jwt'

import { authConfig } from '@config/auth.config'
import { ITokenPayloadDTO } from '@modules/user/dtos/token-payload.dto'

interface IValidationResponse {
  id: string
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authConfig.jwt.secret
    })
  }

  async validate(payload: ITokenPayloadDTO): Promise<IValidationResponse> {
    return { id: payload.id }
  }
}
