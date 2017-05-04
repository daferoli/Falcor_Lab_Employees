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
        return mongo.getCollection('employees')
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

exports.findEmployeeById = function(id) {
  return mongo.getCollection('employees')
  .then(function(col){
    console.log('finding employee with id: ', id);
    return col.findOne({"id":id}).then(function(result){
      console.log(result);
      return result;
    }).catch(function(err){
      console.error('Problem finding employee: ', err);
    });
  });
};
