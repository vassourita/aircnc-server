"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadConfig = void 0;
const crypto_1 = require("crypto");
const multer_1 = require("multer");
const path_1 = require("path");
exports.uploadConfig = {
    dir: `${__dirname}/../../tmp/uploads`,
    storage: multer_1.diskStorage({
        destination: `${__dirname}/../../tmp/uploads`,
        filename: (req, file, cb) => {
            const randomName = crypto_1.randomBytes(8).toString('hex');
            return cb(null, `${randomName}${path_1.extname(file.originalname)}`);
        }
    })
};
//# sourceMappingURL=upload.config.js.map