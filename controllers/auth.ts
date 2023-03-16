import { Request, Response } from 'express';
// import bcryptjs from 'bcryptjs';
import User from '../models/user';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: 'User or password are incorrect'
      });
    }

    // const validatePassword = bcryptjs.compareSync(password, user.password);

    // if(!validatePassword) {
    //     return res.status(400).json({
    //         msg: "User or password are incorrect"
    //     });
    // }

    res.json('Login');
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Something went wrong'
    });
  }
};

export { login };
