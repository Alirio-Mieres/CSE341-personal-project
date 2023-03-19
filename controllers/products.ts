import Product from '../models/product';
import { Response, Request } from 'express';

export const findProducts = async (req: Request, res: Response) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint to get all products'
  try {
    const products = await Product.find();
    return res.status(200).json({
      products
    });
  } catch (error) {
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
};

export const findOneProduct = async (req: Request, res: Response) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint get one product'
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    if (!product) {
      throw new Error('Product not found');
    }

    return res.status(200).json({
      product
    });
  } catch (error) {
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
};

export const createProduct = async (req: Request, res: Response) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint create a product'

  try {
    const body = req.body;

    // console.log(body)

    const productDB = await Product.findOne({ name: body.name });
    console.log(productDB);

    if (productDB) {
      return res.status(400).json({
        msg: `The product ${productDB.nombre}, already exist`
      });
    }

    const data = {
      ...body,
      name: body.name.toUpperCase()
    };

    const product = new Product(data);

    // console.log(product)
    await product.save();

    res.status(201).json(product);
  } catch (error) {
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
};

export const updateProduct = async (req: Request, res: Response) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint update a product'
  try {
    const { id } = req.params;
    const data = req.body;

    if (data.name) {
      data.name = data.name.toUpperCase();
    }

    const product = await Product.findByIdAndUpdate(id, data, { new: true });

    res.status(204).json(product);
  } catch (error) {
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
};

export const deleteProduct = async (req: Request, res: Response) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint delete a product'
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      throw new Error('Product not found');
    }

    res.json(product);
  } catch (error) {
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
};
