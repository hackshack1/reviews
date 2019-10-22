const express = require('express');
const moment = require('moment');
const path = require('path');
const query = require('../database/query.js');

const app = express();
const port = 3015;

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
  express.static(path.join(__dirname, '/../public'))
);

app.get('/now', (req, res) => {
  query.getRsvps(req.query.id, res.send.bind(res));
});

app.listen(port, () =>
  console.log(`Reservation Component listening on port ${port}!`)
);
