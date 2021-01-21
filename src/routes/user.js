import { Router } from 'express';
import UserController from '../controlers/UserController';

const router = new Router();

router.post('/', UserController.index);

export default router;
