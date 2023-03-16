import { Router } from 'express';
import swagger from './swagger';
import userRouter from './users';
import authRouter from './auth';

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/', swagger);

export default router;
