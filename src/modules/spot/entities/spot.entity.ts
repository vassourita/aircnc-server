import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { User } from '@modules/user/entities/user.entity'

@Entity('spots')
export class Spot {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  thumbnail: string

  @Column()
  company: string

  @Column('decimal')
  price: number

  @Column('text', { array: true })
  techs: string[]

  @ManyToOne(() => User)
  user: User

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string
}
