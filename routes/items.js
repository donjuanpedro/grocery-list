const express = require('express');
const router = express.Router();
const ItemModel = require('../models/ItemModel.js');

const itemsArray = [];

var item = new ItemModel({
      text : req.body.text
});

router.get('/', function(req, res, next) {
  ItemModel.find((err, item) {
    res.render('index', {
      items: items
    });
  });
});

router.post('/', (req, res, next) => {
  const item = req.body.item;
  itemsArray.push(item);
  item.save((err, item) => {
    res.redirect('/items');
  });
});

module.exports = router;
