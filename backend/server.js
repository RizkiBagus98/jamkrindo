const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/auth');
const beritaRoutes = require('./src/routes/berita');
const pesanRoutes = require('./src/routes/pesan');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const galeriRoutes = require('./src/routes/galeri');

dotenv.config();
const app = express();

// --- Middleware Setup ---
app.use(express.json());

// Konfigurasi CORS
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// --- Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/berita', beritaRoutes);
app.use('/api/pesan', pesanRoutes);
app.use('/api/galeri', galeriRoutes); // 👈 TAMBAHKAN INI

// Database Connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT || 5000, () => console.log('Server sedang berjalan ...')))
    .catch((err) => console.error(err));