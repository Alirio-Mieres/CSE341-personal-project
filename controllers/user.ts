import { Request, Response } from 'express';
import User from '../models/user';

export const createUser = async (req: Request, res: Response) => {
  // #swagger.tags = ['Users']
  // #swagger.description = 'Endpoint create a user'

  const body = req.body;
  const user = new User(body);
  await user.save();

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
};

export const findOne = async (req: Request, res: Response) => {
  // #swagger.tags = ['Users']
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(user);
  res.status(200).json(user);
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
};

export const deleteUser = async (req: Request, res: Response) => {
  // #swagger.tags = ['Users']
  // #swagger.description = 'Endpoint delete a user'

  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  // #swagger.tags = ['Users']
  // #swagger.description = 'Endpoint update a user'

  try {
    const { id } = req.params;
    const data = req.body;
    const user = await User.findByIdAndUpdate(id, data);
    res.status(204).json(user);
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
          $email:"andres@test.com", 
          $birthday:"06/19/2000",
          $phone:"1234567890",
          $address:"Calle 123"
        }
      } 
    */
};
