const Sequelize = require('sequelize');
const model = require('./models.js');
const moment = require('moment');
const faker = require('faker');

const Listing = model.Listing;
const Reservation = model.Reservation;

let createRecords = mockList => {
  Listing.sync()
    .then(() => Listing.create(mockList))
    .then(() => Listing.findOne({ where: { location: mockList.location } }))
    .then(listing => {
      let minStay = listing.minStayWeekdend;
      let key = listing.id;
      let maxGuest = listing.maxGuest;
      return Reservation.sync().then(() => {
        let currentDate = moment();

        for (let k = 0; k < 3; k++) {
          let totalNights = minStay + Math.floor(Math.random() * 5) + 1;
          Reservation.create({
            user: faker.name.findName(),
            checkIn: currentDate,
            totalNights: totalNights,
            guests: Math.floor(Math.random() * maxGuest) + 1,
            listingId: key
          });
          let days = Math.floor(Math.random() * 7) + 1;
          currentDate = currentDate.add(totalNights + days, 'd');
        }
      });
    })
    .catch(err => {
      console.error(err);
    });
};

for (let k = 0; k < 3; k++) {
  let listing = {
    location: faker.address.streetAddress(),
    basePrice: 90 + k,
    cleaningFee: 10,
    serviceFee: 5,
    taxes: 0.09,
    discount: Math.floor(Math.random() * 10) / 100,
    minStayWeekday: Math.floor(Math.random() * 4),
    minStayWeekdend: Math.floor(Math.random() * 2),
    instantBooked: Math.round(Math.random()) ? true : false,
    maxGuest: Math.floor(Math.random() * 5) + 4
  };
  createRecords(listing);
}
