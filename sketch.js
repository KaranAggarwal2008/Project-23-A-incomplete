//Global codes start
//helocopter and package objects 
var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageBody;
//ground objects
var ground;
//physics engine
const Engine = Matter.Engine;
//physics world
const World = Matter.World;
//physics bodies
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dropZone1;
//Global codes ends
//Function preload starts
function preload()
{
	//Preloading helicopter and package image
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
//function preload ends
//function setup starts
function setup() {
	//create canvas
	createCanvas(800, 700);
	//rectMode
	rectMode(CENTER);
	
    dropZone1 = new dropZone(200,200,200,200);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1,isStatic:true});
	World.add(world, packageBody);
    

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  dropZone1.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,isStatic =false);
  }
}



