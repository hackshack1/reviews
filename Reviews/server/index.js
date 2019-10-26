const express = require('express');
const path = require('path');
const controller = require('./controllers/controller.js')
const db = require('../database/connection.js');
const compression = require('compression')


const bodyParser = require('body-parser')

const PORT = 3004

const app = express()

app.use(express.json())

app.use(bodyParser.json());

app.use(compression())

// server-sent event stream
app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')

  // send a ping approx every 2 seconds
  var timer = setInterval(function () {
    res.write('data: ping\n\n')

    // !!! this is the important part
    res.flush()
  }, 2000)

  res.on('close', function () {
    clearInterval(timer)
  })
})

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

app.use(express.static(path.join(__dirname, '/../public')));

app.use(
    '/air6n6/*/listing',
    express.static(path.join(__dirname, '../public')));

app.get('/reviews',(req, res)=>{
    controller.getAll(req, res);
});

app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});




app.listen(PORT, ()=> console.log(`Review app listening on port ${PORT}`))