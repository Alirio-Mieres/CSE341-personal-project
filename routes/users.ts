import { Router } from 'express';
import { createUser, deleteUser, findAll, findOne, updateUser } from '../controllers/user';

const userRouter = Router();

userRouter.get('/', findAll);
userRouter.get('/:id', findOne);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
