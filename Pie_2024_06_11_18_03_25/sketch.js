var angles = [30, 60, 90, 120]; 
var labels = ['Pro Gamers', 'Sub Gamer', 'Average Gamer', 'Normies']; 
var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; 
function setup() {
  createCanvas(400, 400);
  noStroke();
  var lastAngle = 0;
  var radius = 150; 
  for (var i = 0; i < angles.length; i++) {
    fill(colors[i]);
    var startAngle = lastAngle;
    var endAngle = lastAngle + radians(angles[i]);
    arc(width / 2, height / 2, 300, 300, startAngle, endAngle, PIE);
    
    
    var labelAngle = (startAngle + endAngle) / 2;
    var labelX = width / 2 + cos(labelAngle) * (radius / 2); 
    var labelY = height / 2 + sin(labelAngle) * (radius / 2); 
    
    
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(labels[i], labelX, labelY);
    
    lastAngle = endAngle;
  }
}
