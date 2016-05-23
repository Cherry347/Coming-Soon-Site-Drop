var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
// var indexController = require('./controllers/indexController')

app.get('/', function(req, res){
  res.sendFile('/html/index.html', {root : './public'})
});


// Creating Server and Listening for Connections \\
var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
