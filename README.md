Aplikasi Kasir (REST API)
Project backend sederhana untuk aplikasi kasir yang dibangun menggunakan Node.js, Express.js, dan MySQL. API ini menyediakan fitur CRUD lengkap untuk manajemen pengguna, kategori, dan produk.
Sebelum menjalankan project ini, pastikan Anda telah menginstal:

Node.js (v14 atau versi terbaru)

MySQL Database

Code Editor (seperti VS Code)

Cara Menjalankan Project
Ikuti langkah-langkah berikut untuk menjalankan project di lingkungan lokal Anda:

1. Instalasi Dependencies
Buka terminal di folder project, lalu jalankan perintah berikut untuk menginstall semua library yang dibutuhkan:
npm install

2. Konfigurasi Database
Buat file baru bernama .env di folder root project. 
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password_db_anda
DB_NAME=aplikasi_kasir

3. Setup Struktur Tabel (SQL)
Jalankan query berikut di aplikasi client MySQL Anda untuk membuat database dan tabel:
CREATE DATABASE aplikasi_kasir;
USE aplikasi_kasir;

-- 1. Tabel Users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabel Categories
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 3. Tabel Products
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(150) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(id)
);

4. Menjalankan Server
Jalankan server dalam mode development:
npm run dev

Cara Testing di Postman
Metode & URL: Setel method ke GET/POST/PUT/DELETE dan masukkan URL (Contoh: http://localhost:3000/products).

Body (untuk POST/PUT):

Klik tab Body.

Pilih raw dan ubah format ke JSON.

Contoh input JSON untuk produk:
{
  "category_id": 1,
  "name": "Es Teh Manis",
  "price": 5000
}

Kirim: Klik tombol Send dan lihat respons di panel bawah.
