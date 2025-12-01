const prisma = require('../lib/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({ message: 'Email sudah terdaftar' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role || 'USER'
            }
        });

        res.status(201).json({ message: 'Registrasi berhasil' });
    } catch (err) {
        console.error("!!! ERROR SAAT REGISTRASI !!!", err);
        res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            return res.status(401).json({ message: "Email atau password salah" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Email atau password salah" });
        }

        const token = jwt.sign(
            { id: user.id, name: user.name, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '7h' }
        );

        res.cookie('session-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 25200000,
            path: '/'
        });

        res.status(200).json({
            message: 'Login berhasil',
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        });

    } catch (err) {
        res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err.message });
    }
};

exports.logout = (req, res) => {
    res.cookie('session-token', '', {
        httpOnly: true,
        expires: new Date(0),
        path: '/'
    });
    res.status(200).json({ message: 'Logout berhasil' });
};

exports.checkAuthStatus = async (req, res) => {
    try {
        const token = req.cookies['session-token'];
        if (!token) {
            return res.status(401).json({ message: 'Tidak terotentikasi: Tidak ada token' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, name: true, email: true, role: true }
        });
        if (!user) {
            return res.status(404).json({ message: 'User tidak ditemukan' });
        }

        res.status(200).json({
            message: 'Otentikasi berhasil',
            user
        });

    } catch (err) {
        res.status(401).json({ message: 'Tidak terotentikasi: Token tidak valid', error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const userId = req.user.id; 

        const { name, email, role } = req.body;

        if (!name || !email || !role) {
            return res.status(400).json({ message: 'Nama, email, dan role diperlukan' });
        }

        if (email) {
            const existingUser = await prisma.user.findUnique({
                where: { email }
            });
            if (existingUser && existingUser.id !== userId) {
                return res.status(400).json({ message: 'Email sudah digunakan' });
            }
        }
        
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                name,
                email,
                role // Tetap izinkan edit role sesuai frontend
            },
            select: { id: true, name: true, email: true, role: true } 
        });

        res.status(200).json({
            message: 'Update profil berhasil',
            user: updatedUser
        });

    } catch (err) {
        console.error("!!! ERROR SAAT UPDATE USER !!!", err);
        res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err.message });
    }
};