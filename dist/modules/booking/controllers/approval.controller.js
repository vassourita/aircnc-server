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
exports.ApprovalController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../../shared/providers/jwt/jwt.guard");
const booking_service_1 = require("../services/booking.service");
let ApprovalController = class ApprovalController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    async store(bookingId) {
        const booking = await this.bookingService.approveOrReject({
            approved: true,
            bookingId
        });
        return booking;
    }
};
__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Post('/'),
    __param(0, common_1.Param('booking_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApprovalController.prototype, "store", null);
ApprovalController = __decorate([
    common_1.Controller('/bookings/:booking_id/approvals'),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], ApprovalController);
exports.ApprovalController = ApprovalController;
//# sourceMappingURL=approval.controller.js.map