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



// let numberOfPlayers = 0
// let roles= {'squeaker', 'scribe'}
let players= []
 
function startGame(){
  
  io.to(players[0]).emit('yourRole', 'squeaker');
  io.to(players[1]).emit('yourRole', 'scribe');
  io.emit('state','loading');
  // io.emit('state', 'round'); //intro
  

 

}

io.on('connection', function (socket) {
  // numberOfPlayers ++;
//  console.log(numberOfPlayers)
  // console.log('new connection: '+ socket.id, roles[numberOfPlayers-1])
  players.push(socket.id)
  console.log(players.length)
  if(players.length ==2){
    startGame()
  }
  console.log(players)
 

  socket.on('joined', function (data) {
    console.log('join')
    socket.broadcast.emit('rolling', data)
  });

  socket.on('rolling', function (data) {
    socket.broadcast.emit('rolling', data)
  });
  
 
  socket.on('drag', function (data) {
    
   
    socket.broadcast.emit('dragging', data)
  
  });
  
  
    // Disconnect listener
 socket.on('disconnect', function() {
  
   const index = players.indexOf(socket.id);
if (index > -1) {
  players.splice(index, 1);
}
console.log(players)
   
    
    });
});
console.log('serverlistening on 4000');