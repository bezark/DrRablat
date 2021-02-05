
   
   const socket = io();
    var words = [];
    
    var PlayerData = {};

    // /Users/John/Desktop/NodeTests/spooky/assets/CAPTH.ttf
    //
    function preload() {
      console.log('hiiiiiiii')
     
    }

    function setup(){
      createCanvas(windowWidth, windowHeight);
      background(255,0,0);



      socket.emit('joinFromWeb');




    }

   


    function mouseDragged() {
      clear();
      background(0);
      noStroke();
      fill(20,0,175);
      ellipse(mouseX, mouseY, 36, 36);

      var data = {
        y: mouseY/windowHeight,
        x: mouseX/windowWidth,

      }
      

      socket.emit('movin', data);

    }


    function touchMoved() {
      clear();
      background(255,0,0);
      noStroke();
      // if(PlayerData.isGiest){
      //   fill(175,0,20);
      // }else{}
      fill(20,0,175);
      ellipse(mouseX, mouseY, 36, 36);


      var data = {
        y: mouseY/windowHeight,
        x: mouseX/windowWidth

      }

      socket.emit('movin', data);
      return false;
    }

    function draw() {

    }
