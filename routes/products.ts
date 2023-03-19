import Router from 'express';
import {
  createProduct,
  deleteProduct,
  findOneProduct,
  findProducts,
  updateProduct
} from '../controllers/products';
import {
  createProductValidation,
  deleteProductValidation,
  findOneProductValidation,
  updateProductValidation
} from '../helpers/products';
import { validateJWT } from '../middelware/validate-jwt';

const productRouter = Router();

productRouter.get('/', [validateJWT], findProducts);

productRouter.get('/:id', findOneProductValidation, findOneProduct);

productRouter.post('/', createProductValidation, createProduct);

productRouter.put('/:id', updateProductValidation, updateProduct);

productRouter.delete('/:id', deleteProductValidation, deleteProduct);

export default productRouter;
