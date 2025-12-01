const express = require('express');
const dotenv = require('dotenv');
const prisma = require('./src/lib/prisma');
const authRoutes = require('./src/routes/auth');
const beritaRoutes = require('./src/routes/berita');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const galeriRoutes = require('./src/routes/galeri');
const karyawanRoutes = require('./src/routes/karyawan');
const sambutanRoutes = require('./src/routes/sambutan');
const visiMisiRoutes = require('./src/routes/visiMisi');
const sejarahRoutes = require('./src/routes/sejarah');
const userRoutes = require('./src/routes/user')

dotenv.config();
const app = express();

// --- Middleware Setup ---
app.use(express.json());

// Konfigurasi CORS
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001"
];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS", // <-- Add this line
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization", // <-- Add this line
};

app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));
app.use(cookieParser());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// --- Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/berita', beritaRoutes);
app.use('/api/galeri', galeriRoutes);
app.use('/api/karyawan', karyawanRoutes);
app.use('/api/sambutan', sambutanRoutes);
app.use('/api/visimisi', visiMisiRoutes);
app.use('/api/sejarah', sejarahRoutes);
app.use('/api/users', userRoutes);

// Database Connect
async function startServer() {
    try {
        await prisma.$connect();
        console.log("MySQL Connected");
        app.listen(process.env.PORT || 5001, () =>
            console.log("Server sedang berjalan ...")
        );
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

startServer();