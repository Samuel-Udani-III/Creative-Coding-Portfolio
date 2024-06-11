function setup() {
  createCanvas(500,500);
  fill('rgb(255,166,0)');
  strokeWeight(3);
  rectMode(CENTER);
  let space = 50;
  for (x=0;x<width+50;x+=space){
    for (y=0;y<height+50;y+=space){
      line(x,y,x+space,y);
      line(x,y,x,y+space);
      ellipse(x,y,15)
      square(x+space/60,y+space/2,30)
      ellipse(x,y,70)
    }
  }
}