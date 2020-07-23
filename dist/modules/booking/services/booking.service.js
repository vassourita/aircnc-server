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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const booking_entity_1 = require("../entities/booking.entity");
let BookingService = class BookingService {
    constructor(bookingsRepository) {
        this.bookingsRepository = bookingsRepository;
    }
    async create(model) {
        const booking = this.bookingsRepository.create(model);
        await this.bookingsRepository.save(booking);
        return booking;
    }
    async approveOrReject({ bookingId, approved }) {
        const booking = await this.bookingsRepository.findOne(bookingId);
        if (!booking) {
            throw new common_1.NotFoundException('Booking does not exists');
        }
        booking.approved = approved;
        await this.bookingsRepository.save(booking);
        return booking;
    }
};
BookingService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(booking_entity_1.Booking)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookingService);
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map