const mongoose = require('../../database/connection.js');

module.exports = {
    getAll: (req, res) => {
        mongoose.Reviews.find(err,data) => {
            if(err) {
                console.log(`Get error: ${err}`);
            } else {
                res.status(200).send(data);
            }
        }
    }
};