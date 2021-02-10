const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
function preload(){
  backgroundImg = loadImage("bg image.jpg");
  hoopImg = loadImage("hoop1.png");
}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  basketball = new ball(100,500,30);
  ground1 = new ground(600,670,1200,30);
  bar1 = new bar(1000,330,20,680);
  hoop1 = createSprite(950,300,60,60);
  hoop1.addImage(hoopImg);
  hoop1.scale = 0.5;
  launcher1 = new launcher(basketball.body,{x:100,y:500});
}

function draw() {
  background(backgroundImg);
  Engine.update(engine); 
  textSize(25);
  fill("magenta");
  text("Score : " +score,400,40);
  text("Dunk Challenge !!",550,40);
  //image(hoopImg,hoop.body.position.x,hoop.body.position.y,50,50);
  basketball.display();
  ground1.display();
  bar1.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(basketball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher1.fly();
}