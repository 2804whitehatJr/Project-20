var car1, wall1;
var speed, weight;
var seprator1;

var car2, wall2;
var seprator2;

var car3, wall3;
var seprator3;

function setup()
 {
  createCanvas(800,550);

  speed=random(55,90)
  weight=random(400,1500)

  car1=createSprite(50,100,80,50);
  car1.velocityX= speed;
  //car1.velocityX=8;
  car1.shapeColor="white";

  wall1=createSprite(790,100,50,height/2);
  wall1.shapeColor="brown";

  seprator1=createSprite(0,170,1800,15);
  seprator1.shapeColor="black";

  speed=random(55,90)
  weight=random(400,1500)

  car2=createSprite(50,230,80,50);
  car2.velocityX= speed;
  car2.shapeColor="white";

  wall2=createSprite(790,230,50,height/2);
  wall2.shapeColor="brown";

  seprator2=createSprite(0,350,1800,15);
  seprator2.shapeColor="black";

  speed=random(55,90)
  weight=random(400,1500)
  
  car3=createSprite(50,430,80,50);
  car3.velocityX= speed;
  car3.shapeColor="white";

  wall3=createSprite(790,450,50,height/2);
  wall3.shapeColor="brown";

  seprator3=createSprite(0,520,1800,15);
  seprator3.shapeColor="black";
}

function draw() 
{
  background("green");  
  edges = createEdgeSprites();
  car1.bounceOff(edges);
  car2.bounceOff(edges);
  car3.bounceOff(edges);



  if (wall1.x - car1.x < (car1.width + wall1.width)/2  ) 
    
    { 
      car1.velocityX= 0;

      var deformation= 0.5 * weight * speed * speed/22500;

      if(deformation>180)
      {
        car1.shapeColor=color(255,0,0);
      }

     if(deformation<180 && deformation >100)
      {
        car1.shapeColor=color(230,230,0);
      }

      
      if(deformation<100)
      {
        car1.shapeColor=color(0,255,0);
      }
   } 
 
   if (wall2.x - car2.x < (car2.width + wall2.width )/2 ) 
    
   { 
     car2.velocityX= 0;


     var deformation= 0.5 * weight * speed * speed/22500;

     if(deformation>180)
     {
       car2.shapeColor=color(255,0,0);
     }

    if(deformation<180 && deformation >100)
     {
       car2.shapeColor=color(230,230,0);
     }

     
     if(deformation<100)
     {
       car2.shapeColor=color(0,255,0);
     }
    }

    if (wall3.x - car3.x < (car3.width + wall3.width )/2 ) 
    
    { 
      car3.velocityX= 0;
 
 
      var deformation= 0.5 * weight * speed * speed/22500;
 
      if(deformation>180)
      {
        car3.shapeColor=color(255,0,0);
      }
 
     if(deformation<180 && deformation >100)
      {
        car3.shapeColor=color(230,230,0);
      }
 
      
      if(deformation<100)
      {
        car3.shapeColor=color(0,255,0);
      }
     }
     
  
  drawSprites();
}