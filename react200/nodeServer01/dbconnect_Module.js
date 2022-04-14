var express = require( 'express' );
var router = express.Router();

const mysql = require('mysql');
// const con = mysql.createConnection( {
//     host: "database-1.cziyl6rwn9rl.ap-northeast-2.rds.amazonaws.com",
//     port: 3306,
//     database: 'ahhyun',
//     user: 'admin',
//     password: '12345678',
    
// } );

// 풀 만듬
const pool = mysql.createPool({
    // 풀 환경설정
    connectionLimit: 66, // 커넥션 풀에 저장할 수 있는 최대 커넥션 개수 (최대 연결 수)
    waitForConnections: true, // 풀이 꽉 찼다면, 여유가 생길 때까지 새 연결 대기 여부

    // 연결할 디비 설정
    host: "database-1.cziyl6rwn9rl.ap-northeast-2.rds.amazonaws.com",
    port: 3306,
    database: 'ahhyun',
    user: 'admin',
    password: '12345678',
})

router.post( '/', function(req, res, next){
    let param = req.body;

    const myBatisMapper = require('mybatis-mapper');

    myBatisMapper.createMapper( ['SwToolsMapper.xml'] );
    
    let query = myBatisMapper.getStatement(
        'SwToolsMapper', 
        'selectSwtool', 
        { },
        { language: 'sql', indent: '  '}, 
    );

    try{
        // 커넥션 풀
        pool.getConnection(function(err, con){
            con.query(
                query,
                (error, rows, fields)=>{
                    if(error) throw error;           
                    res.send(rows)
                }
            );
            // 쿼리2
            // 쿼리3
            // 커넥션 풀에서 연결 제거
            con.release();
        })
       
    }catch(error){
        console.log('error', error);
    }
} )

module.exports = router;