'use strict';

const mongo = require('lib/mongo');
const Joi = require('joi');

const departmentSchema = Joi.object().keys({
  name: Joi.string().required(),
  departmentNumber: Joi.number().integer().required().example(123),
  departmentLead: Joi.number().integer().required().example(12345),
  budget: Joi.number().required().precision(2),
  employees: Joi.array().required().items(Joi.number().integer().required().example(12345))
});

exports.insertDepartment = function(department){
  return new Promise(function(resolve, reject){
    Joi.validate(department, departmentSchema, function(err){
      if (!err){
        return mongo.getCollection('departments')
        .then(function(col){
          return col.insertOne(department)
          .then(function(result){
            console.log('successfully inserted department');
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

exports.updateDepartment = function(data){
  if (!data || !data.id) {
    throw new Error('Department not valid');
  }
  return mongo.getCollection('departments')
  .then(function(col){
    return col.update({'departmentNumber':data.departmentNumber}, data);
  });
};

exports.findDepartmentById = function(id) {
  return mongo.getCollection('departments')
  .then(function(col){
    console.log('finding department with id: ', id);
    return col.findOne({'departmentNumber':id}).then(function(result){
      console.log(result);
      return result;
    }).catch(function(err){
      console.error('Problem finding department: ', err);
    });
  });
};

exports.listAllDepartments = function() {
  return mongo.getCollection('departments')
  .then(function(col){
    console.log('getting departments');
    return new Promise(function(resolve, reject){
      col.find().toArray(function(err, results){
        if (!err) {
          resolve(results);
          return;
        }
        reject(err);
      });
    });
  });
};

exports.clearService = function() {
  return mongo.getCollection('departments').then(function(col){
    col.remove({});
  });
};
