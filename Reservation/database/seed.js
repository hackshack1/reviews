const Sequelize = require('sequelize');
const config = require('../config.js');
const faker = require('faker');

const db = new Sequelize('air6n6', 'root', config.sqlPW || '', {
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
  basePrice: {
    type: Sequelize.INTERGER,
    allowNull: false
  },
  cleaningFee: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  serviceFee: {
    type: Sequelize.INTERGER,
    allowNull: false
  },
  minStay: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  maxStay: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  instantBooked: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  maxGuest: {
    type: Sequelize.INTERGER
  }
});

const Reservation = db.define('reservation', {
  id: {
    type: Sequelize.BOOLEAN,
    autoIncrement: true,
    primaryKey: true
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

Listing.hasMany(Reservation, { as: 'Reservations' });

//example query & record creation:
let createRecords = () => {
  Listing.sync()
    .then(() =>
      Listing.create({
        name: 'LA'
      })
    )
    .then(() => Listing.findOne({ name: 'LA' }))
    .then(listing => {
      let key = listing.id;
      return Reservation.sync().then(() =>
        Reservation.create({
          checkIn: '2019-11-25',
          totalNights: 2,
          listingId: key
        })
      );
    })
    .then(() =>
      Reservation.findAll({
        where: db.where(db.fn('month', db.col('checkIn')), '11')
      })
    )
    .then(data => {
      data.map(ele => {
        console.log(ele.toJSON());
      });
    })
    .catch(err => {
      console.error(err);
    });
};

createRecords();
