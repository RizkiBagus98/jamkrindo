// controllers/contentController.js
const prisma = require('../lib/prisma'); // Impor Prisma Client

// Fungsi untuk MENGAMBIL data sambutan
const getSambutan = async (req, res) => {
    try {
        // Ganti SQL dengan Prisma findUnique
        const sambutan = await prisma.sambutanContent.findUnique({
            where: {
                content_key: 'sambutan_ketua',
            },
            select: {
                content_title: true,
                content_body: true,
            },
        });

        if (sambutan) {
            res.json(sambutan);
        } else {
            res.status(404).json({ message: 'Konten sambutan tidak ditemukan.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error server', error: error.message });
    }
};

// Fungsi untuk MEMPERBARUI data sambutan
const updateSambutan = async (req, res) => {
    const { content_title, content_body } = req.body;

    if (!content_title || !content_body) {
        return res.status(400).json({ message: 'Judul dan isi tidak boleh kosong.' });
    }

    try {
        await prisma.sambutanContent.upsert({
            where: {
                content_key: 'sambutan_ketua',
            },
            update: {
                content_title,
                content_body,
            },
            create: {
                content_key: 'sambutan_ketua',
                content_title,
                content_body,
            }
        });

        res.json({ message: 'Sambutan berhasil disimpan!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error server', error: error.message });
    }
};

const getVisiMisi = async (req, res) => {
    try {
        const visi = await prisma.sambutanContent.findUnique({
            where: { content_key: 'visi' },
            select: { content_body: true }
        });

        const misi = await prisma.sambutanContent.findUnique({
            where: { content_key: 'misi' },
            select: { content_body: true }
        });

        res.json({
            // Jika 'visi' belum ada, kirim string kosong
            visi: visi?.content_body || '',
            // Jika 'misi' ada, split berdasarkan newline, filter baris kosong
            misi: misi?.content_body ? misi.content_body.split('\n').filter(Boolean) : []
        });

    } catch (error) {
        console.error("Error di getVisiMisi:", error);
        res.status(500).json({ message: 'Error server', error: error.message });
    }
};

// FUNGSI BARU UNTUK MEMPERBARUI VISI & MISI
const updateVisiMisi = async (req, res) => {
    // Frontend akan mengirim 'visi' (string) dan 'misi' (string tunggal dengan \n)
    const { visi, misi } = req.body;

    if (typeof visi === 'undefined' || typeof misi === 'undefined') {
        return res.status(400).json({ message: 'Visi dan Misi tidak boleh kosong.' });
    }

    try {
        // Kita gunakan 'upsert': 
        // update jika ada, create jika tidak ada
        await prisma.$transaction([
            prisma.sambutanContent.upsert({
                where: { content_key: 'visi' },
                update: { content_body: visi },
                create: { content_key: 'visi', content_body: visi }
            }),
            prisma.sambutanContent.upsert({
                where: { content_key: 'misi' },
                update: { content_body: misi }, // Simpan sebagai satu string
                create: { content_key: 'misi', content_body: misi }
            })
        ]);

        res.json({ message: 'Visi & Misi berhasil diperbarui!' });

    } catch (error) {
        console.error("Error di updateVisiMisi:", error);
        res.status(500).json({ message: 'Error server', error: error.message });
    }
};

const getSejarah = async (req, res) => {
    try {
        const sejarah = await prisma.sambutanContent.findUnique({
            where: { content_key: 'sejarah' },
            select: { content_body: true }
        });
        
        res.json({ text: sejarah?.content_body || '' });

    } catch (error) {
        console.error("Error di getSejarah:", error);
        res.status(500).json({ message: 'Error server', error: error.message });
    }
};

const updateSejarah = async (req, res) => {
    const { text } = req.body; 

    if (typeof text === 'undefined') {
        return res.status(400).json({ message: 'Teks tidak boleh kosong.' });
    }

    try {
        await prisma.sambutanContent.upsert({
            where: { content_key: 'sejarah' },
            update: { content_body: text },
            create: { content_key: 'sejarah', content_body: text }
        });
        
        res.json({ message: 'Sejarah berhasil diperbarui!' });

    } catch (error) {
        console.error("Error di updateSejarah:", error);
        res.status(500).json({ message: 'Error server', error: error.message });
    }
};

module.exports = {
    getSambutan,
    updateSambutan,
    getVisiMisi,   
    updateVisiMisi,
    getSejarah,      
    updateSejarah
};