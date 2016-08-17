const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/items');
});

router.get('/', function(req, res, next) {
  res.redirect('/quantities');
});

module.exports = router;
