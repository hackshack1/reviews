const Sequelize = require('sequelize');
const model = require('./models.js');
const faker = require('faker');

const ListingImages = model.ListingImages;
const UserSaves = model.UserSaves;
const ListingID = model.ListingID;
const UserID = model.UserID;

let createRecord = (table, mockData) => {
    table.sync()
        .then(() => table.create(mockData));
};

for (var i = 0; i < 3; i++) {
    let mockData = {
        id: i
    }

    createRecord(ListingID, mockData);
}

for (var i = 0; i < 3; i++) {
    let mockData = {
        url: faker.image.imageUrl(),
        description: faker.lorem.sentence(),
        listingIdId: i
    }

    createRecord(ListingImages, mockData);
}

for (var i = 0; i < 3; i++) {
    let mockData = {
        id: i
    }

    createRecord(UserID, mockData);
}

for (var i = 0; i < 3; i++) {
    let mockData = {
        saved_url: faker.image.imageUrl(),
        userIdId: i
    }

    createRecord(UserSaves, mockData);
}