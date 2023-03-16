"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.findAll = exports.findOne = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint create a user'
    const body = req.body;
    const user = new user_1.default(body);
    const salt = bcryptjs_1.default.genSaltSync();
    user.password = bcryptjs_1.default.hashSync(body.password, salt);
    yield user.save();
    res.status(201).json(user);
    /* #swagger.parameters['User'] = {
          in: 'body',
          description: 'User Information',
          required: true,
          schema: {
            $firstName:"Alirio",
            $lastName:"Mieres",
            $email:"andres@test.com",
            $password: "$ecretPassword",
            $birthday:"06/19/2000",
            $phone:"1234567890",
            $address:"Calle 123"
          }
        }
      */
});
exports.createUser = createUser;
const findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Users']
    const { id } = req.params;
    const user = yield user_1.default.findById(id);
    if (!user)
        return res.status(404).send({ msg: 'User not found' });
    res.status(200).json(user);
});
exports.findOne = findOne;
const findAll = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint get all users'
    try {
        const users = yield user_1.default.find();
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        });
    }
});
exports.findAll = findAll;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint delete a user'
    const { id } = req.params;
    yield user_1.default.findByIdAndDelete(id);
    res.status(200).send({
        msg: 'User deleted'
    });
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint update a user'
    const { id } = req.params;
    const _a = req.body, { _id, email } = _a, data = __rest(_a, ["_id", "email"]);
    const user = yield user_1.default.findByIdAndUpdate(id, data);
    res.status(204).json({
        user
    });
    /* #swagger.parameters['Contact'] = {
          in: 'body',
          description: 'User Information',
          required: true,
          schema: {
            $firstName:"Alirio",
            $lastName:"Mieres",
            $birthday:"06/19/2000",
            $phone:"1234567890",
            $address:"Calle 123"
          }
        }
      */
});
exports.updateUser = updateUser;
//# sourceMappingURL=user.js.map