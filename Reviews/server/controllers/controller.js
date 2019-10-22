const mongoose = require('../../database/connection.js');

module.exports = {
    getAll: (req, res) => {
        console.log(req.query.listingID)
        mongoose.Reviews.find({listingID: req.query.listingID}, (err, data) =>{
            if(err){
                console.log(`Could not retrieve data ${err}`)
            }else{
                res.status(200).send(data);
            }
        })
    }
}