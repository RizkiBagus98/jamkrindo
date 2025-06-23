const mongoose = require('mongoose');

const beritaSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Otomatis mengisi dengan waktu sekarang saat berita dibuat
    },
});

module.exports = mongoose.model('Berita', beritaSchema);