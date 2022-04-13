var express = require('express');
var router = express.Router();

// client send >> middle >> server recv
// /?변수=값 app.use() req.query변수
router.get('/', function(req, res, next) {
  console.log(req.query.command);
  res.send(req.body);
});
// parameter 전송
// : 이 핵심
router.post('/:command', function(req, res, next) {
  console.log(req.params.command);
  res.send(req.body);
});


module.exports = router;