const Pesan = require('../models/Pesan');

exports.kirimPesan = async (req, res) => {
    try {
        const {nama, email, isi} = req.body;
        const pesan = new Pesan({nama, email, isi});
        await pesan.save();
        res.status(201).json({message: 'Pesan berhasil dikirim'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Gagal menyimpan pesan'});
    }
};

exports.getAllPesan = async (req, res) => {
    try {
        const pesanList = await Pesan.find().sort({createdAt: -1}); // urutkan terbaru dulu
        res.status(200).json(pesanList);
    } catch (error) {
        console.error('Gagal mengambil data pesan:', error);
        res.status(500).json({message: 'Terjadi kesalahan saat mengambil pesan.'});
    }
};
