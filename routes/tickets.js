var express = require('express');
var router = express.Router();

// You'll be creating this controller module next
const ticketsCtrl = require('../controllers/tickets');
  
// GET /flights/:id/tickets/new
router.get('/flights/:id/ticket/new', flightsCtrl.new);

// POST /flights/:id/tickets
router.post('/flights/:id/ticket', ticketsCtrl.create);
  
module.exports = router;