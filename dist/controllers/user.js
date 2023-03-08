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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.findAll = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint create a user'
    const body = req.body;
    const user = new user_1.default(body);
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
          $birthday:"06/19/2000",
          $phone:"1234567890",
          $address:"Calle 123"
        }
      }
    */
});
exports.createUser = createUser;
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
    try {
        const user = yield user_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint update a user'
    try {
        const { id } = req.params;
        const data = req.body;
        const user = yield user_1.default.findByIdAndUpdate(id, data);
        res.status(204).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        });
    }
    /* #swagger.parameters['Contact'] = {
        in: 'body',
        description: 'User Information',
        required: true,
        schema: {
          $firstName:"Alirio",
          $lastName:"Mieres",
          $email:"andres@test.com",
          $birthday:"06/19/2000",
          $phone:"1234567890",
          $address:"Calle 123"
        }
      }
    */
});
exports.updateUser = updateUser;
//# sourceMappingURL=user.js.map