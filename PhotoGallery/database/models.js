const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'crater'
}).then((connection) => {
    connection.query('CREATE DATABASE IF NOT EXISTS air6n6;');
}).then(() => {
    console.log("Connection created and database established");
}).catch(() => {
    console.log("Error connecting to database");
});

const db = new Sequelize('air6n6', 'root', 'crater', {
    dialect: 'mysql'
});

db.authenticate()
    .then(() => {
        console.log('Connected to MySQL');
    })
    .catch((error) => {
        console.error('Unable to connect', error);
    });

const UserID = db.define('user_id', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    }
});

const UserSaves = db.define('user_saves', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    saved_url: {
        type: Sequelize.STRING
    }
});

UserSaves.belongsTo(UserID);

const ListingID = db.define('listing_id', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    }
});

const ListingImages = db.define('listing_images', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    url: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
});

ListingImages.belongsTo(ListingID);

ListingID.sync();
ListingImages.sync();
UserID.sync();
UserSaves.sync();

module.exports = { ListingImages, UserSaves, UserID, ListingID };    