"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductValidation = exports.updateProductValidation = exports.findOneProductValidation = exports.createProductValidation = void 0;
const express_validator_1 = require("express-validator");
const validator_1 = require("./validator");
const validate_jwt_1 = require("../middelware/validate-jwt");
const validate_roles_1 = require("../middelware/validate-roles");
exports.createProductValidation = [
    validate_jwt_1.validateJWT,
    (0, express_validator_1.check)('name', 'The name is required').not().isEmpty(),
    (0, express_validator_1.check)('price', 'The price is required').not().isEmpty().isNumeric(),
    (0, express_validator_1.check)('description', 'The description is required').not().isEmpty().isString(),
    (0, express_validator_1.check)('avaible', 'The avaible is required').not().isEmpty().isBoolean(),
    validator_1.validateFields
];
exports.findOneProductValidation = [
    validate_jwt_1.validateJWT,
    (0, express_validator_1.check)('id', 'Is not a mongo Id').isMongoId(),
    validator_1.validateFields
];
exports.updateProductValidation = [
    validate_jwt_1.validateJWT,
    (0, express_validator_1.check)('name', 'The name is required').optional().isString(),
    (0, express_validator_1.check)('price', 'The price is required').optional().isNumeric(),
    (0, express_validator_1.check)('description', 'The description is required').optional().isString(),
    (0, express_validator_1.check)('avaible', 'The avaible is required').optional().isBoolean(),
    validator_1.validateFields
];
exports.deleteProductValidation = [
    validate_jwt_1.validateJWT,
    validate_roles_1.isAdminRole,
    (0, express_validator_1.check)('id', 'Is not a mongo Id').isMongoId(),
    validator_1.validateFields
];
//# sourceMappingURL=products.js.map