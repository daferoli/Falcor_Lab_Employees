'use strict';

const mongoClient = require('mongodb').MongoClient;

const CONNECTION_URL = 'mongodb://localhost:27017/FALCOR';
//running this now so connection starts when file is first required
const connect = mongoClient.connect(CONNECTION_URL);

exports.getCollection = function(collectionName){
  return connect.then(function(db){
    return db.collection(collectionName);
  });
};
