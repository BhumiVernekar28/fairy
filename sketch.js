var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairySound,fairySprite;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage1.png");
	fairySound = loadSound("sound/JoyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
     fairySound.play() 

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairySprite = createSprite(150,450,10,10);
	fairySprite.addAnimation("fairy",fairyImg);
	fairySprite.scale = 0.3;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

 // console.log(star.y);

  //write code to stop star in the hand of fairy
  
  if(starBody.position.y > 450){
      
	starBody.position.x = 650;
	starBody.position.y = 450;
  }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right

	
	if(keyCode === LEFT_ARROW ) {
		fairySprite.x=fairySprite.x-20
		 
	}
	
  
	if(keyCode === RIGHT_ARROW ) {
      fairySprite.x=fairySprite.x+20
	 
	}

}
