import multer from 'multer';
import path from 'path';

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype.startsWith('audio/')) {
            cb(null, 'public/audio/');
        } else if (file.mimetype.startsWith('image/')) {
            cb(null, 'public/posters/');
        } else {
            cb(new Error('Invalid file type'), null);
        }
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = `${Date.now()}-${file.originalname.replace(ext, '')}${ext}`;
        cb(null, name);
    }
});

export const uploadFile = multer({ storage: storageConfig });
