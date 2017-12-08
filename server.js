require('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg');
const cors = require('cors');

const PORT = process.env.PORT;
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();

app.use(cors());

app.get('/api/v1/cards', (req, res) => {
    client.query(`SELECT * FROM cards;`)
        .then(data => res.send(data.rows));
});

app.get('/api/v1/cards/:id', (req, res) => {
    client.query(`SELECT * FROM cards WHERE id = $1`, [req.params.id])
        .then(data => res.send(data.rows))
        .catch(console.error);
});

app.get('/api/v1/cards/:recipient', (req, res) => {
    client.query(
        `SELECT * FROM cards WHERE recipient = $1;`,
        [   
            req.params.recipient,
            req.params.recipient,
            req.params.recipient,
            req.params.recipient,
            req.params.recipient, 
            req.params.recipient,
        ])
        .then(data => res.send(data.rows));
});

app.listen(PORT, () => {
    console.log(`Listening for API requests to port ${PORT}`);
});