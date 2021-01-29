import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import studentController from '../controlers/StudantController';

const router = new Router();

router.get('/', studentController.index);
router.post('/', loginRequired, studentController.store);
router.put('/:id', loginRequired, studentController.update);
router.get('/:id', studentController.show);
router.delete('/:id', loginRequired, studentController.delete);
export default router;
