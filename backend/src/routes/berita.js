const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const {
    createBerita,
    getAllBerita,
    updateBerita,
    deleteBerita,
    getPublicBerita,
    getBeritaById
} = require('../controllers/beritaController');
const authMiddleware = require('../middlewares/authMiddleware');

// Konfigurasi penyimpanan file gambar
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({storage});


router.post('/', authMiddleware, upload.single('image'), createBerita);
router.get('/public', getPublicBerita);
router.get('/', getAllBerita);
router.put('/:id', authMiddleware, upload.single('image'), updateBerita);
router.get('/detail/:id', getBeritaById); // tanpa authMiddleware
router.delete('/:id', authMiddleware, deleteBerita);

module.exports = router;
