import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { ICreateUserDTO } from '../dtos/create-user.dto'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOneById(id: string): Promise<User> {
    return this.usersRepository.findOne(id)
  }

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { email },
      select: ['email', 'password', 'id']
    })
  }

  async create(model: ICreateUserDTO): Promise<User> {
    const user = this.usersRepository.create(model)
    await this.usersRepository.save(user)
    delete user.password
    return user
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
