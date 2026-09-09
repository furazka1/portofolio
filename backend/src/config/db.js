const mysql = require("mysql2");
require("dotenv").config();

// Membuat connection pool untuk mengelola koneksi database secara efisien
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Menggunakan promise wrapper agar bisa memakai async/await nantinya
const db = pool.promise();

// Mengetes koneksi ke database saat file ini di jalankan
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Koneksi ke database gagal:", err.message);
    } else {
        console.log("Koneksi ke database berhasil!");
        connection.release(); // Mengembalikan koneksi ke pool

    }
});

module.exports = db;
