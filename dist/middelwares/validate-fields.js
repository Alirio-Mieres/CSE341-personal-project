"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaFields = void 0;
const express_validator_1 = require("express-validator");
const validaFields = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validaFields = validaFields;
//# sourceMappingURL=validate-fields.js.map