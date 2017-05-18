'use strict';

const express = require('express');
const mongoHelpers = require('./mongo-helpers');
const router = express.Router();

router.get('/list', function(req, res) {
  mongoHelpers.listAllEmployees()
  .then(function(success){
    res.send(success);
  }).catch(function(err){
    console.error(err);
    res.status(500).send({
      message:'Failed to get employees: ' + err
    });
  });
});

router.get('/list/:id', function(req, res) {
  mongoHelpers.findEmployeeById(parseInt(req.params.id))
  .then(function(success){
    res.send(success);
  })
  .catch(function(err){
    console.error(err);
    res.status(500).send({
      message:'Failed to find employee: ' + err
    });
  });
});

router.post('/', function(req, res){
  mongoHelpers.insertEmployee(req.body)
  .then(function(success){
    res.send(success);
  })
  .catch(function(err){
    console.error(err);
    res.status(500).send({
      message:'Failed to insert empoyee: ' + err
    });
  });
});

router.put('/:id/update', function(req, res) {
  mongoHelpers.updateEmployee(req.body)
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
