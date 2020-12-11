
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,ground3,ground4,ground5,ground6,ground7;
var divisionHeight=300;
var particles=[]
var plinkos=[]
	var divisions=[]
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
ground1=new Ground(400,745,800,10)
ground2=new Ground(475,890,10,800)
ground3=new Ground(390,890,10,800)
ground4=new Ground(290,890,10,800)
ground5=new Ground(190,890,10,800)
ground6=new Ground(90,890,10,800)
ground7=new Ground(10,890,10,800)






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ground5.display()
  ground6.display()
  ground7.display()
  
  drawSprites();
 
}



