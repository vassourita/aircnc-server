import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { UserModule } from '@modules/user/user.module'
import { DatabaseModule } from '../database/database.module'
import { SpotModule } from '@modules/spot/spot.module'

@Module({
  imports: [UserModule, SpotModule, DatabaseModule]
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
