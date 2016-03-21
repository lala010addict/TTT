var http = require('http');
var express = require('express'),
    app = module.exports.app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);  //pass a http.Server instance


app.get('/', function(req, res) {
    res.sendfile('client/index.html');
});

 io.sockets.on('connection', function (socket) {
    

    // Fire the init message to setup the game
    socket.emit('data', {event:'init', ok:true, result: socket.handshake.sessionID});
  });



app.listen(8080, function () {
  console.log('App listening on port 8080!');
});