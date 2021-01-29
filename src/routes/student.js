import { Router } from 'express';
import studentController from '../controlers/StudantController';

const router = new Router();

router.get('/', studentController.index);

export default router;
