console.log('squeak!')

let currentMessage = []
let messageString = ""
let messageSelected = false;

function squeakerDraw(){

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
        default:
        background(100, 100, 100)
      }

}

function sqloadDraw(){
   selectMessage()
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
  

    background(100, 0, 0)
    if (myvideo != null){
    image(myvideo, width/2, height*0.25, 320, 240)
    }
    if (otherVideo != null){
    image(otherVideo, width/2, height*0.75, 320, 240)
    }
  
    textSize(32);
    fill(255)
    text('you da squeaker!!!!',width/2, height*0.1);
    text(currentMessage, width/2, height/2);

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

  
  }