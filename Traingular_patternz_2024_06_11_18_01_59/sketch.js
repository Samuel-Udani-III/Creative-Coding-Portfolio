function setup() {
  createCanvas(400, 400);
  noLoop(); 
}

function draw() {
  background(255); 

  
  const colors = [color('red'), color('orange'), color('white'), color('green')];

  
  const triangleSize = 50;

  
  for (let x = 0; x < width; x += triangleSize) {
    for (let y = 0; y < height; y += triangleSize) {
      
      const flip = (x / triangleSize + y / triangleSize) % 2 === 0;

      
      const c = colors[(x / triangleSize + y / triangleSize) % colors.length];

      
      if (flip) {
        push();
        translate(x + triangleSize / 2, y + triangleSize / 2);
        scale(-1, 1); 
        triangle(-triangleSize / 2, 0, triangleSize / 2, 0, 0, -triangleSize);
        pop();
      } else {
        fill(c);
        triangle(x, y, x + triangleSize, y, x + triangleSize / 2, y + triangleSize);
      }
    }
  }
}
