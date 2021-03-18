var hourHand,minuteHand,secondHand


function setup() {
  createCanvas(800,800);
  //createSprite(300, 300, 50, 50);
}

function draw() {
  background(2,0,0);  
  drawSprites();

  hr=hour();
mn=minute();
sc=second();

  scAngle = map(sc, 0, 60, 0,360);
  hrAngle = map(hr, 0, 12, 0,360);
  mnAngle = map(mn, 0, 60, 0,360);

  

angleMode(DEGREES);
translate(400,400); 
 rotate(-90);

 push();
 rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,190,0)
pop();

push();
 rotate(hrAngle);
stroke(0,255,0);
strokeWeight(7);
line(000,000,100,0)
pop();

push();
 rotate(mnAngle);
stroke(0,0,255);
strokeWeight(7);
line(000,000,150,0)
pop();

noFill();
strokeWeight(5);
stroke(255,0,0)
arc(0,0,470,470, 0,scAngle)


noFill();
strokeWeight(5);
stroke(0,0,255)
arc(0,0,450,450, 0,mnAngle)


noFill();
strokeWeight(5);
stroke(0,255,0)
arc(0,0,430,430, 0,hrAngle)
}


