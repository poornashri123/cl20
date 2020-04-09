
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
var r,b,g
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  background("grey")
      createCanvas(1200,400);
      ellipse=createSprite(600,200,20)
      ellipse.visible=true;
      this.ellipse.position.x = mouseX;
    this.ellipse.position.y = mouseY;
}


function draw(){
  if(ellipse.isTouching(r)){
    background("red")
  }
  if(ellipse.isTouching(b)){
    background("blue")
  }
  if(ellipse.isTouching(g)){
background("green")
  }
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 
 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}