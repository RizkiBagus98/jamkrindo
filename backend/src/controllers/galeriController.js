const prisma = require("../lib/prisma");
const fs = require("fs"); // <-- Import File System module
const path = require("path"); // <-- Import Path module

// Helper function untuk menghapus file
const deleteFile = (imageUrl) => {
  if (imageUrl) {
    // Buat path absolut ke file
    // Note: Sesuaikan '..' jika struktur folder Anda berbeda
    const filePath = path.join(__dirname, '..', 'public', imageUrl); 
    
    // Hapus file
    fs.unlink(filePath, (err) => {
      if (err) {
        console.warn(`Gagal menghapus file lama: ${filePath}`, err);
      } else {
        console.log(`Berhasil menghapus file lama: ${filePath}`);
      }
    });
  }
};

exports.createGallery = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        // Pastikan req.file ada sebelum mengakses .filename
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

        if (!title) {
            return res.status(400).json({ message: "Judul tidak boleh kosong." });
        }

        const savedItem = await prisma.gallery.create({
            data: {
                title,
                description,
                imageUrl
            }
        });

        res.status(201).json(savedItem);
    } catch (err) {
        console.error("Error saat menyimpan item galeri:", err);
        res.status(500).json({ message: "Terjadi kesalahan di server." });
    }
};

exports.updateGallery = async (req, res) => {
    try {
        const id = Number(req.params.id);
        
        // Validasi ID
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID tidak valid." });
        }

        const { title, description } = req.body;
        const updateData = { title, description };

        // 1. Cari item lama untuk mendapatkan path file lama
        const oldItem = await prisma.gallery.findUnique({
            where: { id },
        });

        if (!oldItem) {
            return res.status(404).json({ message: "Item galeri tidak ditemukan." });
        }

        // 2. Jika ada file baru di-upload, tambahkan ke data & siapkan penghapusan file lama
        if (req.file) {
            updateData.imageUrl = `/uploads/${req.file.filename}`;
        }

        // 3. Update database
        const updatedItem = await prisma.gallery.update({
            where: { id },
            data: updateData
        });

        // 4. Jika update berhasil DAN ada file baru, hapus file lama
        if (req.file && oldItem.imageUrl) {
            deleteFile(oldItem.imageUrl);
        }

        res.json(updatedItem);
    } catch (err) {
        console.error("Error saat memperbarui item galeri:", err);
        // Tangani error jika item tidak ditemukan saat update
        if (err.code === 'P2025') {
            return res.status(404).json({ message: "Item untuk diperbarui tidak ditemukan." });
        }
        res.status(500).json({ message: "Terjadi kesalahan di server." });
    }
};

exports.getAllGallery = async (req, res) => {
    try {
        const gallery = await prisma.gallery.findMany({
            orderBy: { createdAt: "desc" }
        });
        res.json(gallery);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getGalleryById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        
        // Validasi ID
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID tidak valid." });
        }

        const galleryItem = await prisma.gallery.findUnique({
            where: { id }
        });

        if (!galleryItem) {
            return res.status(404).json({ message: "Item galeri tidak ditemukan" });
        }

        res.json(galleryItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteGallery = async (req, res) => {
    try {
        const id = Number(req.params.id);
        
        // Validasi ID
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID tidak valid." });
        }

        // 1. Hapus item dari DB dan dapatkan datanya
        const deletedItem = await prisma.gallery.delete({
            where: { id }
        });

        // 2. Hapus file terkait dari server
        if (deletedItem.imageUrl) {
            deleteFile(deletedItem.imageUrl);
        }

        res.json({ message: "Item galeri berhasil dihapus" });
    } catch (err) {
        console.error("Error saat menghapus item galeri:", err);
        // Tangani error jika item tidak ditemukan
        if (err.code === 'P2025') {
            return res.status(404).json({ message: "Item untuk dihapus tidak ditemukan." });
        }
        res.status(500).json({ message: err.message });
    }
};