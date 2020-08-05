let tiles = [];
let colors;

function setup() {
  createCanvas(innerWidth, innerHeight);

  tiles.push(
    {
      x: 0,
      y: 0,
      width: innerWidth,
      height: innerHeight,
      split: Math.round(Math.random() * 10)
    }
  );

  colors = [color(33, 33, 33), color(33, 33, 33), color(33, 33, 33), color(33, 33, 33), color(33, 33, 33), color(0, 0, 0), color(230, 0, 30), color(250, 200, 0), color(0, 65, 170)];

  background(33);

  stroke(255);
  strokeWeight(5);
  noFill();

  for (let j = 0; j < 100; j++) {
    for (let i = 0; i < tiles.length; i++) {
      let tile = tiles[i];
      rect(tile.x, tile.y, tile.width, tile.height);
  
      let color = colors[Math.floor(Math.random() * colors.length)];
      fill(color);
  
      if (checkSplit(tile)) {
        // 1: split vertically, 0: split horizontally
        let splitDir;

        if (tile.height > tile.width) {
          splitDir = Math.round(Math.random());
        } else {
          splitDir = Math.round(Math.random() * 3);
        }

        if (splitDir) {
          splitTileVertical(tile, i);
        } else {
          splitTileHorizontal(tile, i);
        }
      }
    }
  }
}

function checkSplit(tile) {
  // Is the tile already too small?
  if (tile.width < innerWidth / 10 || tile.height < innerHeight / 5) return false;

  return tile.split;
}

function splitTileVertical(tile, i) {
  // Remove tile from tiles array
  tiles.splice(i, 1);

  // Split tile into two new tiles
  if (tile.size > innerWidth / 3) {
    splitA = 1;
    splitB = 1;
  } else {
    splitA = Math.round(Math.random() * 10);
    splitB = Math.round(Math.random() * 10);
  }

  let newTileA = {
    x: tile.x,
    y: tile.y,
    width: tile.width / 2,
    height: tile.height,
    split: splitA
  };

  let newTileB = {
    x: tile.x + (tile.width / 2),
    y: tile.y,
    width: tile.width / 2,
    height: tile.height,
    split: splitB
  };

  // Add both new tiles
  tiles.splice(i, 0, newTileA);
  tiles.splice(i + 1, 0, newTileB);
}

function splitTileHorizontal(tile, i) {
  // Remove tile from tiles array
  tiles.splice(i, 1);

  // Split tile into two new tiles
  if (tile.height > innerHeight / 3 || tile.width > innerWidth / 5) {
    splitA = 1;
    splitB = 1;
  } else {
    splitA = Math.round(Math.random() * 10);
    splitB = Math.round(Math.random() * 10);
  }

  let newTileA = {
    x: tile.x,
    y: tile.y,
    width: tile.width,
    height: tile.height / 2,
    split: splitA
  };

  let newTileB = {
    x: tile.x,
    y: tile.y + (tile.height / 2),
    width: tile.width,
    height: tile.height / 2,
    split: splitB
  };

  // Add both new tiles
  tiles.splice(i, 0, newTileA);
  tiles.splice(i + 1, 0, newTileB);
}