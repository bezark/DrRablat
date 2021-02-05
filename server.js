const express = require('express')
const app = express()



var server = require('http').Server(app);
var io = require('socket.io')(server);
var connectCounter = 0;
// var maxSocket;
server.listen(4000);
// WARNING: app.listen(80) will NOT work here!
// var bigData ={}
// var socks=[]
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
});





 

io.on('connection', function (socket) {
 
  
  socket.on('rolling', function (data) {
    socket.broadcast.emit('rolling', data)
  });
  
 
  socket.on('drag', function (data) {
    
   
    socket.broadcast.emit('dragging', data)
  
  });
  
  
    // Disconnect listener
 socket.on('disconnect', function() {
   
    
    });
});
console.log('serverlistening on 4000');