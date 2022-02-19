var background_img;
//var ground;
var cloud;
var boy, boy_running , boy_collided , boy_jumping
var bg;
var rock1 , rock2




function preload(){
  background_img = loadImage("assets/backgroundd.gif")
  //groundImg = loadImage("ground.png")
  boy_running = loadAnimation("assets/running 1 .png","assets/running 2 .png","assets/running 3 .png","assets/running 4 .png","assets/running 5 .png","assets/running 6 .png")
  boy_collided = loadAnimation("assets/boycollided.png",)
 // boy_jumping = loadImage("jump.1.png","jump.2.png","jump.3.png")
  rock1 = loadImage("assets/rockobs.png")
  rock2 = loadImage("assets/rockobs2.png")
  
}




function setup() {
  createCanvas(700,700);
 // ground = createSprite(200,700,700,20)
 // ground.addImage(groundImg)
 // ground.scale = 0.1
 // ground.velocityX=-1

  bg = createSprite(350,350,700,700)
  bg.addImage(background_img)
  bg.scale = 2
  bg.velocityX=-3

  boy = createSprite(50,600,20,20)
  boy.addAnimation("running",boy_running)

  


}



function draw() {
  background("black"); 
  if(bg.x<0){
    bg.x = bg.width/2
  } 

  //if(keyDown("space")&& boy.y >= 159){
  //  boy_jumping.changeAnimation(boy_jumping)
  //}


  spawnobstacles()


  drawSprites();
  console.log(bg.x)
}

function spawnobstacles(){
  if(frameCount%120===0){
  var obstacles = createSprite(600,650,20,20)
  obstacles.shapeColor="red"
  obstacles.velocityX=-3
  obstacles.scale=0.4

  var rand = Math.round(random(1,2))
  switch(rand){
    case 1 :obstacles.addImage(rock1);
            break;
    case 2 :obstacles.addImage(rock2);
            break;
    default:break;                
    
  }
  }

}

