function setup() {
  createCanvas(400, 400);
}

function draw() {
 background(0,0,255)
  
let c = color('rgb(255,209,0)');
fill(c);
noStroke();
square(20, 20, 60);

c = color('rgb(32,255,0)');
fill(c);
noStroke();
square(20, 130, 80);
  
c = color('rgb(0,197,255)')
fill(c);
noStroke();
square(20,255,150);

c = color('rgb(236,108,108)');
fill(c);
noStroke();
circle(190,50,60)
  
c = color('rgb(255,0,254)');
fill(c);
noStroke();
circle(190,170,80);

c = color('rgb(255,0,0)');
fill(c);
noStroke();
circle(270,320,150);
  
c = color('rgb(247,255,0)');
fill(c);
noStroke();
triangle(280,80,315,20,350,80)}