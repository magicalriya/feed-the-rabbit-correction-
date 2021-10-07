var garden,rabbit,apple,orangeLeaf,redLeaf;
var gardenImg,rabbitImg,appleImg,orangeLeafImg,redLeafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg=loadImage("orangeLeaf.png");
  redLeafImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  var select_sprites=Math.round(random(1,3));
   
  if (frameCount % 80 ==0){ 
     if(select_sprites==1){ 
      createapples(); 
    } else if(select_sprites==2){ 
      createorangeLeaf(); 
    } else {
      createredLeaf();
    }
   }

  drawSprites();
}

function createapples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY=4;
  apple.lifetime=150;
}
function createorangeLeaf(){
  orangeLeaf=createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale=0.1;
  orangeLeaf.velocityY=4;
  orangeLeaf.lifetime=150;
}
function createredLeaf(){
  redLeaf=createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redLeafImg);
  redLeaf.scale=0.1;
  redLeaf.velocityY=4;
  redLeaf.lifetime=150;
}