const fs = require('fs');
const path = require('path');
const Berita = require('../models/Berita');

exports.createBerita = async (req, res) => {
    try {
        const {title, description, createdAt} = req.body;
        const imagePath = req.file ? `/images/${req.file.filename}` : '';

        const newBerita = new Berita({
            title,
            description,
            createdAt,
            image: imagePath,
        });

        const saved = await newBerita.save();
        res.status(201).json(saved);
    } catch (err) {
        console.error('Error saat menyimpan berita:', err);
        res.status(400).json({message: err.message});
    }
};

exports.getAllBerita = async (req, res) => {
    try {
        const berita = await Berita.find();
        res.json(berita);
    } catch (err) {
        console.error('Error saat mengambil berita:', err);
        res.status(500).json({message: err.message});
    }
};

exports.updateBerita = async (req, res) => {
    try {
        const beritaId = req.params.id;
        const {title, description, createdAt} = req.body;

        const existingBerita = await Berita.findById(beritaId);
        if (!existingBerita) {
            return res.status(404).json({message: 'Berita tidak ditemukan'});
        }

        // Hapus gambar lama jika ada gambar baru
        if (req.file && existingBerita.image) {
            const oldImagePath = path.join(__dirname, '../../public', existingBerita.image);
            fs.unlink(oldImagePath, (err) => {
                if (err) console.error('Gagal menghapus gambar lama:', err);
            });
        }

        // Update data
        existingBerita.title = title;
        existingBerita.description = description;
        existingBerita.createdAt = createdAt;
        if (req.file) {
            existingBerita.image = `/images/${req.file.filename}`;
        }

        await existingBerita.save();
        res.status(200).json(existingBerita);
    } catch (error) {
        console.error('Error saat update berita:', error);
        res.status(500).json({message: 'Gagal memperbarui berita'});
    }
};

exports.deleteBerita = async (req, res) => {
    try {
        const beritaId = req.params.id;

        const berita = await Berita.findById(beritaId);
        if (!berita) {
            return res.status(404).json({message: 'Berita tidak ditemukan'});
        }

        // Hapus gambar
        if (berita.image) {
            const imagePath = path.join(__dirname, '../../public', berita.image);
            fs.unlink(imagePath, (err) => {
                if (err) console.error('Gagal menghapus gambar:', err);
            });
        }

        await Berita.findByIdAndDelete(beritaId);
        res.status(200).json({message: 'Berita berhasil dihapus'});
    } catch (error) {
        console.error('Error saat hapus berita:', error);
        res.status(500).json({message: 'Gagal menghapus berita'});
    }
};

exports.getPublicBerita = async (req, res) => {
    try {
        const berita = await Berita.find();
        res.json(berita);
    } catch (err) {
        console.error('Error saat ambil berita publik:', err);
        res.status(500).json({message: 'Gagal mengambil berita publik'});
    }
};

exports.getBeritaById = async (req, res) => {
    try {
        const berita = await Berita.findById(req.params.id);
        if (!berita) return res.status(404).json({message: 'Berita tidak ditemukan'});
        res.status(200).json(berita);
    } catch (err) {
        res.status(500).json({message: 'Gagal mengambil detail berita'});
    }
};
