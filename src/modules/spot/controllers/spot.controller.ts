import { Controller, Get, Body, UseGuards, Post, UseInterceptors, UploadedFile, Request, Query } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

import { Request as Req } from 'express'

import { JwtAuthGuard } from '@shared/providers/jwt/jwt.guard'

import { Spot } from '../entities/spot.entity'
import { ParseSpotTechsPipe } from '../pipes/parse-spot-techs.pipe'
import { SpotService } from '../services/spot.service'

@Controller('/spots')
export class SpotController {
  constructor(
    private spotService: SpotService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async index(
    @Query('techs', ParseSpotTechsPipe) techs: string[]
  ): Promise<Spot[]> {
    const spots = await this.spotService.findByTechs(techs)
    return spots
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  @UseInterceptors(FileInterceptor('thumbnail'))
  async store(
    @UploadedFile() file: any,
    @Request() request: Req,
    @Body(ParseSpotTechsPipe) model: Spot
  ): Promise<Spot> {
    const userId = request.user.id
    const spot = await this.spotService.create({
      ...model,
      thumbnail: file.filename,
      userId
    })
    return spot
  }
}
