import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload } from './interface/jwt-payload.interface';
import User from '../models/user';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('apiKey');

  if (!token) {
    return res.status(401).json({
      msg: 'No token in the request'
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY!) as JwtPayload;

    const user = await User.findById(uid);

    if (!user) {
      return res.status(401).json({
        msg: 'Token not valid - user not exist in DB'
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log({ error });
    res.status(401).json({
      msg: 'Token not valid'
    });
  }

  console.log(token);
};

export { validateJWT };
