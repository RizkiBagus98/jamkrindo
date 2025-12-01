// src/controllers/userController.js

const prisma = require('../lib/prisma');
const bcrypt = require('bcryptjs');

// GET /api/users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            // Pilih hanya data yang aman untuk dikirim
            select: { id: true, name: true, email: true, role: true, createdAt: true }
        });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Gagal mengambil data users', error: err.message });
    }
};

// POST /api/users
exports.createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Validasi
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'Semua field (nama, email, password, role) wajib diisi' });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email sudah terdaftar' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role
            },
            select: { id: true, name: true, email: true, role: true, createdAt: true }
        });

        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: 'Gagal membuat user', error: err.message });
    }
};

// PUT /api/users/:id
exports.updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, role, password } = req.body;

        let dataToUpdate = { name, email, role };

        // 1. Cek jika email diubah dan sudah ada yang pakai
        if (email) {
            const existingUser = await prisma.user.findUnique({ where: { email } });
            // Jika email ada DAN ID-nya BUKAN ID user ini, maka tolak
            if (existingUser && existingUser.id !== parseInt(id)) {
                return res.status(400).json({ message: 'Email sudah digunakan user lain' });
            }
        }

        // 2. Hanya update password jika diisi
        if (password) {
            dataToUpdate.password = await bcrypt.hash(password, 10);
        }

        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: dataToUpdate,
            select: { id: true, name: true, email: true, role: true, createdAt: true }
        });

        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: 'Gagal update user', error: err.message });
    }
};

// DELETE /api/users/:id
exports.deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;

        // (Opsional) Jangan biarkan admin menghapus dirinya sendiri
        if (req.user.id === parseInt(id)) {
             return res.status(400).json({ message: 'Tidak dapat menghapus akun sendiri' });
        }

        await prisma.user.delete({
            where: { id: parseInt(id) }
        });

        res.status(204).json({ message: 'User berhasil dihapus' }); // 204 = No Content
    } catch (err) {
        res.status(500).json({ message: 'Gagal menghapus user', error: err.message });
    }
};