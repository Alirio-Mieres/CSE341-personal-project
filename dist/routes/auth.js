"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const auth_2 = require("../helpers/auth");
const authRouter = (0, express_1.Router)();
authRouter.post('/login', auth_2.validateLogin, auth_1.login);
exports.default = authRouter;
//# sourceMappingURL=auth.js.map