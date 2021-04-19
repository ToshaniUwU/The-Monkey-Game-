//game states
 var PLAY=1;
var END=0;
var gameState=1;
var fruit1,fruit2,fruit3,fruit4;
var sword;       
var score;
var fruitGroup
function preload(){
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  monsterImage=loadAnimation("alien1.png","alien2.png");
 swordImage=loadImage("sword.png");
  gameOverImage=loadImage("gameover.png");
}
function setup(){
  createCanvas(600,600);
  
  //creating the sword 
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  //making collider for the sword
 sword.setCollider("rectangle",0,0,40,40);
  
  score=0;
  
  //creating the groups that will be needed in the game 
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
}
function draw(){
background("lightblue");
  
  if(gameState===PLAY){
   //making the sword move in all directions 
  sword.x=World.mouseX
  sword.y=World.mouseY 
   
    
  //creating the functions needed in the project
  spawnFruits();
  spawnEnemy();  
    
    
     //making the fruit destroy wehn touching and giving points 
  if(fruitGroup.isTouching(sword)){
   fruitGroup.destroyEach()
    score=score+1;
  }}
  
  if(gameState===END){
     if(sword.isTouching(enemyGroup))
       fruitGroup.destroyEach();
       enemyGroup.destroyEach();
      fruitGroup.setVelocityEach(0);
      enemyGroup.setVelocityEach(0);
       
    // resetting the position of the sword
    sword.y=200;
      sword.x=200;
      sword.addImage(gameOverImage);
  
  }  
  //adding the score board
  fill("black");
  stroke("blue");
  text("score:"+ score,400,70);
  drawSprites();
}
 function spawnFruits(){
   if(World.frameCount % 80 === 0){
     fruit =createSprite(400,200,20,20);
     fruit.scale=0.2
     fruit.debug=false;
     r=Math.round(random(1,4));
     if (r==1){
       fruit.addImage(fruit1);
     }
       else if (r==2){
         fruit.addImage(fruit2);
       }
     else if (r==3){
       fruit.addImage(fruit3);
     } 
     else if (r==4){
       fruit.addImage(fruit4);
     }
 fruit.y=Math.round(random(50,340));
     fruit.velocityX=-7;
     fruit.setLifetime=100;
     
     fruitGroup.add(fruit);
   
   }
 }
     
   function spawnEnemy(){
     if(World.frameCount% 200 ===0){
       monster =createSprite(400,200,20,20);
       monster.addAnimation("moving",monsterImage)
       monster.y=Math.round(random(10,300));
    monster.velocityX=-(8+(score/10));
    monster.setLifetime=50;
        enemyGroup.add(monster);
     }
   }
