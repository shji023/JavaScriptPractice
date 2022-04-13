var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('호랑이 보낸다~~');
});

router.get('/red', function(req, res, next) {
  res.send('red');
});

router.get('/blue', function(req, res, next) {
  res.send('blue');
});


module.exports = router;