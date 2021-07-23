var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var appleImage;
var leaf;
var leafImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200,200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  var rando = Math.round(random(1,3));
  console.log(rando);
  if(frameCount % 80 == 0) {
    if(rando == 1) {
      createApples();
    }
    else{
      createLeaves();
    }
  }
 
  drawSprites();
}

function createApples() {
  apple = createSprite(Math.round(random(50,350),40,10,10));
  apple.addImage(appleImage);
  apple.velocityY = 3;
  apple.scale = 0.075;
  apple.depth = rabbit.depth;
  rabbit.depth += 1;
}

function createLeaves() {
  leaf = createSprite(Math.round(random(50,350),40,10,10));
  leaf.addImage(leafImage);
  leaf.velocityY = 3;
  leaf.scale = 0.075;
  leaf.depth = rabbit.depth;
  rabbit.depth +=1;
}