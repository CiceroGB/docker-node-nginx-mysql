import express from 'express';
import mysql from 'mysql';

const app = express();
const PORT = 3000;

const config = {
    host: 'db',
    user: 'user',
    password: 'senha',
    database: 'node'
};

const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    const names = ['Fulaninho', 'Fulaninha', 'John', 'Anne'];

    const insertPromises = names.map((name) => {
        const sql = `INSERT INTO people (name) VALUES ('${name}')`;
        return new Promise((resolve, reject) => {
            connection.query(sql, (err) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    });

    Promise.all(insertPromises)
        .then(() => {
            connection.query('SELECT * FROM people', (err, rows) => {
                if (err) {
                    console.error('Error executing query:', err);
                    res.status(500).json({ error: 'Error executing query' });
                } else {
                    const lista = rows.map((row) => `<li>${row.name}</li>`).join('');
                    const html = `<h1>Full Cycle Rocks!</h1><ul>${lista}</ul>`;
                    res.send(html);
                }
            });
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error executing query' });
        });
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
});
