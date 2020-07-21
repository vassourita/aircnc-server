import { Module } from '@nestjs/common';
import { UserModule } from '@modules/user/user.module';
import { DatabaseModule } from '@shared/database/database.module';

@Module({
  imports: [UserModule, DatabaseModule],
})
export class AppModule {}
