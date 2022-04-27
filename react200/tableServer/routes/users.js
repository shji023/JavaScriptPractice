var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const con = mysql.createConnection({
  host: "database-1.cziyl6rwn9rl.ap-northeast-2.rds.amazonaws.com",
  port: "3306",
  database: "ahhyun",
  user: 'admin',
  password: '12345678'
});

router.get('/t1', function (req, res, next) {
  try {
    con.query(
      'select * from ranking',
      (error, rows, fields) => {
        if (error) throw error;
        console.log(rows);
        res.send(rows);
      }
    );
  } catch (error) {
    console.log('error:', error);
  }
});

router.post('/t2', function (req, res, next) {
  try {
    console.log(req.body);
    const request = req.body
    con.query(
      'insert into ranking (name, result) values(?,?)',
      [request.user.alias, request.result],
      (error, rows, fields) => {
        if (error) throw error;
        console.log(rows);
        res.send(rows);
      }
    );
  } catch (error) {
    console.log('error:', error);
  }
});

router.post('/t3', function (req, res, next) {
  try {
    console.log(req.body);
    const request = req.body

    // B 데이터 가져오기
    var Bdata;
    con.query(
      'select * from ranking',
      // [request.user.alias,request.result],
      (error, rows, fields) => {
        if (error) throw error;
        console.log(rows);
        Bdata = rows;
      }
    );

    // B 데이터에서 ID 값 추출하기

    // A 데이터 가져오기 (where ID 값)
    var Adata;
    con.query(
      'select * from question',
      // [request.user.alias,request.result],
      (error, rows, fields) => {
        if (error) throw error;
        console.log(rows);
        Adata = rows;
      }
    );

    
    res.send(rows);
  } catch (error) {
    console.log('error:', error);
  }
});


module.exports = router;