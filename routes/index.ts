import { Router } from 'express';
import swagger from './swagger';
import userRouter from './users';
import authRouter from './auth';
import productRouter from './products';

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/', swagger);

export default router;
