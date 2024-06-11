var a = 0; 
let img1;

function preload() {
  img1 = loadImage("Tako.png");
}


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  translate(400,250,0)
  rotate(a)
  img1.resize(0, 0)
  translate(width/2)
  image(img1, 0, 0, 0, 0)
  a = a + 0.0
  +random (-.001,001)
  imageMode(CENTER)
}