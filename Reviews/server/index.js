const express = require('express');
const path = require('path');
const db = require("./src/database/connection");

// const controller = require('./controllers/controller.js');
const bodyParser = require('body-parser')

const PORT = 5000

const app = express()
app.use(express.json())

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(PORT, ()=> console.log(`Movie list app listening on port ${PORT}`))