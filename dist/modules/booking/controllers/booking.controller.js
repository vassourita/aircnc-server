"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../../shared/providers/jwt/jwt.guard");
const booking_entity_1 = require("../entities/booking.entity");
const booking_service_1 = require("../services/booking.service");
let BookingController = class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    async store(request, model, spotId) {
        const userId = request.user.id;
        const booking = await this.bookingService.create(Object.assign(Object.assign({}, model), { userId,
            spotId }));
        return booking;
    }
};
__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Post('/'),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __param(2, common_1.Param('spot_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, booking_entity_1.Booking, String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "store", null);
BookingController = __decorate([
    common_1.Controller('/spots/:spot_id/bookings'),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingController);
exports.BookingController = BookingController;
//# sourceMappingURL=booking.controller.js.map