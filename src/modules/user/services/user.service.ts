import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../entities/user.entity'
import { ICreateUserDTO } from '../dtos/create-user.dto'

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
      where: { email }
    })
  }

  async create(model: ICreateUserDTO): Promise<User> {
    const user = this.usersRepository.create(model)
    await this.usersRepository.save(user)
    return user
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
