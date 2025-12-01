// middleware/upload.js
const multer = require('multer');
const path = require('path');

// Tentukan lokasi penyimpanan file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Pastikan folder 'uploads' ada di direktori root backend Anda
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Buat nama file yang unik untuk menghindari konflik
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Inisialisasi multer dengan konfigurasi storage
const upload = multer({storage: storage});

module.exports = upload;