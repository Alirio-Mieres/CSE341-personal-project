import { Router } from 'express';
import { login } from '../controllers/auth';
import { validateLogin } from '../helpers/auth';

const authRouter = Router();

authRouter.post('/login', validateLogin, login);

export default authRouter;
