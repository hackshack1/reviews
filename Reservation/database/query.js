const Sequelize = require('sequelize');
const model = require('./models.js');
const moment = require('moment');
const Op = Sequelize.Op;

const Listing = model.Listing;
const Reservation = model.Reservation;

const getTwoMonth = (listingId, month, callback) => {
  let start = moment()
    .date(1)
    .hour(0);
  let end = moment()
    .month(month)
    .date(31)
    .hour(0);
  Listing.findAll({
    where: { id: listingId },
    include: [
      {
        model: Reservation,
        where: {
          checkIn: {
            [Op.between]: [start, end]
          }
        }
      }
    ]
  })
    .then(data => {
      let results = [];
      data.map(ele => {
        results.push(ele.toJSON());
      });
      callback(results);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { getTwoMonth };
