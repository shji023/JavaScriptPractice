var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.body);
  // 빈 객체 에다가 속성 정의해서 client에 돌려줄 수 있다.
  req.body.name='홍길동';
  req.body.salary = 3000;
  res.send(req.body);
});


module.exports = router;