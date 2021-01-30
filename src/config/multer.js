import multer from 'multer';
import { extname, resolve } from 'path';

const randon = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'upload'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${randon}${extname(file.originalname)}`);
    },
  }),
};
