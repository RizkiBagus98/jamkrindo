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

router.get('/public', getPublicBerita);

// Route untuk menambahkan produk
router.post('/', authMiddleware, upload.single('image'), createBerita);

// Route untuk mendapatkan semua produk
router.get('/', authMiddleware, getAllBerita);

// Route untuk mengedit produk
router.put('/:id', authMiddleware, upload.single('image'), updateBerita);
// Tambahkan controller jika belum ada
router.get('/detail/:id', getBeritaById); // tanpa authMiddleware

// Route untuk menghapus produk
router.delete('/:id', authMiddleware, deleteBerita);

module.exports = router;
