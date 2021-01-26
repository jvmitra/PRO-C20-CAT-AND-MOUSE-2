var cat,catAnimation,catImage1,catImage4,mouse,mouseAnimation,bg,bgImage,mouseImage1;

function preload() {
   bgImage = loadImage("images/garden.png") 
   mouseAnimation = loadAnimation("images/mouse2.png","images/mouse3.png")
   catAnimation = loadAnimation("images/cat2.png","images/cat3.png")
   catImage1 = loadImage("images/cat1.png")
   catImage4 = loadAnimation("images/cat4.png")
   mouseImage1 = loadImage("images/mouse1.png")
   mouseImage4 = loadAnimation("images/mouse4.png")
}

function setup(){
   createCanvas(1000,750);
   bg = createSprite(500,400,600,400)
   bg.addImage(bgImage)
   bg.scale = 1.75;

   cat = createSprite(850,650,50,50)
   cat.addImage(catImage1)
   cat.scale = 0.1

   mouse = createSprite(250,650,50,50)
   mouse.scale = 0.1;
   mouse.addImage(mouseImage1)

   mouse.setCollider("rectangle",40,40,1,1)
   mouse.degbug=true;

}

function draw() {
    background("bg");
    
 /*if(cat.x-mouse.x(cat.width-mouse.width)/2){
        
   } */
  if( cat.collide(mouse)){
    cat.addAnimation("cat",catImage4)
    cat.changeAnimation("cat")
    mouse.addAnimation("mousegift",mouseImage4)
    mouse.changeAnimation("mousegift")
  }


    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
       cat.velocityX = -5
       cat.addAnimation("catRunning",catAnimation)
       cat.changeAnimation("catRunning")
       mouse.addAnimation("mouse",mouseAnimation)
       mouse.changeAnimation("mouse")
    }
  
  }