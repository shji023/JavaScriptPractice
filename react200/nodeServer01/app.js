var express = require('express');
var app = express();

app.use('/users',require('./routes/users'));

var port = process.env.PORT || '5000';
app.listen(port, ()=>{console.log('listen');});

module.exports = app;