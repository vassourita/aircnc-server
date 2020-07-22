import { PipeTransform, Injectable } from '@nestjs/common'

import { IParseSpotTechsDTO } from '../dtos/parse-spot-techs.dto'

@Injectable()
export class ParseSpotTechsPipe implements PipeTransform {
  transform(body: IParseSpotTechsDTO | string) {
    if (typeof body === 'string') {
      return body.split(',').map(s => s.trim())
    }
    return {
      ...body,
      techs: body.techs.split(',').map(s => s.trim())
    }
  }
}
