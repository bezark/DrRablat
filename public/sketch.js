// const { text } = require("express");

   



let myvideo
let otherVideo
let p5l;
let role;
let state// = 'loading'
let w, h, videoWidth, videoHeight;
let videoVisible = true
let ready = false;
// let buttons= [];
let currentLevel = 0;
let levels = [
  {'symbols': ['🐭', '🧀', '😸', '🐶', '🐥'], 'len': 3},

  {'symbols': ['😽', '😸', '😆', '🐕', '🐩', '⚠️', '🧀'], 'len': 4},

  {'symbols': ['😸', '🐭', '🐕', '🐩', '⚠️', '🧀', '🐀', '😹', '⛺'], 'len': 5}
   
]



const socket = io();
socket.on("yourRole", data => {
  role = data;
  console.log(role)
     
});

socket.on("state", data => {
 state = data;
 console.log('STATE CHANGE')
 console.log(state)
    
});

socket.on("videoVisible", vv => {
  // console.log('vvvvvvv')
  videoVisible = vv;
 });



let results = [];
socket.on("checkResult", theresults => {
  console.log('Result')
  results = theresults;
  // console.log(message)
  state = 'result'
  videoVisible = true; 
  if(results[2]){
    currentLevel++
  }
 });





function setup() {
  createCanvas(windowWidth, windowHeight)
  myvideo = createCapture(VIDEO,
    function(stream){
   p5l = new p5LiveMedia(this, "CAPTURE", stream, "corndogs") //this refers to the p5 sketch, corndogs is the room
    
    // p5l.on('connection', connection)
    p5l.on('stream', gotStream) //call this function for stream
    
    // p5l.on('data', gotData)
    
  });
  w = width
  h = height
  videoWidth = w*0.4
  videoHeight = videoWidth*240/320
  myvideo.hide();
  console.log(levels[0].symbols)
  textAlign(CENTER)
  // scribeSetup()
}

function draw() {

  switch(role) {
      case 'squeaker':
        squeakerDraw();
        break;
      case 'scribe':
        scribeDraw();
        break;
      default:
      background(100, 100, 100)
    }
  

}

function gotStream(incomingStream, id){
  
  otherVideo = incomingStream;
  otherVideo.hide();
  ready = true
  // let dataToSend = {event: 'hello', y: mouseY};
  // p5l.send(JSON.stringify(dataToSend));
}


function videoDraw(){
  
  
  if (myvideo != null){
  image(myvideo, (width-videoWidth)/2, height*0.65, videoWidth, videoHeight)
  }
  if (otherVideo != null && videoVisible ){
  image(otherVideo, (width-videoWidth)/2, height*0.1, videoWidth, videoHeight)
  }


}


// function 





// function gotData(data, id){
//   console.log(data, id)
//     // If it is JSON, parse it
//   let d = JSON.parse(data);
//  switch(d.event) {
//   case 'hello':
//     console.log('hello')
//     break;
//   case 'y':
//     // code block
//     break;
//   default:
//     // code block
// }
//   otherX = d.x;
//   otherY = d.y;
  
// }




// function mouseMoved() {
//   // Package as JSON to send
//   let dataToSend = {x: mouseX, y: mouseY};
//   p5l.send(JSON.stringify(dataToSend));
// }



















































// let myVideo;
// let otherVideo;

// function setup() {
//   createCanvas(640, 480);

//   // Web RTC Capture Local "Media Stream" (Webcam Audio and Video)
//   myVideo = createCapture(VIDEO,
//     function(stream) {
//       let p5l = new p5LiveMedia(this, "CAPTURE", stream, "MY_COOL_ROOM_123");
//       p5l.on('stream', gotStream);
//     }
//   );
//   myVideo.muted = true;
//   myVideo.hide();

// }

// We got a new stream!
// function gotStream(stream, id) {
//   // This is just like a video/stream from createCapture(VIDEO)
//   otherVideo = stream;
//   //otherVideo.id and id are the same and unique identifiers
//   otherVideo.hide();
// }





//*//*//*//*//*//*//*//*//*//*//*//*//
// Simple Example:
// function draw() {
//   background(100, 200, 255);

//   if (myVideo != null) {
//     image(myVideo, 0, 0, 320, 240);
//   }

//   if (otherVideo != null) {
//     image(otherVideo, 320, 0, 320, 240);
//   }
// }


//*//*//*//*//*//*//*//*//*//*//*//*//
// Draw o the Video Feeds:
// function draw() {
//   ellipse(mouseX,mouseY,20,20);

//   if (frameCount % 100 === 0) {
//     if (myVideo != null) {
//       image(myVideo, 0, 0, 320, 240);
//     }

//     if (otherVideo != null) {
//       image(otherVideo, 320, 0, 320, 240);
//     }
//   }
// }



//*//*//*//*//*//*//*//*//*//*//*//*//
//Moving Video Feeds:

// let myX = 0;
// let myY = 0;

// let theirX = 0;
// let theirY = 0;

// function move() {
//   myX = myX + random(2);
//   myY = myY + random(2);
//   if (myX > width) {
//     myX = 0;
//   }
//   if (myY > height) {
//     myY = 0;
//   }

//   theirX -= random(2);
//   theirY += random(2);
//   if (theirX < 0) {
//     theirX = width;
//   }
//   if (theirY > height) {
//     theirY = 0;
//   }
// }


// function draw() {
//   background(100, 200, 255);

//   if (myVideo != null) {
//     image(myVideo, myX, myY, 320, 240);
//   }

//   if (otherVideo != null) {
//     image(otherVideo, theirX, theirY, 320, 240);
//   }

//   move();
// }