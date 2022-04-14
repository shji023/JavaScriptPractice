var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const { route } = require('./routes/tiger');
const con = mysql.createConnection({
  host : "database-1.cziyl6rwn9rl.ap-northeast-2.rds.amazonaws.com",
  port:"3306",
  database:"jiyoung",
  user:'admin',
  password:'12345678'
});
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
    'selectOne', // 실행할 쿼리문 id 설정
    {id:3},
    {language:'sql',indent:'  '}
  );
  console.log(query);
  console.log(2);

  try{
    con.query(
      query,
      (error,rows,fields)=>{
        console.log(rows);
        res.send(rows);
      }
    );
  }catch(error){
    console.log('error: ',error);
  }
})

module.exports = router;