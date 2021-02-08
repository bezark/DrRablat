console.log('squeak!')

let currentMessage = []
let messageString = ""
let messageSelected = false;

function squeakerDraw(){
  background(100, 0, 0)
    switch(state) {
        case 'loading':
          sqloadDraw();
          break;
        case 'intro':
          sqintroDraw();
        break;
        case 'round':
            sqroundDraw();
        break;

        case 'result':
            sqResult();
        break;
        default:
          background(100, 100, 100)
      }

}

function sqloadDraw(){
   selectMessage()
   videoVisible = true;
   timer = 20;
  //hide buttons
  for (const level of buttons) {
    for (const button of level) {
      button.hide()
    }
  }
  state =  'round';

}

function sqintroDraw(){

}

function sqroundDraw(){
  if(ready){countdown();}
  
  videoDraw();
   sqTextDraw()

}

let timer;
function countdown(){
  text(timer + " seconds left!", width*.15, height*0.7);
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    videoVisible = false;
    socket.emit('videoVisible', videoVisible);
  }

}

function sqResult(){

  videoDraw();
  sqTextDraw()


  if(results[2]){
    text('CORRECT!', width/2, height*0.45);

 }else{
  text('INCORRECT!', width/2, height*0.45);

 }

 text(results[1], width/2, height*0.5);


}

function sqTextDraw(){
  textSize(32);
  fill(255)
  text('You are the squeaker. Communicate the symbols above to your partner',width/2, height*0.62);
  text(currentMessage, width/2, height*0.6);

}


function selectMessage(){
  messageSelected = true
  currentMessage = [];
  console.log('SELECTING MESSAGE')
  for (let index = 0; index < levels[currentLevel].len; index++) {

  let selection = random(levels[currentLevel].symbols)
    append(currentMessage, selection);
    
  }
  messageString = join(currentMessage, " ");
  socket.emit('intendedMessage', messageString)
  
  }