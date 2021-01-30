import { Router } from 'express';
import multer from 'multer';
import PhotoController from '../controlers/PhotoController';
import multerConfig from '../config/multer';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('arquivo'), PhotoController.store);

export default router;
