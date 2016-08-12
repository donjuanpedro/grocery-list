const express = require('express');
const router = express.Router();
const ItemModel = require('../models/ItemModel.js');

router.get('/', (req, res, next) => {
    // Here we are asking mongoose to find TaskModels,
    // we are not passing any specifice attributes, such
    // as an id, so mongoose will find all tasks.
  ItemModel.find((err, items) => {
    // Queries are run asynchronously.
        // So we have to pass in a callback to be ran when the db query is finished
    res.render('index', {
      items: items
    });
  });
});

router.post('/', (req, res, next) => {
  const item = req.body.item;

  var item = new ItemModel({
        text : req.body.text
  });

  model.save((err, item) => {

        // Inserts are run asynchronously.
        // So we have to pass in a callback to be ran when the insert is finished
    res.redirect('/items');
  });
});

module.exports = router;
