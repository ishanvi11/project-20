function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
}
var car,wall;
var speed,weight;

car=createSprite(50,200,50,50)
car.velocityx=speed;

wall=createSprite(1500,200,60,height/2)



function draw() {
  background(255,255,255);  
  drawSprites();
}