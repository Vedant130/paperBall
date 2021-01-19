
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var side1,side2,side3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,695,800,10);
}

function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  drawSprites();

  keyPressed();

  ground.display();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,Y:-85});
	}

}



