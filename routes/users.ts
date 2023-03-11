import { Router } from 'express';
import { createUser, deleteUser, findAll, findOne, updateUser } from '../controllers/user';
import {
  createUserValidation,
  deleteUserValidation,
  findOneValidation,
  updateUserValidation
} from '../helpers/user';
const userRouter = Router();

userRouter.get('/', findAll);
userRouter.get('/:id', findOneValidation, findOne);
userRouter.post('/', createUserValidation, createUser);
userRouter.put('/:id', updateUserValidation, updateUser);
userRouter.delete('/:id', deleteUserValidation, deleteUser);

export default userRouter;
