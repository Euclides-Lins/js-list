import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('arquivo');

class PhotoController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new PhotoController();
