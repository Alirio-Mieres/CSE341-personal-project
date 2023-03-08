import { Router } from "express";
import { createUser, 
    deleteUser, 
    findAll,
      updateUser
     } from "../controllers/user";

const userRouter = Router();

userRouter.get('/', findAll);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
