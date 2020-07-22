import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

import { Spot } from '@modules/spot/entities/spot.entity'
import { User } from '@modules/user/entities/user.entity'

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('timestamp')
  date: string

  @Column('boolean', { default: null })
  approved: boolean

  @Column('uuid')
  userId: string

  @ManyToOne(() => User, user => user.bookings)
  @JoinColumn({ name: 'userId' })
  user: User

  @Column('uuid')
  spotId: string

  @ManyToOne(() => Spot, spot => spot.bookings)
  @JoinColumn({ name: 'spotId' })
  spot: Spot

  @CreateDateColumn()
  createdAt: string
}
