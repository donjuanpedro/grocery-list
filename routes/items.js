const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ItemModel = require('../models/ItemModel.js');

const Item = {
  name: [],
  quantity: 0
};

router.get('/', function(req, res, next) {
  ItemModel.find((err, items) => {
    res.render('index.ejs', { items });
  });
});

router.post('/', function(req, res, next) {
  const item = new ItemModel({
    text: req.body.item
  });

  item.save((err, item) => {
    res.redirect('/');
  });
});

module.exports = router;
