var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('들어옴');
  //res.send('호랑이');
});

router.get('/tiger', function(req, res, next) {
  let age = req.query.age;
  console.log(age);
  //res.send('호랑이');
  if(age==2000){
    console.log(true);
  }
});


module.exports = router;