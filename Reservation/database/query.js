const Sequelize = require('sequelize');
const moment = require('moment');
const model = require('./models.js');

const { Op } = Sequelize;

const { Listing } = model;
const { Reservation } = model;

const getRsvps = (listingId, callback) => {
  Listing.findAll({
    where: { id: listingId },
    include: [
      {
        model: Reservation
      }
    ]
  })
    .then(data => {
      const results = [];
      data.forEach(ele => {
        results.push(ele.toJSON());
      });
      callback(results);
    })
    .catch(err => {
      callback(err);
    });
};

module.exports = { getRsvps };
