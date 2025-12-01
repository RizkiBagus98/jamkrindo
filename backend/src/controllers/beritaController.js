const fs = require('fs');
const path = require('path');
const prisma = require('../lib/prisma'); // Sesuaikan path prisma client

exports.createBerita = async (req, res) => {
    try {
        const { title, description } = req.body;
        const imagePath = req.file ? `/images/${req.file.filename}` : null;

        const berita = await prisma.berita.create({
            data: {
                title,
                description,
                image: imagePath,
                createdAt: new Date()
            }
        });

        res.status(201).json(berita);
    } catch (err) {
        console.error('Error saat menyimpan berita:', err);
        res.status(400).json({ message: err.message });
    }
};

exports.getAllBerita = async (req, res) => {
    try {
        const berita = await prisma.berita.findMany();
        res.json(berita);
    } catch (err) {
        console.error('Error saat mengambil berita:', err);
        res.status(500).json({ message: err.message });
    }
};

exports.getBeritaById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const berita = await prisma.berita.findUnique({ where: { id } });

        if (!berita) return res.status(404).json({ message: 'Berita tidak ditemukan' });

        res.status(200).json(berita);
    } catch (err) {
        res.status(500).json({ message: 'Gagal mengambil detail berita' });
    }
};

exports.updateBerita = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, description } = req.body;

        const existing = await prisma.berita.findUnique({ where: { id } });

        if (!existing) {
            return res.status(404).json({ message: 'Berita tidak ditemukan' });
        }

        // Jika ada gambar baru, hapus gambar lama
        if (req.file && existing.image) {
            const oldImage = path.join(__dirname, '../../public', existing.image);
            fs.unlink(oldImage, err => {
                if (err) console.error('Gagal menghapus gambar lama:', err);
            });
        }

        const updated = await prisma.berita.update({
            where: { id },
            data: {
                title,
                description,
                image: req.file ? `/images/${req.file.filename}` : existing.image
            }
        });

        res.status(200).json(updated);
    } catch (error) {
        console.error('Error saat update berita:', error);
        res.status(500).json({ message: 'Gagal memperbarui berita' });
    }
};

exports.deleteBerita = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const berita = await prisma.berita.findUnique({ where: { id } });
        if (!berita) {
            return res.status(404).json({ message: 'Berita tidak ditemukan' });
        }

        if (berita.image) {
            const imgPath = path.join(__dirname, '../../public', berita.image);
            fs.unlink(imgPath, err => {
                if (err) console.error('Gagal menghapus gambar:', err);
            });
        }

        await prisma.berita.delete({ where: { id } });

        res.status(200).json({ message: 'Berita berhasil dihapus' });
    } catch (error) {
        console.error('Error saat hapus berita:', error);
        res.status(500).json({ message: 'Gagal menghapus berita' });
    }
};

// Public = sama seperti getAll
exports.getPublicBerita = exports.getAllBerita;
