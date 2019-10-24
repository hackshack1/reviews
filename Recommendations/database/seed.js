const db = require('./index.js');
const faker = require('faker');


const homeGenerator = () => {
  var homeByCity = (city, state, country) => {
    for (var i = 0; i < 10; i++) {
      let listing = [faker.lorem.word(), faker.lorem.words(5), faker.commerce.price(), faker.random.number(), faker.finance.amount(0,5,2), city, state, country, faker.image.imageUrl()];
      // db.query(`insert into homes (homeType, title, price, reviewCount, rating, city, state, country) values(${faker.lorem.word()}, ${faker.lorem.words(5)}, ${faker.commerce.price()}, ${faker.random.number()}, ${faker.finance.amount(0,5,2)});`, (err, results) => {
        // db.query(`insert into homes (homeType, title, price, reviewCount, rating) values(homeuiuu, rentme, 50, 90, 5.00);`, (err, results) => {  
      db.query(`insert into listings (homeType, title, price, reviewCount, rating, cityName, stateName, country, picture) values(?,?,?,?,?,?,?,?,?);`, listing, (err, results) => { 
      if (err) {
          console.log(err, "could not add to homes table")
        } else {
          console.log('home added')
        }
      });
    }
  }
  homeByCity("Boston", "MA", "US");
  homeByCity("Cupertino", "CA", "US");
  homeByCity("Miami", "FL", "US");
  homeByCity("Denver", "CO", "US");
  homeByCity("San Francisco", "CA", "US");
  homeByCity("Honolulu", "HI", "US");
  homeByCity("Seattle", "WA", "US");
  homeByCity("San Jose", "CA", "US");
  homeByCity("New York", "NY", "US");
  homeByCity("Los Angeles", "CA", "US")


};

homeGenerator();

var urlportion = "https://air6n6pictures.s3-us-west-1.amazonaws.com/"


const picGenerator = () => {
  for (var i = 0; i < 100; i++) {
  
    db.query(`insert into pictures (url) values();`,  (err, results) => { 
    if (err) {
        console.log(err, "could not add to pictures table")
      } else {
        console.log('pic added')
      }
    });
  }
};

picGenerator();



// const userGenerator = () => {
//   for (var i = 0; i < 100; i++) {
//     db.query(`insert into users (userName) values("${faker.internet.userName()}");`, (err, results) => { 
//     if (err) {
//         console.log(err, "could not add to users table")
//       } else {
//         console.log('username added')
//       }
//     });
//   }
// };

// userGenerator();

// const cityGenerator = () => {
//   for (var i = 0; i < 10; i++) { 
//     db.query(`insert into cities (cityName, stateName, country) values("Boston", "MA", "US");`, (err, results) => { 
//     if (err) {
//         console.log(err, "could not add Boston to cities table")
//       } else {
//         console.log('home Boston')
//       }
//     });



//pool connection