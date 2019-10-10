const Sequelize = require('sequelize');
const config = require('../config.js');
const moment = require('moment');
const faker = require('faker');
const pw = config.sqlPW || '';

const db = new Sequelize('air6n6', 'root', pw, {
  dialect: 'mysql'
});

db.authenticate()
  .then(() => {
    console.log('Connected to mysql');
  })
  .catch(error => {
    console.errror('unable to connect', error);
  });

const Listing = db.define('listing', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  basePrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  cleaningFee: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  serviceFee: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  taxes: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  minStayWeekday: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  minStayWeekdend: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  discount: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  instantBooked: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  maxGuest: {
    type: Sequelize.INTEGER
  }
});

const Reservation = db.define('reservation', {
  id: {
    type: Sequelize.BOOLEAN,
    autoIncrement: true,
    primaryKey: true
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false
  },
  checkIn: {
    type: Sequelize.DATE,
    allowNull: false
  },
  totalNights: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  guests: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Listing.hasMany(Reservation, { as: 'reservation' });
Reservation.belongsTo(Listing, { as: 'listing' });

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
