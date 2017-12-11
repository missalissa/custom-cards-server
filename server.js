require('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT;
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/v1/cards', (req, res) => {
    client.query(`SELECT * FROM cards;`)
        .then(data => res.send(data.rows))
        .catch(console.error);
});

app.post('/api/v1/cards', (req, res) => {
    console.log('---------------------------------------');
    console.log(req.body);
    client.query(`
        INSERT INTO cards (recipient, sender, content)
        VALUES ($1, $2, $3);
        `, [
            req.body.recipient,
            req.body.sender,
            req.body.content
        ])
        .then(data => res.send(data.rows))
        .catch(console.error);
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
            req.params.recipient
        ])
        .then(data => res.send(data.rows))
        .catch(console.error);
});

app.listen(PORT, () => {
    console.log(`Listening for API requests to port ${PORT}`);
});