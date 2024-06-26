// const express = require('express');
// const mysql = require('mysql2');
// const dotenv = require('dotenv');
//
// dotenv.config();
//
// const app = express();
// const port = process.env.PORT;
//
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });
//
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the MySQL database.');
// });
//
// app.get('/api/movies', (req, res) => {
//     db.query('SELECT * FROM movies', (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: err.message });
//         }
//         res.json(results);
//     });
// });
//
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
