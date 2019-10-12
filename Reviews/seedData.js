const faker = require('faker');

var randomName = faker.name.findName();
var randomID = faker.random.uuid();
var randomAddress = faker.address.streetAddress();
var randomPhoto = faker.internet.avatar();
var randomComment = faker.lorem.paragraph();
var randomNumber = Math.floor(Math.random()*Math.floor(5));
var randomPastDate = faker.date.past();

var seed = []

for(var i = 0; i < 100; i++){
    var obj = {}
    obj.listing = {}
    obj.host = {}
    obj.avgRating = 0
    obj.ratings = {}
    obj.review = []


}
