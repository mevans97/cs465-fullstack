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

// POST: /trips – Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
tripsAddTrip = async (req, res) => {
  try {
    const trip = await Model.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    // Successful creation
    return res.status(201).json(trip);
  } catch (err) {
    // Error during creation
    return res.status(400).json({
      message: 'Trip creation failed',
      error: err
    });
  }
};

// PUT: /trips/:tripCode - Updates a Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
tripsUpdateTrip = async (req, res) => {
  // Uncomment for debugging
  console.log(req.params);
  console.log(req.body);

  try {
    const q = await Model.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true } // Return the updated document
    ).exec();

    if (!q) {
      // Database returned no data
      return res.status(400).json({ message: 'Trip not found or update failed.' });
    } else {
      // Return resulting updated trip
      return res.status(201).json(q);
    }
  } catch (err) {
    // Catch unexpected errors
    return res.status(500).json({ message: 'Server error', error: err });
  }

  // Uncomment the following line to show results of operation on the console
  // console.log(q);
};


module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};