"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = void 0;
const express_validator_1 = require("express-validator");
const validator_1 = require("./validator");
const validateLogin = [
    (0, express_validator_1.check)('email', 'Email is required').isEmail(),
    (0, express_validator_1.check)('password', 'Password is required').not().isEmpty(),
    validator_1.validateFields
];
exports.validateLogin = validateLogin;
//# sourceMappingURL=auth.js.map