const express = require('express');
const mongoHelpers = require('./mongo-helpers');
const router = express.Router();

router.get('/list', function(req, res) {
  mongoHelpers.listAllOffices()
  .then(function(success){
    res.send(success);
  }).catch(function(err){
    console.error(err);
    res.status(500).send({
      message:'Failed to get offices: ' + err
    });
  });
});

router.get('/list/:id', function(req, res) {
  mongoHelpers.findOfficeById(parseInt(req.params.id))
  .then(function(success){
    res.send(success);
  })
  .catch(function(err){
    console.error(err);
    res.status(500).send({
      message:'Failed to find office: ' + err
    });
  });
});

router.post('/', function(req, res){
  mongoHelpers.insertOffice(req.body)
  .then(function(success){
    res.send(success);
  })
  .catch(function(err){
    console.error(err);
    res.status(500).send({
      message:'Failed to get office: ' + err
    });
  });
});

module.exports = router;
