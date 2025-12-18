import db from "../config/db.js";

//menampilkan data
//saya ingin menampilkan semua data user
//sql ? "SELECT * FROM users"
export const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err){
            return res.status(500).json({ message: err});
        }

        //jika tidak ada error
        res.json(results);
    });
};

//insert data
//saya ingin menyimpan data ke tabel users
//sql ? "INSERT INTO users (name, email) VALUES (?, ?)"
export const saveUser = (req, res) => {
    const {nama, email, password} = req.body;

    db.query("INSERT INTO users (nama, email, password) VALUES (?, ?, ?)", 
        [nama, email, password], 
        (err, results) => {
            //jika ada eror
            if (err){
                return res.status(500).json({ message: err});
        }
        //jika tidak ada error
        res.json({
            id: results.insertId,
            nama: nama,
            email: email,
        });
    }
 );
};

export const getUserById = (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
        if (err){
            return res.status(500).json({ message: err});
        }

        if (results.length === 0){
            return res.status(404).json({ message: "User not found"});
        }

       res.json(results[0]);
    });
};

//update data
export const updateUser = (req, res) => {
    const {id }= req.params;
    const {nama, email, password} = req.body;

    db.query(
        "UPDATE users SET nama = ?, email = ?, password = ? WHERE id = ?",
        [nama, email, password, id],
        (err, results) => {
            if (err){
                return res.status(500).json({ message: err});
            }

            res.json({ message: "User updated successfully"});
        }
    );
};

//delete data
export const deleteUser = (req, res) => {
    const {id} = req.params;

    db.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
        if (err){
            return res.status(500).json({ message: err});
        }

        res.json({ message: "User deleted successfully"});
    });
};