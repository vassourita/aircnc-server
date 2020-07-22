import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { UserModule } from '@modules/user/user.module'
import { DatabaseModule } from '../database/database.module'
import { SpotModule } from '@modules/spot/spot.module'
import { uploadConfig } from '@config/upload.config'

@Module({
  imports: [
    UserModule,
    SpotModule,
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
