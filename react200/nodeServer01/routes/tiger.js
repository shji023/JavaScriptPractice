var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const con = mysql.createConnection({
  host : "localhost",
  port:"3306",
  database:"db01",
  user:'root',
  password:'1234'
});

router.post('/', function(req, res, next) {
  console.log(req.query.command);
  console.log(req.body);
  try{
    con.query(
      'select * from table01',
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