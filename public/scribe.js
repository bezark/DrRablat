// const { text } = require("express");

console.log('scribble!')

let buttonsMade = false
let buttons= [];
let guessedMessage= []
let guessString = ""
// function scribeSetup(){
//   makeButtons()

// }

function makeButtons() {
  let levIndex = 0
  
  for (const level of levels) {
    let buttonIndex = 0
    buttons[levIndex]=[];
    for (const symbol of level.symbols) {
     
      let button = createButton(symbol, symbol)
      button.mousePressed(buttonPressed)
      button.position((0.25*w)+100*buttonIndex,h*0.55)
      // button.center()
      button.style('font-size:32px');
      button.hide()
      buttons[levIndex].push(button);
      buttonIndex++
    }
    levIndex ++;
  }
  
  buttonsMade = true
  for (const button of buttons[currentLevel]) {
    button.show()    
  }
}

function changeBG() {
  let val = random(255);
  background(val);
}


function scribeDraw(){
  background(0, 0, 100)
    switch(state) {
        case 'loading':
          scloadDraw();
          break;
        case 'intro':
          scintroDraw();
        break;
        case 'round':
            scroundDraw();
        break;
        case 'result':
            scResult();
        break;
        default:
        background(100, 100, 100)
      }

}

function scloadDraw(){

//TODO  /add check for if this is already here
makeButtons();
videoVisible = true; 
guessedMessage =[]
guessString = "" 
state = 'round';

}

function scintroDraw(){

}

function scroundDraw(){

  
    videoDraw();
    scTextDraw()

}

function scResult(){

  videoDraw();
  scTextDraw()
  


  if(results[2]){
    text('CORRECT!', width/2, height*0.45);

 }else{
  text('INCORRECT!', width/2, height*0.45);
  
 }
 text(results[0], width/2, height*0.5);
}

function scTextDraw(){

  textSize(32);
    fill(255)
    text('You are the Scribe. Try to guess the '+ levels[currentLevel].len+" digit message.",width/2, height*0.625);
    text(guessString,width/2, height/2);

}


function buttonPressed(){
  // console.log(this.elt.innerHTML)
  append(guessedMessage, this.elt.innerHTML)
  guessString = join(guessedMessage, " ");
  if(levels[currentLevel].len == guessedMessage.length){
    console.log('checking!')
    socket.emit('messageCheck', guessString)
  }
  console.log(guessedMessage.length);
    

}