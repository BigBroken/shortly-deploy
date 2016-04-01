var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/';
mongoose.connect(url);
var db = mongoose.connection;
db.once('open', function() {
});


var urlSchema = new mongoose.Schema({  
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
});

var Link = mongoose.model('Url', urlSchema);

// Link.remove({url: 'http://google.com'}, function(err, data){
//   console.log('GOT CALLED')
//   if(err){
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

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
