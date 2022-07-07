var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello Sinan!</h1>');
});

app.get('/healthcheck', function (req, res) {
  res.send('<h1>I am healty!</h1>');
});

app.listen(3000, function () {
  console.log('Listening to Port 3000');
});
