const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  'text' : String
});

module.exports = mongoose.model('item', itemSchema);
