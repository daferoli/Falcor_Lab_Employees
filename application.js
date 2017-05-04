var Express = require('express');
var bodyParser = require('body-parser');

var app = Express();

app.use(bodyParser.json());

app.use('/employee', require('lib/employee'));

app.get('/', function(req,res){
  res.send('THIS IS A TEST');
});

app.listen(8000, function(){
  console.log('app started');
});