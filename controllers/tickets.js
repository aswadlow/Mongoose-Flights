const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}


async function newTicket(req, res){
    const flight = await Flight.findById(req.params.id);
    console.log(flight)
    res.render('tickets/new', {title: 'title', flight})
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    req.body.flight = flight._id;
    await Ticket.create(req.body)
    res.redirect(`/flights/${flight._id}`);
  }
