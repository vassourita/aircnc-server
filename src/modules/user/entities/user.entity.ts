import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'

import { Booking } from '@modules/booking/entities/booking.entity'
import { Spot } from '@modules/spot/entities/spot.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 80 })
  name: string

  @Column({ unique: true })
  email: string

  @Column({ length: 255 })
  password: string

  @OneToMany(() => Spot, spot => spot.user)
  spots: Spot[]

  @OneToMany(() => Booking, booking => booking.user)
  bookings: Booking[]

  @CreateDateColumn()
  createdAt: string
}
