import { GameContext } from '@lib/context';
import { useContext, useMemo } from 'react';

const getTileRect = (double: boolean, dominoRect: Rect) => {
  const height = dominoRect.height;
  const width = double ? dominoRect.width : dominoRect.height;

  return { height, width };
};

const getWrapperRect = (rect: Rect, tile: Tile): Rect => {
  const newRect = {
    width: Math.max(rect.width, tile.x + tile.width),
    height: Math.max(rect.height, tile.y + tile.height),
  };

  console.log(newRect);

  return newRect;
};

// const handleOverflow = (direction: boolean) => {
//   if (direction) {
//     if (curr.x + curr.width > boardRect.width) return;
//   }
// };

const useTiles = (dominoRect: Rect, boardRect: Rect) => {
  const { game } = useContext(GameContext);
  const board = game?.board;

  const { tiles, wrapperRect } = useMemo(() => {
    const tiles: Tile[] = [];
    let wrapperRect: Rect = { width: 0, height: 0 };

    if (!board?.boardDominos || board?.boardDominos?.length === 0)
      return { tiles, wrapperRect };

    const addTile = (tile: Tile) => {
      tiles.push(tile);
      wrapperRect = getWrapperRect(wrapperRect, tile);
    };

    const { boardDominos } = board;

    const firstTile = {
      double: false,
      height: dominoRect.height,
      width: dominoRect.height,
      x: 0,
      y: 0,
    };

    addTile(firstTile);

    let direction = true;

    for (let index = 0; index < boardDominos.length; index += 1) {
      const domino = boardDominos[index];
      const prev = tiles[index];

      const curr: Partial<Tile> = {};

      curr.double = domino.rotation === 0;
      const { height, width } = getTileRect(curr.double, dominoRect);
      curr.height = height;
      curr.width = width;

      if (direction) {
        // Token 3
        curr.x = prev.x + prev.width;
        curr.y = prev.y;

        // Enough space for the width of the domino
        if (curr.x + curr.width <= boardRect.width) {
          addTile(curr as Tile);
          continue;
        }

        curr.height = dominoRect.height;
        curr.width = dominoRect.width;

        // Enough space for half the width of the domino
        if (
          !prev.double &&
          !curr.double &&
          curr.x + dominoRect.width <= boardRect.width
        ) {
          curr.rotation = 90;

          curr.x = prev.x + prev.width; // Nothing changed
          curr.y = prev.y + dominoRect.width / 2;

          addTile(curr as Tile);

          index += 1;
          if (index >= boardDominos.length) break;

          const next: Partial<Tile> = {};
          next.double = boardDominos[index].rotation === 0;
          next.height = dominoRect.height;
          next.width = dominoRect.height;
          next.rotation = next.double ? 90 : 180;
          next.x = curr.x - next.width / 2;
          next.y = curr.y + dominoRect.height * (3 / 4);

          addTile(next as Tile);

          direction = !direction;
          continue;
        }

        curr.rotation = curr.double ? 0 : 90;

        if (prev.double) {
          curr.x = prev.x;
          curr.y = prev.y + curr.height;
        } else {
          curr.x = prev.x + dominoRect.width;
          curr.y = prev.y + dominoRect.height * (3 / 4);
        }

        addTile(curr as Tile);

        index += 1;
        if (index >= boardDominos.length) break;

        const next: Partial<Tile> = {};
        next.double = boardDominos[index].rotation === 0;
        next.height = dominoRect.height;
        next.width = dominoRect.height;
        next.rotation = next.double ? 90 : 180;
        next.x = curr.x - next.width;
        next.y = curr.y + dominoRect.width / 2;

        addTile(next as Tile);

        direction = !direction;
        continue;
      }
      curr.rotation = 180;
      // Token 3
      curr.x = prev.x - curr.width;
      curr.y = prev.y;

      // Enough space for the width of the domino
      if (curr.x >= 0) {
        addTile(curr as Tile);
        continue;
      }

      curr.height = dominoRect.height;
      curr.width = dominoRect.width;

      // Enough space for half the width of the domino
      if (!prev.double && !curr.double && curr.x + dominoRect.width >= 0) {
        curr.rotation = 90;

        curr.x = prev.x - curr.width; // Nothing changed
        curr.y = prev.y + dominoRect.width / 2;

        addTile(curr as Tile);

        index += 1;
        if (index >= boardDominos.length) break;

        const next: Partial<Tile> = {};
        next.double = boardDominos[index].rotation === 0;
        next.height = dominoRect.height;
        next.width = dominoRect.height;
        next.rotation = next.double ? -90 : 0;
        next.x = curr.x;
        next.y = curr.y + dominoRect.height * (3 / 4);

        addTile(next as Tile);

        direction = !direction;
        continue;
      }

      curr.rotation = curr.double ? 0 : 90;

      if (prev.double) {
        curr.x = prev.x;
        curr.y = prev.y + curr.height;
      } else {
        curr.x = prev.x;
        curr.y = prev.y + dominoRect.height * (3 / 4);
      }

      addTile(curr as Tile);

      index += 1;
      if (index >= boardDominos.length) break;

      const next: Partial<Tile> = {};
      next.double = boardDominos[index].rotation === 0;
      next.height = dominoRect.height;
      next.width = dominoRect.height;
      next.rotation = next.double ? -90 : 0;
      next.x = curr.x + next.width / 2;
      next.y = curr.y + dominoRect.width / 2;

      addTile(next as Tile);

      direction = !direction;
      continue;
    }

    const prev = tiles.at(-1) as Tile;
    const lastTile: Partial<Tile> = {};

    lastTile.double = false;
    lastTile.height = dominoRect.height;
    lastTile.width = dominoRect.height;
    lastTile.x = prev.x;
    lastTile.y = prev.y;

    tiles.push(lastTile as Tile);
    wrapperRect = getWrapperRect(wrapperRect, lastTile as Tile);

    return { tiles, wrapperRect };
  }, [board, boardRect.width, dominoRect]);

  return { tiles, wrapperRect };
};

export default useTiles;
