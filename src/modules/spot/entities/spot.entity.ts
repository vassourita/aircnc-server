import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

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

  @JoinColumn({ name: 'user_id' })
  userId: string

  @ManyToOne(() => User)
  user: User

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string
}
