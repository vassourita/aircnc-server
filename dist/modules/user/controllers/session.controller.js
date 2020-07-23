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
exports.SessionController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../services/auth.service");
const user_service_1 = require("../services/user.service");
let SessionController = class SessionController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async store(body) {
        const user = await this.userService.findOneByEmail(body.email);
        if (!user) {
            throw new common_1.NotFoundException('User does not exists');
        }
        const isValidLogin = await this.authService.comparePassword(body.password, user.password);
        if (!isValidLogin) {
            throw new common_1.UnauthorizedException('Wrong password');
        }
        const token = await this.authService.signToken(user.id);
        return { token };
    }
};
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "store", null);
SessionController = __decorate([
    common_1.Controller('/sessions'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], SessionController);
exports.SessionController = SessionController;
//# sourceMappingURL=session.controller.js.map