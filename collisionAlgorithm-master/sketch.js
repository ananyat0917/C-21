var fixedRect, movingRect, obj1, obj2, obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = -5;
  fixedRect.velocityY = -1;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(100,100,60,80);
  obj1.shapeColor = "green";
  obj1.debug = true;
  obj1.velocityX = 5;
  obj1.velocityY = 5;
  obj2 = createSprite(200,200,60,80);
  obj2.shapeColor = "green";
  obj2.debug = true;
  obj3 = createSprite(300,300,60,80);
  obj3.shapeColor = "green";
  obj3.debug = true;
}

function draw() {
  background(0,0,0);  
  obj2.x = World.mouseX;
  obj2.y = World.mouseY;


  bounceOff(fixedRect,obj1);
  if(isTouching(obj2,obj3)){
    obj2.shapeColor = "red";
    obj3.shapeColor = "red";
  }

  else{
    obj2.shapeColor = "green";
    obj3.shapeColor = "green";
  }

  drawSprites();
}