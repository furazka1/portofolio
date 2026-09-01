//1. import library yang dibutuhkan
const express = require("express");
const dontenv = require("dotenv");
const cors = require("cors");

//2. Load file konfigurasi .env
dontenv.config();

//3. Inisialisasi aplikasi express
const app = express();
const PORT = process.env.PORT || 5000;

//4. Middleware dasar
app.use(cors()); // Mengizinkan request dari domain lain
app.use(express.json()); // Mengizinkan request dengan format JSON
app.use(express.urlencoded({ extended: true })); // Membaca body request bertipe form-data/url-encoded

//5. Endpoint dasar (testing server)
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});