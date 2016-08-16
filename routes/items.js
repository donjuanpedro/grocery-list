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
  console.log(req.body.item);
  Item["name"].push(Item["text"]);
  Item["quantity"].push(Item[idx]);
  res.redirect('/index');
});

module.exports = router;
