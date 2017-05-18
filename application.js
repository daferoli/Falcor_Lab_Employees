'use strict';

var Express = require('express');
var bodyParser = require('body-parser');

var app = Express();

app.use(bodyParser.json());

app.use('/employee', require('lib/employee'));
app.use('/office', require('lib/office'));
app.use('/department', require('lib/department'));

app.get('/', function(req, res){
  res.send('THIS IS A TEST');
});

const BACKEND_PORT = 8001;
app.listen(BACKEND_PORT, function(){
  console.log('backend started on port: ' + BACKEND_PORT);
});
