var bg,bgImg;
var car,carImg;
var l1,l2;
var obs,obsImg
var cone,coneImg;

function preload(){
bgImg=loadImage("background2.jpg")
carImg=loadImage("car img.png")
obsImg=loadImage("obstacle.png")
coneImg=loadImage("cone-traffic.png")

}

function setup(){
    createCanvas(1000,700)

    bg=createSprite(800,100,2000,700);
    bg.scale= 3
    bg.addImage(bgImg)
    bg.velocityX= -3

    car=createSprite(200,500,60,10);
    car.addImage(carImg)
    car.scale = 0.7
    car.setCollider("rectangle",0,0,350,100)


    l1 = createSprite(200,310,300,5)
    l1.shapeColor="green";
    l2 = createSprite(200,560,300,5)
    l2.shapeColor="red";
    l1.visible = false;
    l2.visible = false;
}

function draw(){
    background("lightgreen")
    if(bg.x<600){
    bg.x=800
    }


    car.collide(l2)
    car.collide(l1)
    
    //createCone();
    createObs();

    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        car.y-=20;
    }
    if(keyCode === DOWN_ARROW){
        car.y+=20;
    }
}

function createObs(){
  
  if(frameCount%200===0){
    obs= createSprite(900,220,30,40)
    obs.y = random(310,400);
    
    obs.scale= 0.4;      
    obs.velocityX=-5

    var i=round(random(0,1))
    if(i===1){
        obs.addImage(obsImg)
    }else{
        obs.addImage(coneImg)
    }

  }

    
}


function createCone(){
    if(frameCount%200===0){
        cone= createSprite(900,350,30,40)
        cone.y = random(310,500);
        cone.addImage(coneImg)
        cone.scale= 0.3;
        cone.velocityX= -4;
    }
   
    
}