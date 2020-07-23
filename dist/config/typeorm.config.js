"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfig = void 0;
exports.typeormConfig = {
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
};
//# sourceMappingURL=typeorm.config.js.map