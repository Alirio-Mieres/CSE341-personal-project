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
exports.userExistById = exports.emailExists = exports.isValidRole = void 0;
const role_1 = __importDefault(require("../models/role"));
const user_1 = __importDefault(require("../models/user"));
const isValidRole = (role = '') => __awaiter(void 0, void 0, void 0, function* () {
    const verifyRole = yield role_1.default.findOne({ role });
    if (!verifyRole) {
        throw new Error(`Role ${role} not exist in DB`);
    }
});
exports.isValidRole = isValidRole;
const emailExists = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const validateEmail = yield user_1.default.findOne({ email });
    if (validateEmail) {
        throw new Error(`Email ${email} already exists`);
    }
});
exports.emailExists = emailExists;
const userExistById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findById(id);
    if (!user) {
        throw new Error(`User with ${id} not exists`);
    }
});
exports.userExistById = userExistById;
//# sourceMappingURL=db-validator.js.map