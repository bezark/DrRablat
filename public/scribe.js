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
    
    buttons[levIndex]=[];
    for (const symbol of level.symbols) {
      let button = createButton(symbol, symbol)
      button.mousePressed(buttonPressed)
      button.position(random(w),random(h))
      button.hide()
      buttons[levIndex].push(button);
      
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
        default:
        background(100, 100, 100)
      }

}

function scloadDraw(){

//TODO  /add check for if this is already here
makeButtons(); 
guessedMessage =[]
guessString = "" 
state = 'round';

}

function scintroDraw(){

}

function scroundDraw(){
 
  
    background(0, 0, 200)
    if (myvideo != null){
    image(myvideo, width/2, height*0.25, 320, 240)
    }
    if (otherVideo != null){
    image(otherVideo, width/2, height*0.75, 320, 240)
    }
    textSize(32);
    fill(255)
    text('you da scribe!!!!',width/2, height*0.1);
    text(guessString,width/2, height/2);

}

function buttonPressed(){
  // console.log(this.elt.innerHTML)
  append(guessedMessage, this.elt.innerHTML)
  guessString = join(guessedMessage, " ");
  if(levels[currentLevel].len == guessedMessage.length){
    console.log('checking!')
  }
  console.log(guessedMessage.length)

}