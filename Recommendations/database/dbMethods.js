const db = require('./index.js') 

// Data is req.body
// req.body.title
//   const queryString = 
  

const getAllFromHomes = (cb) => {
  const queryString = `SELECT * FROM listings where cityName="Boston";`   
  db.query(queryString, (err, dbResObj) => {
    if (err) {
      cb(err);
    } else {
      cb(null, dbResObj);
    }
  })
}

// const getCurrListing = (cb, listingId) => {
//   const queryString = `select from listings where id="${listingId}";`
//   db.query(queryString, (err, dbResObj)=> {
//     if (err) {
//       cb(err);
//     } else {
//       cb(null, dbResObj);
//     }
//   })
// }
module.exports={getAllFromHomes: getAllFromHomes}

