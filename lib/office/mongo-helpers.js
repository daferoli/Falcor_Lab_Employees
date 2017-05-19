'use strict';

const mongo = require('lib/mongo');
const Joi = require('joi');

const officeSchema = Joi.object().keys({
  employees: Joi.array().items(Joi.number().integer().example(12345)),
  nickname: Joi.string(),
  id: Joi.number().integer().required().example(1234),
  address: Joi.string().required(),
  officeManager: Joi.number().integer().required().example(12345),
  size: Joi.number().integer(),
  expenses: Joi.number().required().precision(2)
});

exports.insertOffice = function(office){
  const result = Joi.validate(office, officeSchema);
  if (!result.error){
    return mongo.getCollection('offices')
    .then(function(col){
      return col.insertOne(office);
    })
    .then(function(){
      console.log('successfully inserted office');
      return result;
    })
    .catch(function(err){
      const msg = 'Failed to insert into Mongo: ' + err;
      console.error(msg);
      throw new Error(msg);
    });
  } else {
    throw new Error(result.error);
  }
};

exports.updateOffice = function(data){
  if (!data || !data.id) {
    throw new Error('Office not valid');
  }
  return mongo.getCollection('offices')
  .then(function(col){
    return col.update({'id':data.id}, data);
  });
};

exports.findOfficeById = function(id) {
  return mongo.getCollection('offices')
  .then(function(col){
    console.log('finding office with id: ', id);
    return col.findOne({'id':id});
  })
  .then(function(result){
    console.log(result);
    return result;
  })
  .catch(function(err){
    console.error('Problem finding office: ', err);
  });
};

exports.listAllOffices = function() {
  return mongo.getCollection('offices')
  .then(function(col){
    console.log('getting offices');
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
  return mongo.getCollection('offices').then(function(col){
    col.remove({});
  });
};
