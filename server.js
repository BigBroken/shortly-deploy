var app = require('./server-config.js');
var mongo = require('./app/mongodb.js');

var port = 4568;

app.listen(port);

console.log('Server now listening on port ' + port);




//TESTING MONGO