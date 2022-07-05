const getTiles = (boardDominos: BoardDomino[], dominoRect: Rect, boardRect: Rect) => {
  const tiles: Tile[] = [];

  if (boardDominos.length === 0) return tiles;

  tiles.push({
    double: false,
    height: dominoRect.height,
    width: dominoRect.height,
    x: 0,
    y: 0,
  });

  let leftToRight = true;

  for (let index = 0; index < boardDominos.length; index += 1) {
    const domino = boardDominos[index];
    const prev = tiles[index];

    const curr: Partial<Tile> = {};

    curr.double = domino.rotation === 0;

    if (curr.double) {
      curr.height = dominoRect.height;
      curr.width = dominoRect.width;
    } else {
      curr.height = dominoRect.width;
      curr.width = dominoRect.height;
    }

    if (leftToRight) {
      curr.x = prev.x + prev.width;
      if (prev.double === curr.double) {
        curr.y = prev.y;
      } else if (prev.double && !curr.double) {
        curr.y = prev.y + dominoRect.width / 2;
      } else {
        curr.y = prev.y - dominoRect.width / 2;
      }

      if (curr.x + curr.width > boardRect.width) {
        curr.rotation = curr.double ? 0 : 90;

        curr.x += curr.double ? -curr.width : 0;

        curr.y += curr.double
          ? prev.height * 1.5
          : prev.double
          ? prev.height * 0.75
          : prev.height;

        tiles.push(curr as Tile);
        index += 1;

        if (index >= boardDominos.length) break;

        const next: Partial<Tile> = {};
        next.double = boardDominos[index].rotation === 0;

        tiles.push({
          double: next.double,
          height: dominoRect.width,
          width: dominoRect.height,
          rotation: next.double ? 90 : 180,
          y: curr.y + (next.double ? dominoRect.height : dominoRect.height),
          x: curr.x + (curr.double ? 0 : -dominoRect.width),
        });

        leftToRight = false;

        continue;
      }
    } else {
      curr.rotation = 180;
      curr.x = prev.x - curr.width;
      if (prev.double === curr.double) {
        curr.y = prev.y;
      } else if (prev.double && !curr.double) {
        curr.y = prev.y - dominoRect.width / 2;
        curr.x = prev.x - curr.height;
      } else {
        curr.y = prev.y + dominoRect.width / 2;
        curr.x = prev.x - curr.height;
      }

      if (curr.x - curr.width < 0) {
        curr.rotation = 90;
        curr.x += curr.height;
        curr.y += 0;

        tiles.push(curr as Tile);
        index += 1;

        if (index >= boardDominos.length) break;

        tiles.push({
          double: false,
          height: dominoRect.width,
          width: dominoRect.height,
          rotation: 0,
          y: curr.y + dominoRect.width,
          x: curr.x,
        });

        leftToRight = true;

        continue;
      }
    }

    tiles.push(curr as Tile);
  }

  return tiles;
};

export default getTiles;
