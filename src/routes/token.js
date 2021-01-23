import { Router } from 'express';
import tokenController from '../controlers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
