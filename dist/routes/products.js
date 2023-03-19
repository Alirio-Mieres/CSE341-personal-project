"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../controllers/products");
const products_2 = require("../helpers/products");
const validate_jwt_1 = require("../middelware/validate-jwt");
const productRouter = (0, express_1.default)();
productRouter.get('/', [validate_jwt_1.validateJWT], products_1.findProducts);
productRouter.get('/:id', products_2.findOneProductValidation, products_1.findOneProduct);
productRouter.post('/', products_2.createProductValidation, products_1.createProduct);
productRouter.put('/:id', products_2.updateProductValidation, products_1.updateProduct);
productRouter.delete('/:id', products_2.deleteProductValidation, products_1.deleteProduct);
exports.default = productRouter;
//# sourceMappingURL=products.js.map