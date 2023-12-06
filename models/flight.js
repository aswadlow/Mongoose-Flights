const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
   airport: {
      type: String,
      enum: ['AUS', 'LAX', 'PHL', 'JFK', 'SAN'],
      required: true
   },
   arrival: {
      type: Date,
      required: true
   }
})

const flightSchema = new Schema({
   airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'Delta'],
    required: true
   },
   airport: {
    type: String,
    enum: ['AUS', 'LAX', 'PHL', 'JFK', 'SAN'],
    default: 'LAX'
   },
   flightNo: {
    type: Number,
    required: true,
    min: 1,
    max: 9999
   },
   departs: {
      type: Date,
      default: function () {
         const today = new Date();
         const year = today.getFullYear();
         const month = today.getMonth();
         const day = today.getDate();
         const finalDate = new Date(year, month, day + 365);
         return finalDate;
        }
   },
   destinations: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema);