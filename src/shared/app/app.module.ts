import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'

import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { uploadConfig } from '@config/upload.config'
import { BookingModule } from '@modules/booking/booking.module'
import { SpotModule } from '@modules/spot/spot.module'
import { UserModule } from '@modules/user/user.module'

import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [
    UserModule,
    SpotModule,
    BookingModule,
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: uploadConfig.dir,
      serveRoot: '/files'
    })
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(
        cors(),
        helmet({ hidePoweredBy: true }),
        morgan('dev')
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
