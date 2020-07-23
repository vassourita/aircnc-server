"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const platform_express_1 = require("@nestjs/platform-express");
const typeorm_1 = require("@nestjs/typeorm");
const auth_config_1 = require("../../config/auth.config");
const upload_config_1 = require("../../config/upload.config");
const jwt_provider_1 = require("../../shared/providers/jwt/jwt.provider");
const dashboard_controller_1 = require("./controllers/dashboard.controller");
const spot_controller_1 = require("./controllers/spot.controller");
const spot_entity_1 = require("./entities/spot.entity");
const spot_service_1 = require("./services/spot.service");
let SpotModule = class SpotModule {
};
SpotModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([spot_entity_1.Spot]),
            jwt_1.JwtModule.register(auth_config_1.authConfig.jwt),
            platform_express_1.MulterModule.register({
                dest: upload_config_1.uploadConfig.dir,
                storage: upload_config_1.uploadConfig.storage
            })
        ],
        controllers: [spot_controller_1.SpotController, dashboard_controller_1.DashboardController],
        providers: [spot_service_1.SpotService, jwt_provider_1.JwtStrategy]
    })
], SpotModule);
exports.SpotModule = SpotModule;
//# sourceMappingURL=spot.module.js.map