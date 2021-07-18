var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall= createSprite(1500,200,60,250);


  speed = random (55,30);
  weight= random (400,1500);

}

function draw() {
  background(255,255,255);  
  car.collide(wall);
  car.velocityX = speed;

  if(wall.x-car.x < (car.weidth+wall.weidth)/2)
  {

    car.velovityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      car.shapeColor = color("red");
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor = color("yellow");
    }

    if(deformation<100)
    {
      car.shapeColor = color("green");
    }
  }
  drawSprites();
}