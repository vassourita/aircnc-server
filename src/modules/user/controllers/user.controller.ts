import { Controller, Param, Get, Body, Post, NotFoundException, ConflictException, Delete, ParseUUIDPipe, HttpStatus, UseGuards, Request, UnauthorizedException } from '@nestjs/common'
import { User } from '../entities/user.entity'
import { UserService } from '../services/user.service'
import { AuthService } from '../services/auth.service'
import { JwtAuthGuard } from '@shared/providers/jwt/jwt.guard'
import { Request as Req } from 'express'

@Controller('/users')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  @Get('/')
  async index(): Promise<User[]> {
    const users = await this.userService.findAll()
    return users
  }

  @Get('/:id')
  async show(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: string
  ): Promise<User> {
    const user = await this.userService.findOneById(id)

    if (!user) {
      throw new NotFoundException('User does not exists')
    }

    return user
  }

  @Post('/')
  async store(@Body() model: User): Promise<User> {
    const userExists = await this.userService.findOneByEmail(model.email)
    if (userExists) {
      throw new ConflictException('Email already in use')
    }

    const hashed = await this.authService.hashPassword(model.password)

    const user = await this.userService.create({ ...model, password: hashed })

    return user
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async destroy(@Param('id') id: string, @Request() request: Req): Promise<void> {
    if (request.user.id !== id) {
      throw new UnauthorizedException('Unauthorized operation')
    }
    await this.userService.remove(id)
  }
}
