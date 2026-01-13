import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import db from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);

app.get("/api/stats", (req, res) => {
    // Satu query untuk mengambil semua hitungan sekaligus
    const sql = `
        SELECT 'products' as tabel, COUNT(*) as total FROM products
        UNION ALL
        SELECT 'categories' as tabel, COUNT(*) as total FROM categories
        UNION ALL
        SELECT 'users' as tabel, COUNT(*) as total FROM users
    `;

    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        // Mengubah hasil array menjadi objek yang mudah dibaca frontend
        const stats = {
            products: results.find(r => r.tabel === 'products')?.total || 0,
            categories: results.find(r => r.tabel === 'categories')?.total || 0,
            users: results.find(r => r.tabel === 'users')?.total || 0
        };

        res.json(stats);
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}`);
});