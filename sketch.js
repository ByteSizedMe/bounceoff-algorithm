var movingrect,fixedrect;

function setup() {
  createCanvas(400,400);
  

  movingrect = createSprite(200,100,30,80);
  fixedrect = createSprite(200,400,80,30);
  movingrect.shapeColor = "white";
  fixedrect.shapeColor = "black";
  
  movingrect.velocityY = 5;
  fixedrect.velocityY = -5;



}

function draw() {
  background("lightblue");  

  if(movingrect.x - fixedrect.x < movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
    ){
      movingrect.velocityX*=-1;
      fixedrect.velocityX*= -1;
    }
    if(movingrect.y - fixedrect.y < movingrect.height/2+fixedrect.height/2 && 
      fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2
      ){
        movingrect.velocityY*= -1;
        fixedrect.velocityY*= -1;
      }
  

  drawSprites();
}