const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');
const model = require('./models.js');

const ListingImages = model.ListingImages;
const UserSaves = model.UserSaves;
const ListingID = model.ListingID;
const UserID = model.UserID;

function retrieveAll(callback) {
    ListingImages.findAll()
        .then((result) => callback(null, result))
        .catch((error) => callback(error, null));
}

module.exports.retrieveAll = retrieveAll;

