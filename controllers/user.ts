import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/user';

export const createUser = async (req: Request, res: Response) => {
  // #swagger.tags = ['Users']
  // #swagger.description = 'Endpoint create a user'
  try {
    const body = req.body;
    const user = new User(body);

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(body.password, salt);

    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      msg: error
    });
  }

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
          $address:"Calle 123",
          $role:"USER_ROLE"
        }
      } 
    */
};

export const findOne = async (req: Request, res: Response) => {
  // #swagger.tags = ['Users']
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) return res.status(404).send({ msg: 'User not found' });

  res.status(200).json(user);

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

export const findAll = async (_: Request, res: Response) => {
  // #swagger.tags = ['Users']
  // #swagger.description = 'Endpoint get all users'

  try {
    const users = await User.find();
    res.status(200).json(users);
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

export const deleteUser = async (req: Request, res: Response) => {
  // #swagger.tags = ['Users']
  // #swagger.description = 'Endpoint delete a user'
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'User deleted'
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

export const updateUser = async (req: Request, res: Response) => {
  // #swagger.tags = ['Users']
  // #swagger.description = 'Endpoint update a user'

  try {
    const { id } = req.params;
    const { _id, email, ...data } = req.body;

    const user = await User.findByIdAndUpdate(id, data);

    res.status(204).json({
      user
    });
  } catch (error) {
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
          $birthday:"06/19/2000",
          $phone:"1234567890",
          $address:"Calle 123"
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
