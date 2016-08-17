const mongoose = require('mongoose');
const numberSchema = mongoose.Schema;

const quantitySchema = new numberSchema({
  'integer' : Number
});

module.exports = mongoose.model('quantity', quantitySchema);
