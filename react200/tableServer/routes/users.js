var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const con = mysql.createConnection({
  host : "database-1.cziyl6rwn9rl.ap-northeast-2.rds.amazonaws.com",
  port:"3306",
  database:"ahhyun",
  user:'admin',
  password:'12345678'
});

router.get('/t1', function(req, res, next) {
  try{
    con.query(
      'select * from ranking',
      (error,rows,fields)=>{
        if(error) throw error;
        console.log(rows);
        res.send(rows);
      }
    );
  }catch(error){
    console.log('error:',error);
  }
});

router.post('/t2', function(req, res, next) {
  try{
    console.log(req.body);
    const request = req.body
    con.query(
      'insert into ranking (id, a, b, inputValue, result) values(?,?,?,?,?)',
      [request.user.alias,request.multiplication.factorA,request.multiplication.factorB,request.resultAttempt,request.result],
      (error,rows,fields)=>{
        if(error) throw error;
        console.log(rows);
        res.send(rows);
      }
    );
  }catch(error){
    console.log('error:',error);
  }
});




module.exports = router;