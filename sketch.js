
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var boyImage;
var boy;
var mango,mango2,mango3;
var gameState = "onSling";
var slingshot;
var mangoBodyPosition, stoneBodyPosition;
function preload()
{
	boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(850,450,500,0);
	ground = new Ground(800,700,2000,10);
	stone = new Stone(150,600,80,80);

	boy = createSprite(200,640,70,70);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	mango = new Mango(800,400);
	mango2 = new Mango(880,350);
	mango3 = new Mango(940,365);
	slingshot = new SlingShot(stone.body,{x:150, y:600});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  drawSprites();

  ground.display();

  stone.display();

  tree.display();

  mango.display();
  mango2.display();
  mango3.display();

  slingshot.display();

  detectollision(stone,mango);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
}



function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}

//function mouseReleased(){
    //slingshot.fly();
    //gameState = "launched";
//}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:150, y:600});
		slingshot.attach(stone.body);
		gameState = "onSling";
	}
}

function detectollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=Lmango.width+Lstone.width){
		Matter.Body.setStatic(Lmango.body, false);
	}
}
