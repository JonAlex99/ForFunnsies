function setup() {
  createCanvas(400, 400);
}

let rectX = 0;
let rectY = 0;

function draw() {
  background(220);
  fill(random(0,255),random(0,255),random(0,255));
  rect(rectX, rectY, 15,17);
  
  
  
  if(rectX > 400) rectX-=400;
  if(rectX < 0) rectX+=400;
  if(rectY > 400) rectY-=400;
  if(rectY < 0) rectY+=400;
  
  if(keyIsDown(65)){
    rectX-= 5;
  }if(keyIsDown(83)){
    rectY+= 5;
  }if(keyIsDown(68)){
    rectX+= 5;
  }if(keyIsDown(87)){
    rectY-=5;
  }
}

function keyPressed(){
  //console.log("Key pressed is indeed true");
  //if(key == 'a'){
    //rectX -= 20;
  //}else if(key == 's'){
    //rectY += 20;
  //}else if(key == 'd'){
    //rectX += 20;
  //}else if(key == 'w'){
    //rectY -= 20;
  //}
  
}


