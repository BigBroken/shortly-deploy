var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var assert = require('assert');

var mongo = {};

var url = 'mongodb://localhost:4568/';
MongoClient.connect(url, function(err, db) {
  console.log('IT RAN========================');
  // assert.equal(null, err);
  if(err){
    console.log('error', err);
    return;
  }
  console.log("Connected correctly to server.");
  db.close();
});









var urlSchema = new mongoose.Schema({  
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
});

var userSchema = new mongoose.Schema({  
  username: String,
  password: String,
});

var url = mongoose.model('Url', urlSchema);

var user = mongoose.model('User', userSchema);


module.exports = mongo;
