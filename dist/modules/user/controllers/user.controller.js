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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../../shared/providers/jwt/jwt.guard");
const user_entity_1 = require("../entities/user.entity");
const auth_service_1 = require("../services/auth.service");
const user_service_1 = require("../services/user.service");
let UserController = class UserController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async index() {
        const users = await this.userService.findAll();
        return users;
    }
    async show(id) {
        const user = await this.userService.findOneById(id);
        if (!user) {
            throw new common_1.NotFoundException('User does not exists');
        }
        return user;
    }
    async store(model) {
        const userExists = await this.userService.findOneByEmail(model.email);
        if (userExists) {
            throw new common_1.ConflictException('Email already in use');
        }
        const hashed = await this.authService.hashPassword(model.password);
        const user = await this.userService.create(Object.assign(Object.assign({}, model), { password: hashed }));
        return user;
    }
    async destroy(id, request) {
        if (request.user.id !== id) {
            throw new common_1.UnauthorizedException('Unauthorized operation');
        }
        await this.userService.remove(id);
    }
};
__decorate([
    common_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "index", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "show", null);
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "store", null);
__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "destroy", null);
UserController = __decorate([
    common_1.Controller('/users'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map