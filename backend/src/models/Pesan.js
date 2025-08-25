const mongoose = require('mongoose');

const pesanSchema = new mongoose.Schema({
    nama: {type: String, required: true},
    email: {type: String, required: true},
    isi: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Pesan', pesanSchema);
