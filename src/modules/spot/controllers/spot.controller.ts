import { Controller, Get, Body, UseGuards, Post, UseInterceptors, UploadedFile } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Spot } from '../entities/spot.entity'
import { SpotService } from '../services/spot.service'
import { JwtAuthGuard } from '@shared/providers/jwt/jwt.guard'

@Controller('/spots')
export class SpotController {
  constructor(
    private spotService: SpotService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async index(
    @Body('techs') techs: string
  ): Promise<Spot[]> {
    const techList = techs.split(',').map(s => s.trim())
    const spots = await this.spotService.findByTechs(techList)
    return spots
  }

  @Post('/')
  @UseInterceptors(FileInterceptor('thumbnail'))
  async store(@UploadedFile() file: any): Promise<void> {
    console.log(file)
  }
}
