let gap = innerWidth / 10;

let points = [];

function setup() {
  canvas = createCanvas(innerWidth, innerHeight);
  
  for (let i = gap / 2; i < innerWidth; i += gap) {
    for (let j = gap / 2; j < innerHeight; j += gap) {
      points.push(
        {
          x: i,
          y: j
        }
      )
    }
  }
}

function draw() {
  background(33);

  stroke(255);
  strokeWeight(3);
  noFill();

  for (let i = 0; i < points.length; i++) {
    point(points[i].x, points[i].y);
  }
}