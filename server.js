var express = require('express');
var app = express();
var data = require('./src/data/data.json');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(8080, () => {
  console.log('App listening on port 8080!');
});
