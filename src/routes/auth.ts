import { Router } from 'express';
import { getCurrentUser, createNewUser, authUser } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post('/register', createNewUser);
authRouter.post('/login', authUser);
authRouter.get('/me', getCurrentUser);

export { authRouter };