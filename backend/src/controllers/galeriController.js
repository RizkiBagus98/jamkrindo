// controllers/galeriController.js

const Gallery = require("../models/Galeri");

// Create a gallery item
exports.createGallery = async (req, res) => {
    
  try {
    const { title, description } = req.body;
    // Middleware (multer) WAJIB digunakan agar req.file tidak undefined
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

    // Pastikan title diisi
    if (!title) {
      return res.status(400).json({ message: "Judul tidak boleh kosong." });
    }

    const newGalleryItem = new Gallery({
      title,
      description,
      imageUrl, // Nama field 'imageUrl' dipertahankan agar sesuai dengan frontend
    });

    const savedItem = await newGalleryItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    // Logging error di sisi server untuk mempermudah debug
    console.error("Error saat menyimpan item galeri:", err);
    res.status(500).json({ message: "Terjadi kesalahan di server." });
  }
};

// Update a gallery item
exports.updateGallery = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updateData = { title, description };

    // Jika ada file baru yang di-upload, perbarui imageUrl
    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updatedItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true } // Opsi untuk mengembalikan dokumen baru & menjalankan validator
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item galeri tidak ditemukan" });
    }
    res.json(updatedItem);
  } catch (err) {
    console.error(`Error saat memperbarui item galeri ${req.params.id}:`, err);
    res.status(500).json({ message: "Terjadi kesalahan di server." });
  }
};


// Fungsi lainnya (getAll, getById, delete) tetap sama
// Get all gallery items
exports.getAllGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find().sort({ createdAt: -1 });
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single gallery item
exports.getGalleryById = async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) return res.status(404).json({ message: "Item galeri tidak ditemukan" });
    res.json(galleryItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a gallery item
exports.deleteGallery = async (req, res) => {
  try {
    const deletedItem = await Gallery.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: "Item galeri tidak ditemukan" });
    
    // Di sini Anda mungkin juga ingin menghapus file dari folder /uploads
    // const fs = require('fs');
    // fs.unlinkSync(`uploads/${deletedItem.imageUrl.split('/')[2]}`);
    
    res.json({ message: "Item galeri berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};