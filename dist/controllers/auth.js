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
exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const generate_jwt_1 = require("../helpers/generate-jwt");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Login']
    // #swagger.description = 'Login user'
    const { email, password } = req.body;
    try {
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: 'User or password are incorrect'
            });
        }
        const validatePassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validatePassword) {
            return res.status(400).json({
                msg: 'User or password are incorrect'
            });
        }
        const token = yield (0, generate_jwt_1.generateJWT)(user.id);
        res.json({
            user,
            token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong'
        });
    }
    /* #swagger.parameters['Product'] = {
          in: 'body',
          description: 'Product Information',
          required: true,
          schema: {
            $email:"test1@gmail.com",
            $password:"12345",
            
          }
        }
      */
});
exports.login = login;
//# sourceMappingURL=auth.js.map