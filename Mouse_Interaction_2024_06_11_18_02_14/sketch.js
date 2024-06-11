function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
}

function draw() {
  // Nothing to do here
}

function mouseDragged() {
  fill(random(255), random(255), random(255), 150);
  ellipse(mouseX, mouseY, 20, 20);
}
