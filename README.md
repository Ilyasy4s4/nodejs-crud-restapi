# Aplikasi Kasir (REST API)

Project backend sederhana untuk aplikasi kasir yang dibangun menggunakan **Node.js**, **Express.js**, dan **MySQL**. API ini menyediakan fitur CRUD lengkap untuk manajemen pengguna, kategori, dan produk.

---


Sebelum menjalankan project ini, pastikan  telah menginstal:
* [Node.js](https://nodejs.org/)
* [MySQL Database](https://www.mysql.com/)

---

## Cara Menjalankan Project

### 1. Instalasi Dependencies
Buka terminal di folder project, lalu jalankan perintah:
```bash
npm install
```

### 2. Konfigurasi Database
Buat file baru bernama .env di folder root project dan masukkan konfigurasi berikut:
```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password_db_anda
DB_NAME=aplikasi_kasir
```
### 3. Setup Database (SQL)
### 4.Menjalankan Server
```
npm run dev
```
### Cara Testing di Postman
* Pilih Method (GET/POST/PUT/DELETE).
* Masukkan URL: http://localhost:3000/products.
* Untuk POST/PUT:
* Klik tab Body -> raw -> Pilih JSON.
* Masukkan data contoh:
```
{
  "category_id": 1,
  "name": "Es Teh Manis",
  "price": 5000
