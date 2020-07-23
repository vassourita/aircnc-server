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
exports.SpotController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_guard_1 = require("../../../shared/providers/jwt/jwt.guard");
const spot_entity_1 = require("../entities/spot.entity");
const parse_spot_techs_pipe_1 = require("../pipes/parse-spot-techs.pipe");
const spot_service_1 = require("../services/spot.service");
let SpotController = class SpotController {
    constructor(spotService) {
        this.spotService = spotService;
    }
    async index(techs) {
        const spots = await this.spotService.findByTechs(techs);
        return spots;
    }
    async store(file, request, model) {
        const userId = request.user.id;
        const spot = await this.spotService.create(Object.assign(Object.assign({}, model), { thumbnail: file.filename, userId }));
        return spot;
    }
};
__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Get('/'),
    __param(0, common_1.Query('techs', parse_spot_techs_pipe_1.ParseSpotTechsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "index", null);
__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Post('/'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('thumbnail')),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Request()),
    __param(2, common_1.Body(parse_spot_techs_pipe_1.ParseSpotTechsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, spot_entity_1.Spot]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "store", null);
SpotController = __decorate([
    common_1.Controller('/spots'),
    __metadata("design:paramtypes", [spot_service_1.SpotService])
], SpotController);
exports.SpotController = SpotController;
//# sourceMappingURL=spot.controller.js.map