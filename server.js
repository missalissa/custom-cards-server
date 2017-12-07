const express = require('express');
const app = express();
const pg = require('pg');

const PORT = 3000;
const connString = 'postgres://postgres:1234@localhost:5432/custom_cards';
const client = new pg.Client(connString);
client.connect();

app.get('/api/v1/cards', (req, res) => {
    client.query(`SELECT * FROM cards;`)
        .then(data => res.send(data.rows));
});

app.get('/api/v1/cards/:recipient', (req, res) => {
    client.query(`SELECT * FROM cards WHERE recipient = $1;`, [req.params.recipient])
        .then(data => res.send(data.rows));
});

app.listen(PORT, () => { 
    console.log(`Listening for API requests to port ${PORT}`);
});