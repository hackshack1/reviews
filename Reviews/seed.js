const {Reviews} = require('./database/reviewModel.js');
const dummyData = require('./dummyData.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews',{useNewUrlParser:true});

var generateNewReview = () => {
    return new Reviews({
        listingID: '000001',
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
        reviews:dummyData
        // reviews:[{
        //     customer:{
        //         customerID: 'C00001',
        //         customerName: 'Howard',
        //         customerPhoto: 'photo url',
        //     },
        //     ratings:{
        //         communication: 4,
        //         checkIn: 5,
        //         location: 4,
        //         accuracy: 5,
        //         cleanliness: 4,
        //         value: 5,
        //     },
        //     body: 'Great place to stay!',
        //     bodyDate: new Date(),
        //     response: 'Thanks for the review',
        //     responseDate: new Date(),
        // }]
    })
}

 async function createReviews() {
     for(var i = 0; i < 10; i++){
         console.log(i)
         await generateNewReview().save()
     }
     exit()
 }

var exit = () =>{
    console.log('disconnecting')
    mongoose.disconnect();
}

createReviews()