// express 모듈을 불러온다.
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
    req.body.mapper = 'SwToolsMapper';
    req.body.crud = 'select';
    req.body.mapper_id = 'selectSwToolList';
    next('route');
  }),
  router.post('/',function(req, res, next){
    let param = req.body;
    console.log(param);
    // p.363 22라인 해석
    console.log(param.mapper+'.xml');

    // p.363 18라인 해석
    const myBatisMapper = require('mybatis-mapper');
    console.log(typeof myBatisMapper); // object

    // 외부에서 작성한 파일 로딩하는 역할 (여러개 로딩 가능)
    myBatisMapper.createMapper(['SwToolsMapper.xml']);

    // 동일 코드
    // myBatisMapper.createMapper([param.mapper+'.xml']);

    // query문장을 작성
    let query = myBatisMapper.getStatement(
      'SwToolsMapper', // namespace설정
      'selectSwToolsList', // 실행할 쿼리문 id 설정
      {},
      {language:'sql',indent:'  '}
    );
    console.log(query);
    console.log(2);
  })
);

//------------------------------------------
var port = process.env.PORT || '5000';
app.listen(port, ()=>{console.log('listen');});

module.exports = app;