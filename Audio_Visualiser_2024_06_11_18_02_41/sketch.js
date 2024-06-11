let numBars = 30;
let barWidth;
let angleOffset;
let rotationAngle = 0;
let rotationSpeed = 1;
let song;
let fft;
let isPlaying = false;

function preload() {
  song = loadSound('Song.mp3');
}

function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  fft = new p5.FFT();
  barWidth = 360 / numBars;
  angleOffset = -90;
  let playButton = createButton('Play');
  playButton.position(width / 2 - 25, height - 50);
  playButton.mousePressed(startPlaying);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  if (isPlaying) {
    rotationAngle += rotationSpeed;
  }
  let spectrum = fft.analyze();
  for (let i = 0; i < numBars; i++) {
    let index = Math.floor(map(i, 0, numBars, 0, spectrum.length));
    let barHeight = map(spectrum[index], 0, 255, 10, height / 2);
    let angle = i * barWidth + angleOffset + rotationAngle;
    let x = cos(angle) * (height / 4);
    let y = sin(angle) * (height / 4);
    let barColor = color(map(i, 0, numBars, 0, 255), 150, 255);
    fill(255 - barColor.levels[0], 255 - barColor.levels[1], 255 - barColor.levels[2]);
    rect(x, y, barWidth, -barHeight);
  }
}

function startPlaying() {
  if (!isPlaying) {
    isPlaying = true;
    song.play();
  }
}
