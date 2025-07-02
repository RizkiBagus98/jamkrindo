const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    // 1. Ambil token dari cookie, BUKAN dari header
    const token = req.cookies['session-token']; // Nama cookie harus cocok

    // 2. Periksa apakah cookie berisi token
    if (!token) {
        return res.status(401).json({ message: 'Akses ditolak. Silakan login kembali.' });
    }

    try {
        // 3. Verifikasi token yang didapat dari cookie
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Cari pengguna berdasarkan ID dari token
        const user = await User.findById(decoded.id).select('-password'); // -password agar tidak ikut terkirim
        if (!user) {
            return res.status(401).json({ message: 'Pengguna tidak ditemukan.' });
        }

        // 4. Simpan data pengguna ke request dan lanjutkan
        req.user = user;
        next();
    } catch (err) {
        // Jika token tidak valid (misal: sudah expired)
        return res.status(401).json({ message: 'Sesi tidak valid atau telah berakhir. Silakan login kembali.' });
    }
};

module.exports = authMiddleware;