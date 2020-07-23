"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
const auth_config_1 = require("../../../config/auth.config");
let TokenService = class TokenService {
    generateToken(id) {
        const token = jsonwebtoken_1.sign({ id }, auth_config_1.authConfig.jwt.secret, {
            expiresIn: auth_config_1.authConfig.jwt.expiresIn,
        });
        return token;
    }
    decodeToken(token) {
        try {
            const payload = jsonwebtoken_1.verify(token, auth_config_1.authConfig.jwt.secret);
            return payload.id;
        }
        catch (_a) {
            throw new common_1.UnauthorizedException('Token invalid');
        }
    }
};
TokenService = __decorate([
    common_1.Injectable()
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map