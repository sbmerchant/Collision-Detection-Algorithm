function setup() {
  createCanvas(800,400);
  Mrect =createSprite(400,200,50,50);
  Mrect.shapeColor="red";
  frect=createSprite(100,200,50,60);
 frect.shapeColor="red";
}

function draw() {
  background(255,255,255);  

Mrect.x=World.mouseX;
Mrect.y=World.mouseY;

if(Mrect.x-frect.x < Mrect.width/2+frect.width/2
  && frect.x-Mrect.x < Mrect.width/2 + frect.width/2
  && Mrect.y-frect.y < Mrect.height/2 +frect.height/2
  && frect.y - Mrect.y < Mrect.height/2 +frect.height/2){
Mrect.shapeColor="green";
frect.shapeColor="green";

}
else{
  Mrect.shapeColor="red";
  frect.shapeColor="red";
}
  drawSprites();


}

