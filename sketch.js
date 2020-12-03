const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World  = Matter.World;

var engine,world;
var box1;

function setup() {
 var canvas = createCanvas(1000,1000);
  
  engine = Engine.create();
  world  = engine.world;

  box1  = new Box(100,200,10,40);
  
}

function draw() {
  background("white");

  Engine.update(engine);

  box1.display();

  //drawSprites();
  
}
