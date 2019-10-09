const Sequelize = require('sequelize');
const config = require('../config.js');
const schema = require('./schema.js');

const db = new Sequelize('', 'root', config.sqlPW || '', {
  dialect: 'mysql'
});

db.authenticate()
  .then(() => {
    console.log('Connected to mysql');
  })
  .catch(error => {
    console.errror('unable to connect', error);
  });