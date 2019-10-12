const express = require('express');
const path = require('path')
// const controller = require('../database/index.js');

const app = express()
const port = 9000

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.json())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

 