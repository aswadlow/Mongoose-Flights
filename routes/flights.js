var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


// ALL START WITH FLIGHTS
//GET index
router.get('/', flightsCtrl.index)

//GET new
router.get('/new', flightsCtrl.new)

//GET show
router.get('/:id', flightsCtrl.show)

// POST flights
router.post('/', flightsCtrl.create);



module.exports = router;



