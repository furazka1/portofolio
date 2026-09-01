//1. import library yang dibutuhkan
const express = require("express");
const dontenv = require("dotenv");
const cors = require("cors");

//2. Load file konfigurasi .env
dontenv.config();

//3. Inisialisasi aplikasi express
const app = express();
const PORT = process.env.PORT ||

//4. Middleware dasar
app.use(cors()); // Mengizinkan request dari domain lain
app.use(express.json()); // Mengizinkan request dengan format JSON
app.use(express.urlencoded({ extended: true })); // Membaca body request bertipe form-data/url-encoded

//5. Endpoint dasar (testing server)
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Selamat datan di API Portofoklio dinamis!",
        version: "1.0.0",
    });
});

// Endpoint untuk cek status API    
app.get('/api/status', (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running",
        version: "1.0.0",
    });
});

//6. Middleware untuk menangani route yang tidak di temukan (404 not found)
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint tidak ditemukan",
    });
});

//7. Menjalankan server
app.listen(PORT, () => {
    console.log(`=============================`);
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log(`Enviroment: ${process.env.NODE_ENV || "development"}`);
    console.log(`=============================`);
});