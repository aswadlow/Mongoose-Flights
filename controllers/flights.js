const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
}

async function index(req, res){
    const flights = await Flight.find({});
    console.log(flights)
    res.render('flights/index', { title: 'All Flights', flights });
}

async function show(req, res) {
      const flights = await Flight.findById(req.params.id);
      res.render('flights/show', { title: 'Flight Detail', flights });
    }

function newFlight(req, res){
    res.render('flights/new', { title: 'Add Flight', errorMsg: ''})
}


async function create(req, res) {
  try {
    const flight= await Flight.create(req.body);
    console.log(flight);
    res.redirect(`/flights/${flight._id}`);
  } catch(err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}