"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneValidation = exports.deleteUserValidation = exports.updateUserValidation = exports.createUserValidation = void 0;
const express_validator_1 = require("express-validator");
const db_validators_1 = require("../middelware/db-validators");
const validator_1 = require("./validator");
const createUserValidation = [
    (0, express_validator_1.check)('firstName', 'Firstname is required')
        .not()
        .isEmpty()
        .isString()
        .withMessage('Firstname must be a string'),
    (0, express_validator_1.check)('lastName', 'Lastname is required')
        .not()
        .isEmpty()
        .isString()
        .withMessage('Lastname must be a string'),
    (0, express_validator_1.check)('email', 'Email is required').isEmail(),
    (0, express_validator_1.check)('birthday', 'Birthday is required')
        .not()
        .isEmpty()
        .isString()
        .withMessage('Birthday must be a string'),
    (0, express_validator_1.check)('phone', 'Phone is required')
        .not()
        .isEmpty()
        .isString()
        .withMessage('Phone must be a string'),
    (0, express_validator_1.check)('address', 'Address is required')
        .not()
        .isEmpty()
        .isString()
        .withMessage('Address must be a string'),
    (0, express_validator_1.check)('email').custom(db_validators_1.emailExists),
    validator_1.validaFields
];
exports.createUserValidation = createUserValidation;
const updateUserValidation = [
    (0, express_validator_1.check)('id', 'Is not a mongodb id').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.userExistById),
    (0, express_validator_1.check)('firstName', 'Firstname must be a string').optional().isString(),
    (0, express_validator_1.check)('lastName', 'Lastname must be a string').optional().isString(),
    (0, express_validator_1.check)('phone', 'Phone must be a string').optional().isString(),
    (0, express_validator_1.check)('address', 'Address must be a string').optional().isString(),
    (0, express_validator_1.check)('birthday', 'Birthday must be a string').optional().isString(),
    validator_1.validaFields
];
exports.updateUserValidation = updateUserValidation;
const deleteUserValidation = [
    (0, express_validator_1.check)('id', 'Is not a mongodb id').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.userExistById),
    validator_1.validaFields
];
exports.deleteUserValidation = deleteUserValidation;
const findOneValidation = [(0, express_validator_1.check)('id', 'Is not a mongodb id').isMongoId(), validator_1.validaFields];
exports.findOneValidation = findOneValidation;
//# sourceMappingURL=user.js.map