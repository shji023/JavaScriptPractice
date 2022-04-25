// express 모듈을 불러온다.
var express = require('express');
// app변수로 express를 호출한다.
var app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users',require('./routes/users'));
const mq = require("./routes/rabbitmq-api");

app.post("/send_msg", mq.send_message);
app.get("/get_msg", mq.recv_message);

var port = process.env.PORT || '5000';
app.listen(port, ()=>{console.log('listen');});

module.exports = app;