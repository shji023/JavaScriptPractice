var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const con = mysql.createConnection({
  host : "database-1.cziyl6rwn9rl.ap-northeast-2.rds.amazonaws.com",
  port:"3306",
  database:"jiyoung",
  user:'admin',
  password:'12345678'
});

router.get('/', function(req, res, next) {
  try{
    con.query(
      'select * from table05',
      (error,rows,fields)=>{
        if(error) throw error;
        //console.log(rows);
        res.send(rows);
      }
    );
  }catch(error){
    console.log('error:',error);
  }
  // res.send('test');
});

module.exports = router;