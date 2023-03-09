const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  src: {
    type: String,
    required: true,
  },
  cardtitle: {
    type: String,
    required: true,
  },
  cardtext: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Flight', flightSchema);