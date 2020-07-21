import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'aircnc',
  logging: 'all',
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  autoLoadEntities: true,
  synchronize: true
}
