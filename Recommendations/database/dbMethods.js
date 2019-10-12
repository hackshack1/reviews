const db = require('./index.js');
const faker = require('faker');

const homesDataGenerator = () => {
  for (var i = 0; i < 100; i++) {
    let home = [faker.lorem.word(), faker.lorem.words(5), faker.commerce.price(), faker.random.number(), faker.finance.amount(0,5,2)];
    // db.query(`insert into homes (homeType, title, price, reviewCount, rating) values(${faker.lorem.word()}, ${faker.lorem.words(5)}, ${faker.commerce.price()}, ${faker.random.number()}, ${faker.finance.amount(0,5,2)});`, (err, results) => {
      // db.query(`insert into homes (homeType, title, price, reviewCount, rating) values(homeuiuu, rentme, 50, 90, 5.00);`, (err, results) => {  
    db.query(`insert into homes (homeType, title, price, reviewCount, rating) values(?,?,?,?,?);`, home, (err, results) => { 
    if (err) {
        console.log(err, "could not add to table")
      } else {
        console.log('successssssss')
      }
    });
  }
};

homesDataGenerator();


