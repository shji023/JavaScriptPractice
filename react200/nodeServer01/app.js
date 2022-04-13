// express 모듈을 불러온다.
var express = require('express');
// app변수로 express를 호출한다.
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users',require('./routes/users'));

let swtoolRouter = require('./routes/SwtoolRout');
app.use('/api/Swtool',swtoolRouter);

var port = process.env.PORT || '5000';
app.listen(port, ()=>{console.log('listen');});

module.exports = app;