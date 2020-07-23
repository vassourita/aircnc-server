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
exports.Spot = void 0;
const typeorm_1 = require("typeorm");
const booking_entity_1 = require("../../booking/entities/booking.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let Spot = class Spot {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Spot.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 80 }),
    __metadata("design:type", String)
], Spot.prototype, "thumbnail", void 0);
__decorate([
    typeorm_1.Column({ length: 80 }),
    __metadata("design:type", String)
], Spot.prototype, "company", void 0);
__decorate([
    typeorm_1.Column('decimal'),
    __metadata("design:type", Number)
], Spot.prototype, "price", void 0);
__decorate([
    typeorm_1.Column('varchar', { array: true, length: 80 }),
    __metadata("design:type", Array)
], Spot.prototype, "techs", void 0);
__decorate([
    typeorm_1.Column('uuid'),
    __metadata("design:type", String)
], Spot.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, user => user.spots),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Spot.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => booking_entity_1.Booking, booking => booking.spot),
    __metadata("design:type", Array)
], Spot.prototype, "bookings", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Spot.prototype, "createdAt", void 0);
Spot = __decorate([
    typeorm_1.Entity('spots')
], Spot);
exports.Spot = Spot;
//# sourceMappingURL=spot.entity.js.map