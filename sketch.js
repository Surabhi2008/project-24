var dustbin,bottomBody,leftWallBody,ball,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world


	ground = new Ground(600,height,1200,20)
	dustbin= new Dustbin(100,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ground.display()
  drawSprites();
 
}



