const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const query = require('../database/query.js');
const PORT = 3005;

app.get('/test', (req, res) => {
    query.retrieveAll((err, data) => {
        res.send(data);
    });
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });