"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const upload_config_1 = require("../../config/upload.config");
const booking_module_1 = require("../../modules/booking/booking.module");
const spot_module_1 = require("../../modules/spot/spot.module");
const user_module_1 = require("../../modules/user/user.module");
const database_module_1 = require("../database/database.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(cors_1.default(), helmet_1.default({ hidePoweredBy: true }), morgan_1.default('dev'))
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            spot_module_1.SpotModule,
            booking_module_1.BookingModule,
            database_module_1.DatabaseModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: upload_config_1.uploadConfig.dir,
                serveRoot: '/files'
            })
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map