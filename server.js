var express = require('express');
var app = express();
var data = require('./src/data/data.json');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', function(req, res) {
  res.send(data);
});

app.listen(8080, function() {
  console.log('App listening on port 8080!');
});
