var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var assert = require('assert');

var url = 'mongodb://localhost:27017/';
mongoose.connect(url);
var db = mongoose.connection;

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

// urlSchema.methods.remove = function(obj, cb) {
//   this.model('Url').find(obj, function(err, data) {
//   });
// };

// console.log(Link);

db.once('open', function() {

  console.log('IT RAN========================');
});

var User = mongoose.model('User', userSchema);


var Link = mongoose.model('Url', urlSchema);
var google = new Link({url: 'http://google.com'});
console.log(google.findOne)
Link.remove({url: 'http://google.com'}, function(err, data){
  console.log('GOT CALLED')
  if(err){
    console.log(error);
  } else {
    console.log(data);
  }
});

// var test = new Link({url: 'http://googleyyy.com'});

// test.save(function(err, url) {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('saved url',url);
//     });

Link.find(function(err, urls) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('found',urls);
});



// module.exports = mongo;
