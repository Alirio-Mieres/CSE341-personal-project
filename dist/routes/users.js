"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const userRouter = (0, express_1.Router)();
userRouter.get('/', user_1.findAll);
userRouter.post('/', user_1.createUser);
userRouter.put('/:id', user_1.updateUser);
userRouter.delete('/:id', user_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=users.js.map