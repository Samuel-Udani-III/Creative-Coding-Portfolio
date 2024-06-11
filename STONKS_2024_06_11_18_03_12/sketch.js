function setup() {
  createCanvas(800, 600);
  background(255);

  
  stroke(0);
  line(100, 500, 700, 500); 
  line(100, 500, 100, 100); 

  
  let data = [450, 400, 350, 300, 250, 200, 150];
  let x = 100;
  let spacing = 80;
  for (let i = 0; i < data.length; i++) {
    ellipse(x, data[i], 10, 10);
    if (i < data.length - 1) {
      line(x, data[i], x + spacing, data[i + 1]);
    }
    x += spacing;
  }

  
  line(100, 100, 90, 110); 
  line(100, 100, 110, 110); 

  
  textSize(32);
  fill(0);
  text("STONKS", 350, 550);
}
