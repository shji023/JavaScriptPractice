// express 모듈을 불러온다.
var express = require('express');
// app변수로 express를 호출한다.
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 중복 시 먼저 설정된 함수 실행 >> 1 출력
app.get('/tiger', 
  function(req, res, next) {
    if(req.query.value == 1){
      next(); 
    }else {
      console.log('tiger');
      res.send('호랑이');
    }
  },
  function(req, res, next) {
    console.log('lion');
    res.send('사자');
  },
  );

var port = process.env.PORT || '5000';
app.listen(port, ()=>{console.log('listen');});

module.exports = app;