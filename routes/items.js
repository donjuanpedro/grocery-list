const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ItemModel = require('../models/ItemModel.js');


router.get('/', function(req, res, next) {
  ItemModel.find((err, items) => {
    res.render('index.ejs', { items });
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  const item = new ItemModel({
    name: req.body.name,
    quantity: Number(req.body.quantity)
  });
  item.save((err, item) => {
    res.redirect('/');
  });
});

module.exports = router;
