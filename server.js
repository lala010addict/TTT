var express = require('express');
var app = express();
var io = require('socket.io')
var io = io.listen(app);

app.get('/', function (req, res) {
  res.send('hihihi!');
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});