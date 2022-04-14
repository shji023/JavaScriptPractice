// express 모듈을 불러온다.
const { request } = require('express');
var express = require('express');
// app변수로 express를 호출한다.
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var router = express.Router();

//------------------------------------------
// mybatis
app.use('/api/Swtool',
  router.post('/',function(req, res, next){
    console.log(1);
    if(req.query.type == 'list'){
      req.body.mapper = 'SwToolsMapper';
      req.body.crud = 'select';
      req.body.mapper_id = 'selectSwToolsList';

      router.use('/',require('./dbconnect_Module'));
      next('route');
    }else if(req.query.type == 'save'){

      req.body.mapper = 'SwToolsMapper';//mybatis xml 파일명
      req.body.crud = 'insert';//select, insert, update, delete 중에 입력
      req.body.mapper_id = 'insertSwToolsInfo';

      router.use('/', require('./dbconnect_Module'));
      next('route')

    }
  }),
);

//------------------------------------------
var port = process.env.PORT || '5000';
app.listen(port, ()=>{console.log('listen');});

module.exports = app;