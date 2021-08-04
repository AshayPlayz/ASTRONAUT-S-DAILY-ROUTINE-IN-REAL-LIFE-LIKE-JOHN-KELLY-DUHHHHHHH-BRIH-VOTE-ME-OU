var bgImg;
var sleepImg, brushImg, gym1Img, gym2Img, eatImg, drinkImg, moveImg, bathImg;
var astronauto;

function preload(){
  bgImg=loadImage("images/iss.png")
  sleepImg=loadImage("images/sleep.png")
  brushImg=loadImage("images/brush.png")

  gym1Img=loadAnimation("images/gym1.png","images/gym2.png")
  gym2Img=loadAnimation("images/gym11.png","images/gym12.png")
  eatImg=loadAnimation("images/eat1.png","images/eat2.png")
  drinkImg=loadAnimation("images/drink1.png","images/drink2.png")
  moveImg=loadAnimation("images/move.png","images/move1.png")
  bathImg=loadAnimation("images/bath1.png","images/bath2.png")
  
}

function setup() {
  createCanvas(600, 600);
  
  astronauto = createSprite(300,300);
  astronauto.addImage(sleepImg);
  astronauto.scale=0.1;
  
  
}

function draw() {
  background(bgImg);
  
  if(keyDown("UP_ARROW")){
    astronauto.addAnimation("brushing",brushImg);
    astronauto.changeAnimation("brushing")
    astronauto.y=350;
    astronauto.velocityX=0;
    astronauto.velocityY=0;
  }


  if(keyDown("DOWN_ARROW")){
    astronauto.addAnimation("gymming",gym1Img);
    astronauto.changeAnimation("gymming")
    astronauto.y=350;
    astronauto.velocityX=0;
    astronauto.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronauto.addAnimation("bathing",bathImg);
    astronauto.changeAnimation("bathing")
    astronauto.y=350;
    astronauto.velocityX=0;
    astronauto.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronauto.addAnimation("eating",eatImg);
    astronauto.changeAnimation("eating")
    astronauto.y=350;
    astronauto.velocityX=0;
    astronauto.velocityY=0;
  }

  if(keyDown("m")){
    astronauto.addAnimation("moving",moveImg);
    astronauto.changeAnimation("moving")
    astronauto.velocityX=-2;
    astronauto.velocityY=0;
  }

  
  createEdgeSprites();
  drawSprites();
}