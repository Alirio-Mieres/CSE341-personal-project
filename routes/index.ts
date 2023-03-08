import { Router } from "express";
import swagger from "./swagger";
import userRouter from "./users";

const router = Router();

router.use('/users', userRouter);
router.use('/', swagger);

export default router;
