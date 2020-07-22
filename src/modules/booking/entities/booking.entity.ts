import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

import { Spot } from '@modules/spot/entities/spot.entity'
import { User } from '@modules/user/entities/user.entity'

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('timestamp')
  date: string

  @Column('boolean')
  approved: boolean

  @Column()
  userId: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User

  @Column()
  spotId: string

  @ManyToOne(() => Spot, spot => spot.bookings)
  @JoinColumn({ name: 'spotId' })
  spot: Spot

  @CreateDateColumn()
  createdAt: string
}
