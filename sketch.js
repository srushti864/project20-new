
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,brush,gym,eat,bath,sleep,move;
var astronaut;
function preload()
{
bg = loadImage("images/iss.png");	
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
eat = loadAnimation("images/eat1.png","images/eat2.png");
bath = loadAnimation("images/bath1.png","images/bath2.png");
sleep = loadAnimation("images/sleep.png");
move = loadAnimation("images/move.png","images/move1.png");
}

function setup() {
	createCanvas( 600,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 astronaut = createSprite(300,230);

 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale = 0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  
  text("Instructions",20,35);
  
  text("Up Arrow = Brushing",20,55);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){

astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;


  }
  drawSprites();
 
}



