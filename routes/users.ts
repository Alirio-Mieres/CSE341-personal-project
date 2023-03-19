import { Router } from 'express';
import { createUser, deleteUser, findAll, findOne, updateUser } from '../controllers/user';
import {
  createUserValidation,
  deleteUserValidation,
  findOneValidation,
  updateUserValidation
} from '../helpers/user';
import { validateFields } from '../helpers/validator';
import { validateJWT } from '../middelware/validate-jwt';
import { isAdminRole } from '../middelware/validate-roles';
const userRouter = Router();

userRouter.get('/', [validateJWT, isAdminRole, validateFields], findAll);
userRouter.get('/:id', findOneValidation, findOne);
userRouter.post('/', createUserValidation, createUser);
userRouter.put('/:id', updateUserValidation, updateUser);
userRouter.delete('/:id', deleteUserValidation, deleteUser);

export default userRouter;
