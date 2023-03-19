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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.findOneProduct = exports.findProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const findProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Products']
    // #swagger.description = 'Endpoint to get all products'
    try {
        const products = yield product_1.default.find();
        return res.status(200).json({
            products
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        });
    }
    /**
     * @swagger
     * /api/endpoint:
     *   get:
     *     description: Descripción del endpoint
     *     security:
     *       - apiKey: []
     *     responses:
     *       '200':
     *         description: Respuesta exitosa
     */
});
exports.findProducts = findProducts;
const findOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Products']
    // #swagger.description = 'Endpoint get one product'
    const { id } = req.params;
    try {
        const product = yield product_1.default.findById(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return res.status(200).json({
            product
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        });
    }
    /**
     * @swagger
     * /api/endpoint:
     *   get:
     *     description: Descripción del endpoint
     *     security:
     *       - apiKey: []
     *     responses:
     *       '200':
     *         description: Respuesta exitosa
     */
});
exports.findOneProduct = findOneProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Products']
    // #swagger.description = 'Endpoint create a product'
    try {
        const body = req.body;
        // console.log(body)
        const productDB = yield product_1.default.findOne({ name: body.name });
        console.log(productDB);
        if (productDB) {
            return res.status(400).json({
                msg: `The product ${productDB.nombre}, already exist`
            });
        }
        const data = Object.assign(Object.assign({}, body), { name: body.name.toUpperCase() });
        const product = new product_1.default(data);
        // console.log(product)
        yield product.save();
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({
            msg: error
        });
    }
    /* #swagger.parameters['Product'] = {
          in: 'body',
          description: 'Product Information',
          required: true,
          schema: {
            $name:"Paper",
            $price:"10.50",
            $description:"Description of the product",
            $avaible:"true"
          }
        }
      */
    /**
     * @swagger
     * /api/endpoint:
     *   get:
     *     description: Descripción del endpoint
     *     security:
     *       - apiKey: []
     *     responses:
     *       '200':
     *         description: Respuesta exitosa
     */
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Products']
    // #swagger.description = 'Endpoint update a product'
    try {
        const { id } = req.params;
        const data = req.body;
        if (data.name) {
            data.name = data.name.toUpperCase();
        }
        const product = yield product_1.default.findByIdAndUpdate(id, data, { new: true });
        res.status(204).json(product);
    }
    catch (error) {
        res.status(500).json({
            msg: error
        });
    }
    /* #swagger.parameters['Product'] = {
          in: 'body',
          description: 'Product Information',
          required: true,
          schema: {
            $name:"Cup",
            $price:"10.50",
            $description:"Description of the product",
            $avaible:"true"
          }
        }
      */
    /**
     * @swagger
     * /api/endpoint:
     *   get:
     *     description: Descripción del endpoint
     *     security:
     *       - apiKey: []
     *     responses:
     *       '200':
     *         description: Respuesta exitosa
     */
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // #swagger.tags = ['Products']
    // #swagger.description = 'Endpoint delete a product'
    try {
        const { id } = req.params;
        const product = yield product_1.default.findByIdAndDelete(id);
        if (!product) {
            throw new Error('Product not found');
        }
        res.json(product);
    }
    catch (error) {
        res.status(500).json({
            msg: error
        });
    }
    /**
     * @swagger
     * /api/endpoint:
     *   get:
     *     description: Descripción del endpoint
     *     security:
     *       - apiKey: []
     *     responses:
     *       '200':
     *         description: Respuesta exitosa
     */
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map