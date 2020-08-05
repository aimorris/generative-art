let tiles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);

  tiles.push(
    {
      x: 0,
      y: 0,
      width: innerWidth,
      height: innerHeight
    }
  );
}

function draw() {
  background(33);

  stroke(255);
  strokeWeight(5);
  noFill();

  for (let i = 0; i < tiles.length; i++) {
    let tile = tiles[i];
    rect(tile.x, tile.y, tile.width, tile.height);

    if (checkSplit(tile)) {
      // 1: split vertically, 0: split horizontally
      let splitDir = Math.round(Math.random());
      if (splitDir) {
        splitTileVertical(tile, i);
      } else {
        splitTileHorizontal(tile, i);
      }
    }
  }
}

function checkSplit(tile) {
  // Is the tile already too small?
  if (tile.width < innerWidth / 10 || tile.height < innerHeight / 6) return false;

  // Is the tile a square?
  return Math.round(Math.random());
}

function splitTileVertical(tile, i) {
  // Remove tile from tiles array
  tiles.splice(i, 1);

  // Split tile into two new tiles
  let newTileA = {
    x: tile.x,
    y: tile.y,
    width: tile.width / 2,
    height: tile.height
  };

  let newTileB = {
    x: tile.x + (tile.width / 2),
    y: tile.y,
    width: tile.width / 2,
    height: tile.height
  };

  // Add both new tiles
  tiles.splice(i, 0, newTileA);
  tiles.splice(i + 1, 0, newTileB);
}

function splitTileHorizontal(tile, i) {
  // Remove tile from tiles array
  tiles.splice(i, 1);

  // Split tile into two new tiles
  let newTileA = {
    x: tile.x,
    y: tile.y,
    width: tile.width,
    height: tile.height  / 2
  };

  let newTileB = {
    x: tile.x,
    y: tile.y + (tile.height / 2),
    width: tile.width,
    height: tile.height / 2
  };

  // Add both new tiles
  tiles.splice(i, 0, newTileA);
  tiles.splice(i + 1, 0, newTileB);
}