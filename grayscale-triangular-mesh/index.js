let gapX = innerWidth / 19;
let gapY = innerHeight / 39;
let points = [];
let offset = true;
let canvas;

function setup() {
  canvas = createCanvas(innerWidth, innerHeight);

  for (let i = gapX / 2; i < innerWidth - gapX; i += gapX) {
    let line = [];
    for (let j = gapY / 2; j < innerHeight; j += gapY) {
      let randomX = (Math.random() * 10 - 5) * gapX + (offset ? gapX / 2 : 0);
      let randomY = (Math.random() * 10 - 5) * gapY;
      if (offset) {
        line.push({
          x: i + gapX + randomX,
          y: j + randomY
        })
      } else {
        line.push({
          x: i + randomX,
          y: j + randomY
        })
      }

      offset = !offset;
    }
    for (let j = 0; j < line.length - 2; j++) {
      let gray = Math.floor(Math.random()*16).toString(16);
      fill('#' + gray + gray + gray);
      drawTriangle(line[j], line[j+1], line[j+2]);
    }
    points.push(line);
  }
}

function drawTriangle(a, b, c) {
  triangle(a.x, a.y, b.x, b.y, c.x, c.y);
}