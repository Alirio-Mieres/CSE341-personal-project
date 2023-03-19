import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/user';
import { generateJWT } from '../helpers/generate-jwt';

const login = async (req: Request, res: Response) => {
  // #swagger.tags = ['Login']
  // #swagger.description = 'Login user'
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: 'User or password are incorrect'
      });
    }

    const validatePassword = bcryptjs.compareSync(password, user.password);

    if (!validatePassword) {
      return res.status(400).json({
        msg: 'User or password are incorrect'
      });
    }

    const token = await generateJWT(user.id);

    res.json({
      user,
      token
    });
  } catch (error) {
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
};

export { login };
