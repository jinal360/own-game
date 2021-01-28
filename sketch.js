var man,ground,obstacle,obstaclesGroup,groundImg,obstacleImg,manImg;
var invisibleGround;
var gameState = "rules"



function preload(){
  groundImg = loadImage("sprites/ground3.webp");
  obstacleImg = loadImage("sprites/obstacle.png");
  manImg = loadImage("sprites/man2.png");

}


function setup() {
  createCanvas(displayWidth - 30, 500);

  ground = createSprite(displayWidth/2 + 85, displayHeight/2 + 0);
  ground.addImage("ground", groundImg)
  ground.scale = 2.8;

  invisibleGround = createSprite(displayWidth/2 - 30,490,width,20);
  invisibleGround.shapeColor = "green";
  invisibleGround.debug = true

  man = createSprite(200,480,10,10);
  man.addImage("man", manImg);
  man.scale = 0.3;
  man.setCollider("rectangle",0,0,150,150);
  man.debug = true

  form = new Form();
}


function draw() {
  background("black"); 
  
  if(gameState === "rules"){
    
    form.display();
    ground.visible = false;
  }
  if(gameState === "play"){
    
    ground.visible = true;
    ground.velocityX = -3;
    
    if (ground.x < 500){
      ground.x = ground.width/2;
    }

    if(keyDown("space")){
    man.velocityY = -2;
    }

    man.velocityY = man.velocityY + 0.5;
    //man.collide(ground);
    man.collide(invisibleGround);

    obstaclesGroup = new Group();
    
    createObstacle();
  }

  drawSprites();

 // createQuestion();
}

function createObstacle(){

  if(frameCount % 200 === 0){
  obstacle = createSprite(950,460,30,50);
  obstacle.addImage("obstacle", obstacleImg);
  obstacle.velocityX = -3;
 // if(obstaclesGroup.isTouching(man)){
   // man.x = 200;

  }
  
  }
  
//}

/*function createQuestion(){

  if(frameCount % 100 === 0){

    text("fruit",650,300);
  }
}*/