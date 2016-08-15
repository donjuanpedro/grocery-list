const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', function(req, res, next) {
  res.redirect('/items');
});

module.exports = router;
