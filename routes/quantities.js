const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const QuantityModel = require('../models/QuantityModel.js');

router.get('/', function(req, res, next) {
  QuantityModel.find((err, quantity) => {
    res.render('index.ejs', { quantity });
  });
});

router.post('/', function(req, res, next) {
  const quantity = new QuantityModel({
    number: req.body.quantity
  });
  quantity.save((err, quantity) => {
    res.redirect('/');
  });
});

module.exports = router;
