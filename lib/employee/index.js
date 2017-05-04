const express = require('express');
const mongoHelpers = require('./mongo-helpers');
const router = express.Router();

router.get('/list',function(req,res) {

});

router.get('/list/:id', function(req,res) {

});

router.post('/', function(req,res){
  mongoHelpers.insertEmployee(req.body).then(function(success){
    res.send(success);
  }).catch(function(err){
    console.error(err);
    res.status(500).send({
      message:"Failed to insert into Mongo: " + err
    });
  });
});

module.exports = router;
