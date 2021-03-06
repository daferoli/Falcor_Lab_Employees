'use strict';

const express = require('express');
const mongoHelpers = require('./mongo-helpers');
const router = express.Router();

router.get('/list', function(req, res) {
  mongoHelpers.listAllDepartments()
  .then(function(success){
    res.send(success);
  }).catch(function(err){
    console.error(err);
    res.status(500).send({
      message:'Failed to get departments: ' + err
    });
  });
});

router.get('/list/:id', function(req, res) {
  console.log('Getting department with id: ' + req.params.id);
  mongoHelpers.findDepartmentById(parseInt(req.params.id))
  .then(function(success){
    res.send(success);
  })
  .catch(function(err){
    console.error(err);
    res.status(500).send({
      message:'Failed to find department: ' + err
    });
  });
});

router.post('/', function(req, res){
  mongoHelpers.insertDepartment(req.body)
  .then(function(success){
    res.send(success);
  })
  .catch(function(err){
    console.error(err);
    res.status(500).send({
      message:'Failed to get empoyee: ' + err
    });
  });
});

router.put('/:id/update', function(req, res) {
  mongoHelpers.updateDepartment(req.body)
  .then(function(success){
    res.send(success);
  })
  .catch(function(err){
    console.error(err);
    res.status(500).send({
      message:'Failed to update empoyee: ' + err
    });
  });
});

module.exports = router;
