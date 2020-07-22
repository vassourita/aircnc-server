import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'

import { Spot } from '@modules/spot/entities/spot.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @OneToMany(() => Spot, spot => spot.user)
  spots: Spot[]

  @CreateDateColumn()
  createdAt: string
}
