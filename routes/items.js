const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Item = {
  name:[],
  quantity:0
};

router.get('/', function(req, res, next) {
  res.render('index.ejs', { Item });
});

router.post('/', function(req, res, next) {
  const item = req.body.text;
  Item["name"].push(item);
  res.redirect('/items');
});

module.exports = router;
