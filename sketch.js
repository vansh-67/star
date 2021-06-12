const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var starBody,star,fairy;
var star_img,bg_img,fairy_ani;
var fairy_sound

function preload(){
  star_img = loadImage("images/star.png");
  bg_img = loadImage("images/starNight.png");
  fairy_ani = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
  fairy_sound = loadSound("sound/JoyMusic.mp3");
}

function setup(){
  createCanvas(750,800);
  myEngine = Engine.create();
  myWorld = myEngine.world;

var body_options = {
	isStatic: true
} 
 
  starBody = Bodies.circle(500,20,5,body_options);
  World.add(myWorld,starBody);

  star = createSprite(starBody.position.x,starBody.position.y,5,5);
  star.addImage("star",star_img);
  star.scale = 0.2;

  fairy = createSprite(200,500,50,50);
  fairy.addAnimation("fairy",fairy_ani);
  fairy.scale = 0.2;
  fairy.debug = false;
  fairy.setCollider("rectangle",490,-30,100,150);
}

function draw(){
  background(bg_img);

  //fairy_sound.play();

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  Engine.update(myEngine);
  console.log(starBody.position.y);

  keyPressed();
  drawSprites();
}

function keyPressed(){
	if(star.isTouching(fairy)){
		Matter.Body.setStatic(starBody,true);
  }
 else{ if(keyDown("UP_ARROW")){
	    Matter.Body.setStatic(starBody,false);
     }

       if(keyDown("RIGHT_ARROW")){
	     fairy.x = fairy.x + 20;
     }

       if(keyDown("LEFT_ARROW")){
	     fairy.x = fairy.x - 20;
     }
    } 
    }
