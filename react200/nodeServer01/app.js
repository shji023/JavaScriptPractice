// express 모듈을 불러온다.
const { request } = require('express');
var express = require('express');
require("./routes/BatchRout");
// app변수로 express를 호출한다.
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var router = express.Router();

//------------------------------------------
// mybatis
// app.use('/api/Swtool',
//   router.post('/',function(req, res, next){
//     console.log(1);
//     if(req.query.type == 'list'){
//       req.body.mapper = 'SwToolsMapper';
//       req.body.crud = 'select';
//       req.body.mapper_id = 'selectSwToolsList';

//       router.use('/',require('./dbconnect_Module'));
//       next('route');
//     }else if(req.query.type == 'save'){

//       req.body.mapper = 'SwToolsMapper';//mybatis xml 파일명
//       req.body.crud = 'insert';//select, insert, update, delete 중에 입력
//       req.body.mapper_id = 'insertSwToolsInfo';

//       router.use('/', require('./dbconnect_Module'));
//       next('route')

//     }else if(req.query.type == 'modify'){
//       try {
//         req.body.mapper = 'SwToolsMapper';
//         req.body.crud = 'update';//select, insert, update, delete 중에 입력
//         req.body.mapper_id = 'updateSwToolsInfo';
        
//         router.use('/', require('./dbconnect_Module'));
//         next('route')
//       } catch (error) {
//         console.log("Module > dbconnect error : "+ error);      
//       }
//     }else if(req.query.type === 'delete'){
//       //Swtool 삭제
//       try {
//         //Mysql 쿼리 호출정보 입력
//         req.body.mapper = 'SwToolsMapper';//mybatis xml 파일명
//         req.body.crud = 'delete';//select, insert, update, delete 중에 입력
//         req.body.mapper_id = 'deleteSwToolsInfo';
        
//         router.use('/',  require('./dbconnect_Module'));
//         next('route')
//       } catch (error) {
//         console.log("Module > dbconnect error : "+ error);      
//       }
//     }
//   }),
// );

// app.use('/save',
//   router.post('/',function(req,res,next){
//     console.log(2);
//     console.log(req.body);
//     req.body.mapper="SwToolSMapper"
//     req.body.crud="insert"
//     req.body.crud,id="insertOne"
//     res.send('OK');
//   }),
//   )
//------------------------------------------
var port = process.env.PORT || '5000';
app.listen(port, ()=>{console.log('listen');});

module.exports = app;