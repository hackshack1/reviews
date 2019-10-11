const mongoose = require ('mongoose');

mongoose.connect('mongod://localhost/reviews',{useNewUrlParser:true});

var db = mongoose.connection;

db.on('error', console.log.error.bind(console, 'connection error'));

db.once('open',()=> console.log('DB connected'));

var reviewsSchema = new mongoose.Schema ({
    listing: {
        listingID: String,
        listingName: String,
    },
    host: {
        hostID: String,
        hostName: String,
        hostPhoto: String,
    },
    avgRating: Number,
    ratings:{
        communication: Number,
        checkIn: Number,
        location: Number,
        accuracy: Number,
        cleanliness: Number,
        value: Number,
    },
    review:[{
        customer:{
            customerID: String,
            customerName: String,
            customerPhoto: String,
        },
        ratings:{
            communication: Number,
            checkIn: Number,
            location: Number,
            accuracy: Number,
            cleanliness: Number,
            value: Number,
        },
        comments: String,
        commentDate: Date,
        response: String,
        responseDate: Date,
    }]
})

var Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports.Reviews = Reviews;
