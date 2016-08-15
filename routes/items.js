const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const item = {
  name:[],
  quantity:0
};

router.get('/', function(req, res, next) {
  res.render('index.ejs', { item: [] });
});

router.post('/', (req, res, next) => {
  console.log(req.body.item);
  res.redirect('/items');
});

module.exports = router;
