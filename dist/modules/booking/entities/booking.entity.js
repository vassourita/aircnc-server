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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const typeorm_1 = require("typeorm");
const spot_entity_1 = require("../../spot/entities/spot.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let Booking = class Booking {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Booking.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('timestamp'),
    __metadata("design:type", String)
], Booking.prototype, "date", void 0);
__decorate([
    typeorm_1.Column('boolean', { default: null }),
    __metadata("design:type", Boolean)
], Booking.prototype, "approved", void 0);
__decorate([
    typeorm_1.Column('uuid'),
    __metadata("design:type", String)
], Booking.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, user => user.bookings),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Booking.prototype, "user", void 0);
__decorate([
    typeorm_1.Column('uuid'),
    __metadata("design:type", String)
], Booking.prototype, "spotId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => spot_entity_1.Spot, spot => spot.bookings),
    typeorm_1.JoinColumn({ name: 'spotId' }),
    __metadata("design:type", spot_entity_1.Spot)
], Booking.prototype, "spot", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Booking.prototype, "createdAt", void 0);
Booking = __decorate([
    typeorm_1.Entity('bookings')
], Booking);
exports.Booking = Booking;
//# sourceMappingURL=booking.entity.js.map