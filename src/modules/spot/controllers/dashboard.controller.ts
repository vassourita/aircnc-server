import { Controller, Get, UseGuards, Request } from '@nestjs/common'

import { Request as Req } from 'express'

import { JwtAuthGuard } from '@shared/providers/jwt/jwt.guard'

import { Spot } from '../entities/spot.entity'
import { SpotService } from '../services/spot.service'

@Controller('/dashboard')
export class DashboardController {
  constructor(
    private spotService: SpotService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async index(
    @Request() request: Req
  ): Promise<Spot[]> {
    const userId = request.user.id
    const spots = await this.spotService.findByUser(userId)
    return spots
  }
}
