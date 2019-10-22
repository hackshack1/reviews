const {Reviews} = require('./database/reviewModel.js');
const dummyData = require('./dummyData.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews',{useNewUrlParser:true});

var generateNewReview = (i) => {
    return new Reviews({

        listingID: i,
        host: {
            hostID: 'H00001',
            hostName: 'Jimmy',
            hostPhoto: 'photo url',
        },
        avgRating: 4.5,
        ratings:{
            communication: 4,
            checkIn: 5,
            location: 4,
            accuracy: 5,
            cleanliness: 4,
            value: 5,
        },
        reviews:dummyData()
    })
}

 async function createReviews() {
     for(var i = 0; i < 100; i++){
         console.log(i)
         await generateNewReview(i).save()
     }
     exit()
 }

var exit = () =>{
    console.log('disconnecting')
    mongoose.disconnect();
}

createReviews()