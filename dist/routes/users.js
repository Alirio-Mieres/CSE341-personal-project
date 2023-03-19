"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const user_2 = require("../helpers/user");
const validator_1 = require("../helpers/validator");
const validate_jwt_1 = require("../middelware/validate-jwt");
const validate_roles_1 = require("../middelware/validate-roles");
const userRouter = (0, express_1.Router)();
userRouter.get('/', [validate_jwt_1.validateJWT, validate_roles_1.isAdminRole, validator_1.validateFields], user_1.findAll);
userRouter.get('/:id', user_2.findOneValidation, user_1.findOne);
userRouter.post('/', user_2.createUserValidation, user_1.createUser);
userRouter.put('/:id', user_2.updateUserValidation, user_1.updateUser);
userRouter.delete('/:id', user_2.deleteUserValidation, user_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=users.js.map