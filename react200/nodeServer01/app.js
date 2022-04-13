// express 모듈을 불러온다.
var express = require('express');
// app변수로 express를 호출한다.
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var router = express.Router();
 
app.use('/tiger', 
  router.get('/',
    function(req, res, next){
      if(req.query.value == 1){
        console.log(1111);
        next('route'); // 지금 현재 라우터의 다음 라우터로 점프
      }else {
        console.log(2222);
        next();
      }
    },
    function(req, res, next){
      console.log(3333);
      res.send('앵두1');
    }),
    router.get('/',function(req,res,next){
      console.log(4444);
      res.send('앵두2');
    })
);

var port = process.env.PORT || '5000';
app.listen(port, ()=>{console.log('listen');});

module.exports = app;