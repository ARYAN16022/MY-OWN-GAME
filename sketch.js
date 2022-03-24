const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,castle1,castle;

function preload() {
  backgroundImg = loadImage("sprites/bg.jpg");
  castle1 = loadImage("sprites/castle.png")
  player1 = loadAnimation("sprites/l-1.png","sprites/l-2.png","sprites/l-3.png") 
  brick=loadImage("sprites/bricks1.jpg")
}


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  castle = createSprite(800, 300);
  player = createSprite(900, 450);

  b1 = createSprite(1000, 300);
  b1.addImage(brick);
  b1.scale = 0.1;

  b2 = createSprite(1000, 400);
  b2.addImage(brick);
  b2.scale = 0.1;
  
  b3 = createSprite(600, 350);
  b3.addImage(brick);
  b3.scale = 0.1;

  b4 = createSprite(600, 450);
  b4.addImage(brick);
  b4.scale = 0.1;
  
  b5 = createSprite(800, 100);
  b5.addImage(brick);
  b5.scale = 0.1;

  b6 = createSprite(700, 100);
  b6.addImage(brick);
  b6.scale = 0.1;

  b7 = createSprite(900, 100);
  b7.addImage(brick);
  b7.scale = 0.1;

   b8 = createSprite(600, 100);
   b8.addImage(brick);
  b8.scale = 0.1; 
  
    b9 = createSprite(1000, 100);
    b9.addImage(brick);
  b9.scale = 0.1;
  
  b10 = createSprite(1000, 200);
  b10.addImage(brick);
  b10.scale = 0.1;

  b11 = createSprite(1000, 500);
  b11.addImage(brick);
  b11.scale = 0.1;

  b12 = createSprite(600, 300);
  b12.addImage(brick);
  b12.scale = 0.1;

  b13 = createSprite(600, 200);
  b13.addImage(brick);
  b13.scale = 0.1;

  b14 = createSprite(600, 500);
  b14.addImage(brick);
  b14.scale = 0.1;

  b15 = createSprite(700, 550);
  b15.addImage(brick);
  b15.scale = 0.1;
   
  b16 = createSprite(800, 550);
  b16.addImage(brick);
  b16.scale = 0.1;

  b17 = createSprite(900, 550);
  b17.addImage(brick);
  b17.scale = 0.1;   
  
  castle.addImage(castle1);
  castle.scale = 1.5;
  player.addAnimation("l", player1);
  player.scale = 0.5;
}

function draw() {
  background(backgroundImg);
  drawSprites();
}