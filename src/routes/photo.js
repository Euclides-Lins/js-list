import { Router } from 'express';

import loginRequired from '../middlewares/loginRequired';
import PhotoController from '../controlers/PhotoController';

const router = new Router();

router.post('/', loginRequired, PhotoController.store);

export default router;
