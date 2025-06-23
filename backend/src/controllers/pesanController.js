const Pesan = require('../models/Pesan');

exports.kirimPesan = async (req, res) => {
  try {
    const { nama, email, isi } = req.body;
    const pesan = new Pesan({ nama, email, isi });
    await pesan.save();
    res.status(201).json({ message: 'Pesan berhasil dikirim' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menyimpan pesan' });
  }
};
