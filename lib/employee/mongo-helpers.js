const mongo = require('lib/mongo');
const Joi = require('joi');

const employeeSchema = Joi.object().keys({
  name: Joi.string().required(),
  id: Joi.number().integer().min(10000).max(99999).required(),
  email: Joi.string().email().required(),
  address: Joi.string(),
  officeNumber: Joi.number().integer().required(),
  title: Joi.string(),
  departmentNumber: Joi.number().integer().required()
});

exports.insertEmployee = function(employee){
  return new Promise(function(resolve, reject){
    Joi.validate(employee, employeeSchema, function(err, val){
      if(!err){
        mongo.getCollection('employees')
        .then(function(col){
          return col.insertOne(employee)
          .then(function(result){
            console.log('successfully inserted employee');
            resolve(result);
          })
          .catch(function(err){
            reject(err);
          });
        });
      } else {
        reject(err);
      }
    });
  });
};
