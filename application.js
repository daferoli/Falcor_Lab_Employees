'use strict';

var Express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var departmentMongo = require('lib/department/mongo-helpers');
var employeeMongo = require('lib/employee/mongo-helpers');
var officeMongo = require('lib/office/mongo-helpers');
var trainingData = require('./training-data');

var app = Express();

app.use(bodyParser.json());

app.use('/employee', require('lib/employee'));
app.use('/office', require('lib/office'));
app.use('/department', require('lib/department'));
app.get('/training-set', function(req, res){
  var clearPromises = [
    departmentMongo.clearService(),
    employeeMongo.clearService(),
    officeMongo.clearService()
  ];
  Promise.all(clearPromises).then(function(){
    _.each(trainingData.employees, function(employee){
      employeeMongo.insertEmployee(employee);
    });
    _.each(trainingData.offices, function(office){
      officeMongo.insertOffice(office);
    });
    _.each(trainingData.departments, function(department){
      departmentMongo.insertDepartment(department);
    });
    res.send('successfully reset mongo training data');
  });
});

app.get('/', function(req, res){
  res.send('THIS IS A TEST');
});

const BACKEND_PORT = 8001;
app.listen(BACKEND_PORT, function(){
  console.log('backend started on port: ' + BACKEND_PORT);
});
