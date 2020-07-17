var frogX = 0;
var frogY = 0;
var showTounge = false;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  gravity()
  background(230, 230, 250);
  fill(10,200,25);
  rect(frogX + 300,frogY + 320,40,40); //body of frog
  rect(frogX + 320,frogY + 300,20,20); //head of frog
  if (showTounge) {
    fill(200,0,0);
    rect(frogX + 335,frogY + 310,15,5); //tounge of frog
  }
    
  if(keyIsDown(65)){   //65 is a
    frogX-= 5;
  }if(keyIsDown(83)){  //83 is s
    frogY+= 15;
  }if(keyIsDown(68)){  //68 is d
    frogX+= 5;
  }if(keyIsDown(87)){  //87 is w
    frogY-=15;
  }if(keyIsDown(32)){  //32 is space bar
      showTounge = true;
  }
      else showTounge = false;

}
//vantar ehv sem leyfir þér að hoppa þegar þú ert á y 0
function gravity(){
 if(frogY+10 > 0){
   frogY = 0
 }
 else{
   frogY+=10
 }
}
