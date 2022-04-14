// express 모듈을 불러온다.
var express = require('express');
// app변수로 express를 호출한다.
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var router = express.Router();
//------------------------------------------
app.use('/api/Swtool',
  router.post('/',function(req, res, next){
    console.log(1);
    next('route');
  }),
  router.post('/',function(req, res, next){
    console.log(2);
  })
);

//------------------------------------------
var port = process.env.PORT || '5000';
app.listen(port, ()=>{console.log('listen');});

module.exports = app;