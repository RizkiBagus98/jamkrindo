const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma");

const authMiddleware = async (req, res, next) => {
    const token = req.cookies["session-token"];

    if (!token) {
        return res.status(401).json({
            message: "Akses ditolak. Silakan login kembali."
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                name: true,
                email: true,
                role: true
            }
        });

        if (!user) {
            return res.status(401).json({
                message: "Pengguna tidak ditemukan."
            });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Sesi tidak valid atau telah berakhir. Silakan login kembali."
        });
    }
};

module.exports = authMiddleware;
