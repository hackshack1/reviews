const mongoose = require('../../database/connection.js');

module.exports = {
    getAll: (req, res) => {
        console.log(`show yourself motherfucker`)
        mongoose.Reviews.find({listingID: req.query.listingID}, (err, data) =>{
            console.log(`this is id`, req.query.listingID)
            if(err){
                console.log(`Could not retrieve data ${err}`)
            }else{
                res.status(200).send(data);
                console.log(`this is the `, data)
            }
        })
    }
}