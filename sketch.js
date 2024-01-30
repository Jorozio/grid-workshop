let rows = 5;
let cols = 5;
let size = 50;

function setup() {
  createCanvas(800, 800);
  background(30);

  
}

function draw() {
  for(let i = 0; i < rows;i++){
    for(let j = 0; j < cols; i++){
      const red = random(255);
      const green = random(255);
      const blue = random(255);

      const myColor = color(red,green,blue);
      fill(myColor)
      rect(i,j,size)
    }
  }

}
