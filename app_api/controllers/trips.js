const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// The response must include an HTML status code
// And JSON message to the requesting client
tripsList = async (req, res) => {
    const q = await Model
        .find() // no filter, return all records
        .exec();

    // Uncomment the following line to show results of query
    // console.log(q);

    if(!q) {
        // Database returned no data
        return res
            .status(404)
            .json("No trips found");
    } else {
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({ "code" : req.params.tripCode }) // Return single record
        .exec();

    // Uncomment the following line to show results of query
    // console.log(q);

    if (!q) {
        // Database returned no data
        return res
            .status(404)
            .json({ err });
    } else {
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};