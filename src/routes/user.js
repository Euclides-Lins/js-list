import { Router } from 'express';
import UserController from '../controlers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// This routes should not exist here, but they're here just for test
// router.get('/', UserController.index);
// router.get('/:id', UserController.show);

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
