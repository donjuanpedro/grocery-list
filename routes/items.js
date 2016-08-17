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
  const item = req.body.text;
  const model = new ItemModel({
    text: item
  });
  model.save((err, item) => {
    res.redirect('/');
  });
});

module.exports = router;
