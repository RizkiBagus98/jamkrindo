const adminMiddleware = (req, res, next) => {
    try {
        if (req.user && req.user.role === 'ADMIN') {
            next();
        } else {
            res.status(403).json({ message: 'Akses ditolak: Memerlukan hak Admin' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Kesalahan pada server (Admin Check)', error: error.message });
    }
};

module.exports = adminMiddleware;