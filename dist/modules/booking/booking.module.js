"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const auth_config_1 = require("../../config/auth.config");
const jwt_provider_1 = require("../../shared/providers/jwt/jwt.provider");
const approval_controller_1 = require("./controllers/approval.controller");
const booking_controller_1 = require("./controllers/booking.controller");
const rejection_controller_1 = require("./controllers/rejection.controller");
const booking_entity_1 = require("./entities/booking.entity");
const booking_service_1 = require("./services/booking.service");
let BookingModule = class BookingModule {
};
BookingModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([booking_entity_1.Booking]),
            jwt_1.JwtModule.register(auth_config_1.authConfig.jwt)
        ],
        controllers: [booking_controller_1.BookingController, approval_controller_1.ApprovalController, rejection_controller_1.RejectionController],
        providers: [booking_service_1.BookingService, jwt_provider_1.JwtStrategy]
    })
], BookingModule);
exports.BookingModule = BookingModule;
//# sourceMappingURL=booking.module.js.map