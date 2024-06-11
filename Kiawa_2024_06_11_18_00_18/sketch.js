var img1, img2 ;


function preload() {
  img1 = loadImage('Kiawa gif.gif');
  img2 = createImage('Kiawa gif.gif');
 
}
  
function setup() {
  createCanvas(900, 700);
  tint('yellow')
  
  imageMode(CENTER)
  
}

function draw(){
  image(img1,300,300);
}