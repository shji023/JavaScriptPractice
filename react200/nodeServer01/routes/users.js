var express = require('express');
var router = express.Router();

/* GET users listing. */
// get 요청이 오면 이 함수를 호출해라
// res : 서버 -> 클라
router.get('/', function(req, res, next) {
  res.send('호랑이');
});

router.get('/2', function(req, res, next) {
  res.send({'message':'독수리'});
});

router.post('/2', function(req, res) {
  console.log(req.body);
  console.log(req.body.name);
  req.body.name += 100;
  req.body.age += 2;
  res.send(req.body);
});


module.exports = router;
