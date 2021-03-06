import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'

import { Booking } from '@modules/booking/entities/booking.entity'
import { User } from '@modules/user/entities/user.entity'

@Entity('spots')
export class Spot {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 80 })
  thumbnail: string

  @Column({ length: 80 })
  company: string

  @Column('decimal')
  price: number

  @Column('varchar', { array: true, length: 80 })
  techs: string[]

  @Column('uuid')
  userId: string

  @ManyToOne(() => User, user => user.spots)
  @JoinColumn({ name: 'userId' })
  user: User

  @OneToMany(() => Booking, booking => booking.spot)
  bookings: Booking[]

  @CreateDateColumn()
  createdAt: string
}
