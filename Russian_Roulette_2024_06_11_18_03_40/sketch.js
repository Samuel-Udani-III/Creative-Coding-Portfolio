let chambers = 6;  // Number of chambers in the revolver
let bulletPosition; // Position of the bullet
let currentChamber = 0; // Current chamber that is being fired
let gameOver = false; // To check if the game is over
let message = "Click the trigger to play.";
let triggerButton;
let spinButton;
let resetButton;
let spinCount = 6; // Counter for the number of spins, initially set to 6

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  resetGame();

  triggerButton = createButton('Pull Trigger');
  triggerButton.position(width / 2 - 50, height - 60);
  triggerButton.mousePressed(pullTrigger);
  
  spinButton = createButton('Spin Cylinder');
  spinButton.position(width / 2 - 50, height - 30);
  spinButton.mousePressed(spinCylinder);

  resetButton = createButton('Reset');
  resetButton.position(width / 2 - 25, height - 90);
  resetButton.mousePressed(resetGame);
}

function draw() {
  background(220);
  drawGun();
  fill(0);
  textSize(24);
  text(message, width / 2, height / 2 + 100);
  
  if (gameOver) {
    textSize(20);
    fill(255, 0, 0);
    text("Click Reset to play again.", width / 2, height / 2 + 140);
  }
}

function drawGun() {
  translate(width / 2, height / 2 - 50);
  fill(150);
  ellipse(0, 0, 200, 200); // Gun cylinder
  fill(0);
  for (let i = 0; i < chambers; i++) {
    let angle = TWO_PI / chambers * i;
    let x = cos(angle) * 70;
    let y = sin(angle) * 70;
    fill(i === currentChamber ? 'red' : 'black');
    ellipse(x, y, 40, 40); // Gun chambers
  }
  resetMatrix();
}

function resetGame() {
  bulletPosition = floor(random(chambers)); // Random position for the bullet
  currentChamber = 0;
  gameOver = false;
  message = "Click the trigger to play.";
  spinCount = 6; // Reset spin counter back to 6
  if (triggerButton) {
    triggerButton.html('Pull Trigger');
  }
  if (spinButton) {
    spinButton.attribute('disabled', false);
  }
}

function spinCylinder() {
  if (spinCount > 0) {
    bulletPosition = floor(random(chambers)); // Randomize the bullet position
    message = "Cylinder spun. Ready to play.";
    spinCount--;
  }
  if (spinCount === 0) {
    message = "No more spins allowed.";
    if (spinButton) {
      spinButton.attribute('disabled', true); // Disable spin button when spin count reaches 0
    }
  }
}

function pullTrigger() {
  if (gameOver) return;
  
  if (currentChamber === bulletPosition) {
    message = "Bang! You're dead.";
    gameOver = true;
  } else {
    message = "Click. You're safe.";
    currentChamber = (currentChamber + 1) % chambers;
    // Reset spin counter after each trigger pull
    spinCount = 6;
    bulletPosition = floor(random(chambers)); // Reset bullet position
    if (spinButton) {
      spinButton.removeAttribute('disabled'); // Enable spin button after trigger is pulled
    }
  }
}
