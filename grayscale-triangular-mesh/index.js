let gap = innerWidth / 19;
let points = [];
let offset = false;

function setup() {
  canvas = createCanvas(innerWidth, innerHeight);
  
  for (let i = gap / 2; i < innerWidth; i += gap) {
    for (let j = gap / 2; j < innerHeight; j += gap) {
      if (offset) {
        points.push({
          x: i + gap,
          y: j
        })
      } else {
        points.push({
          x: i,
          y: j
        })
      }

      offset = !offset;
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