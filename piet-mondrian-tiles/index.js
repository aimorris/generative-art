let tiles = [];

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
  if (tile.width < innerWidth / 20 || tile.height < innerHeight / 10) return false;

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