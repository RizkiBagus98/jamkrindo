const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/auth');
const beritaRoutes = require('./src/routes/berita');
const pesanRoutes = require('./src/routes/pesan');
const cors = require('cors');
const path = require('path');  // Pastikan path di-import

dotenv.config();
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Menyajikan file statis dari folder 'public/images'
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/berita', beritaRoutes);
app.use('/api/pesan', pesanRoutes);

// Database Connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT || 5000, () => console.log('Server sedang berjalan ...')))
    .catch((err) => console.error(err));
