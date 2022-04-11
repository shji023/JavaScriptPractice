var express = require('express');
var router = express.Router();

/* GET users listing. */
// get 요청이 오면 이 함수를 호출해라
// res : 서버 -> 클라
router.get('/', function(req, res, next) {
  res.send('호랑이');
});

module.exports = router;
