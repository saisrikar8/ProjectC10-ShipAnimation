var ship, sea, seaimg, ship_animation, start_button, stop_button, sea2;
var start = false;
var stopboat = true;
function preload(){
  ship_animation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaimg = loadImage("sea.png");
}

function setup(){
  createCanvas(3000,1000);
  sea = createSprite(200, 200);
  sea.addImage(seaimg);
  sea.velocityX = -5;
  ship = createSprite(200,200);
  ship.addAnimation("ship", ship_animation);
  ship.scale = 0.5;
}

function draw() {
  background("blue");
  if(sea.x < 200){
    sea.x = sea.width/2;
  }
  console.log(sea.x);
  drawSprites();
}