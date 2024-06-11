//Fonts and Colors: Val
//Animation: Samuel
//Sound: Tallal
//Mouse Interactions: Fahad

let mySound;
let font;
let numShapes = 50; 
let shapes = [];
let shapeColors = [];
let frameColors = []; // New array to store frame colors
let textPhysics = {
  pos: null,
  vel: null,
  acc: null,
  origPos: null,
  springStrength: 0.05,
  damping: 0.8
};
let frameZPositions = []; 
let frameSpeed = 3; 
let frameSpacing = 200; 
let frameSize = 100; 
let maxFrames = 20;

function preload() {
  mySound = loadSound('Welcome To BathSpa.mp3'); 
  font = loadFont('Iomanoid.otf');
}

function setup() {
  createCanvas(600, 400, WEBGL);
  generateShapeColors();
  resetTextPhysics();
  generateFrames();

  mySound.play();
}

function draw() {
  background(30, 10, 60);

  // Draw frames
  for (let i = 0; i < frameZPositions.length; i++) {
    drawFrame(frameZPositions[i], frameColors[i]);
  }

  // Update frame positions
  updateFramePositions();

  // Draw shapes
  for (let i = 0; i < min(numShapes, shapes.length); i++) {
    drawShape(shapes[i], shapeColors[i]);
  }

  // Update text physics
  updateTextPhysics();

  // Draw text last to ensure it appears in front
  displayText();
}

function generateShapeColors() {
  shapeColors = []; // Ensure the array is cleared before populating
  for (let i = 0; i < numShapes; i++) {
    let hue;
    if (i % 4 === 0) {
      // Sunset orange
      hue = random(20, 40);
    } else if (i % 4 === 1) {
      // Green
      hue = random(100, 130);
    } else if (i % 4 === 2) {
      // Dark blue
      hue = random(200, 240);
    } else {
      // Pink
      hue = random(300, 330);
    }
    let colorValue = color(hue, 100, 100);
    shapeColors.push(colorValue);
  }
}

function generateFrames() {
  frameZPositions = [];
  frameColors = [];
  let initialZ = -maxFrames * frameSpacing / 2;
  for (let i = 0; i < maxFrames; i++) {
    frameZPositions.push(initialZ + i * frameSpacing);
    frameColors.push(color(random(255), random(255), random(255))); // Generate random colors for frames
  }
}

function resetTextPhysics() {
  textPhysics.origPos = createVector(width / 2, height / 2);
  textPhysics.pos = textPhysics.origPos.copy();
  textPhysics.vel = createVector();
  textPhysics.acc = createVector();
}

function updateTextPhysics() {
  let attractor = createVector(width / 2, height / 2);
  let force = p5.Vector.sub(attractor, textPhysics.pos);
  force.mult(textPhysics.springStrength);
  textPhysics.acc.add(force);
  textPhysics.vel.add(textPhysics.acc);
  textPhysics.vel.mult(textPhysics.damping);
  textPhysics.pos.add(textPhysics.vel);
  textPhysics.acc.mult(0);
}

function displayText() {
  push();
  translate(0, 0, 50); // Move text slightly forward to ensure it appears in front of the frames
  textFont(font);
  textSize(32);
  textAlign(CENTER, CENTER); 
  fill(255); 

  let time = frameCount * 0.05; 
  let neonColor = getColorFromTime(time);
  fill(neonColor); // Use the neon color

  text("WELCOME TO METAVERSE", 0, 0);
  pop();
}

function drawFrame(zPos, frameColor) {
  push(); 
  translate(0, 0, zPos);
  noFill();
  stroke(frameColor); // Use the color for the frame
  strokeWeight(3);
  box(frameSize);
  pop();
}

function updateFramePositions() {
  for (let i = 0; i < maxFrames; i++) {
    frameZPositions[i] += frameSpeed;
    if (frameZPositions[i] > width / 1 + frameSpacing) {
      frameZPositions[i] = frameZPositions[i % maxFrames] - maxFrames * frameSpacing / 2;
    }
  }
}

function getColorFromTime(time) {
  let neonColors = [
    color(255, 165, 0),
    color(0, 191, 255), 
    color(255, 20, 147),
    color(255, 215, 0),
    color(0, 128, 0),
    color(0, 0, 255),
    color(128, 0, 128),
    color(255, 0, 0) 
  ];

  let index = floor(time) % neonColors.length;
  return neonColors[index];
}

function drawShape(shape, colorValue) {
  fill(colorValue);
  noStroke();
  ellipse(shape.x, shape.y, shape.size);
}