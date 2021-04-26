var police ;
var terrorist;
var police_image;
var terrorist_image;
var bg;
var bullet;
var bullet_image;
var terroristsGroup;
var bulletsGroup;
var helicopter, helicopter_Img;
var Missiontime;
var gameState = "Play";
function preload(){
  police_image = loadImage("police.png");
  terrorist_image = loadImage("terrorist.png");
  bg= loadImage("Flag-India.jpg");
  bullet_image = loadImage("bullet image.png");
  helicopter_Img = loadImage("pic1 .png");
}

function setup(){
   createCanvas(900,600);

   police=createSprite(60,180,10,40);
   police.addImage("police",police_image);
   police.scale=0.4;

   terrorist=createSprite(900,180,10,40);
   terrorist.addImage("terrorist",terrorist_image);
   terrorist.scale=0.6;

   terroristsGroup = new Group();

   helicopter = createSprite(400,100);
   helicopter.addImage("helicopter",helicopter_Img);
   helicopter.visible = false;

}
function draw(){
  background(bg);
  police.y=mouseY;

  Missiontime = frameCount/100;

  text("MissionTime: "+Missiontime, 200,100);

  if(gameState === "Play"){

    spawnterrorist();
    spawnbullet();

    if(terroristsGroup.isTouching(bullet)){
      terroristsGroup.destroyEach();
      bullet.destroy();
    }

    if(frameCount>=100){
      gameState = "end";
      //terroristsGroup.setVelocityXEach(0);
     
    }

  }

  else if (gameState === "end"){

    
      console.log("heloo");
      bullet.visible = false;
      bullet.velocityX = 0;
      terroristsGroup.visible = false;
      police.visible = false;
      helicopter.visible = true;

  }

  drawSprites();
  
}

function spawnterrorist(){
  if(frameCount%70===0){
    terrorist=createSprite(720,180,10,40);
    terrorist.addImage("terrorist",terrorist_image);
    terrorist.y=Math.round(random(100,600));
    terrorist.scale=1;
    terrorist.velocityX=-5;
    terroristsGroup.add(terrorist);
    
  }
}

function spawnbullet(){
  if(frameCount%50===0){
    bullet=createSprite(140,police.y-40,20,10);
    bullet.addImage("bullet",bullet_image);
    bullet.velocityX=+5;
    bullet.scale=0.1
  }
  
}

