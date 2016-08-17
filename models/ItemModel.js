const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  'item' : {
    name: String,
    quantity: Number
  }
});

module.exports = mongoose.model('item', itemSchema);
