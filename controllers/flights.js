const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

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
      const flight = await Flight.findById(req.params.id);
      const tickets = await Ticket.find({ flight: flight._id });
      res.render('flights/show', { title: 'Flight Detial', flight, tickets});
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


