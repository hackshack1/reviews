const express = require('express');
const path = require('path');
const controller = require('./controllers/controller.js')
const db = require("./src/database/connection");

const bodyParser = require('body-parser')

const PORT = 3004

const app = express()
app.use(express.json())

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/reviews',(req, res)=>{
    controller.getAll(req, res);
});


app.listen(PORT, ()=> console.log(`Movie list app listening on port ${PORT}`))