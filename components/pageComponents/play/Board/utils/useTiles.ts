import { GameContext } from '@lib/context';
import { useContext, useMemo } from 'react';

const getTileRect = (double: boolean, dominoRect: Rect) => {
  if (double) {
    const height = dominoRect.height;
    const width = dominoRect.width;

    return { height, width };
  }

  const height = dominoRect.width;
  const width = dominoRect.height;

  return { height, width };
};

const getWrapperRect = (rect: Rect, tile: Tile): Rect => {
  console.log(tile);

  const newRect = {
    width: Math.max(rect.width, tile.x + tile.width),
    height: Math.max(rect.height, tile.y + tile.height),
  };

  console.log(newRect);

  return newRect;
};

const useTiles = (dominoRect: Rect, boardRect: Rect) => {
  const { game } = useContext(GameContext);
  const board = game?.board;

  const { tiles, wrapperRect } = useMemo(() => {
    const tiles: Tile[] = [];

    let wrapperRect: Rect = { width: 0, height: 0 };

    if (!board) return { tiles, wrapperRect };

    const { boardDominos } = board;

    if (boardDominos.length === 0) return { tiles, wrapperRect };

    const firstTile = {
      double: false,
      height: dominoRect.height,
      width: dominoRect.height,
      x: 0,
      y: dominoRect.width / 2,
    };

    tiles.push(firstTile);
    wrapperRect = getWrapperRect(wrapperRect, firstTile);

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
        if (prev?.fakeDouble) curr.x = prev.x;
        else curr.x = prev.x + prev.width;

        if (prev.double === curr.double) {
          curr.y = prev.y;
        } else if (prev.double && !curr.double) {
          curr.y = prev.y + dominoRect.width / 2;
        } else {
          curr.y = prev.y - dominoRect.width / 2;
        }

        // Token 2
        if (curr.x + curr.width > boardRect.width) {
          curr.rotation = curr.double ? 0 : 90;

          curr.x += curr.double ? -curr.width : 0;

          curr.y += curr.double
            ? prev.height * 1.5
            : prev.double
            ? prev.height * 0.75
            : prev.height;

          tiles.push(curr as Tile);
          wrapperRect = getWrapperRect(wrapperRect, curr as Tile);

          index += 1;

          if (index >= boardDominos.length) break;

          const next: Partial<Tile> = {};

          next.double = boardDominos[index].rotation === 0;

          const { height, width } = getTileRect(next.double, dominoRect);
          next.height = height;
          next.width = width;

          const tile: Tile = {
            ...next,
            double: false,
            fakeDouble: next.double,
            rotation: next.double ? 90 : 180,
            y: curr.y + (next.double ? dominoRect.width : dominoRect.height),
            x: curr.x + (curr.double ? 0 : -dominoRect.width),
          } as Tile;

          tiles.push(tile);

          wrapperRect = getWrapperRect(wrapperRect, tile);

          direction = false;

          continue;
        }
      } else {
        curr.rotation = 180;
        curr.x = prev.x - curr.width;
        if (prev.double === curr.double) {
          if (prev?.fakeDouble) curr.y = prev.y + dominoRect.width;
          else curr.y = prev.y;
        } else if (prev.double && !curr.double) {
          curr.y = prev.y - dominoRect.width / 2;
          curr.x = prev.x - curr.height;
        } else {
          curr.y = prev.y + dominoRect.width / 2;
          curr.x = prev.x - curr.height;
        }

        // Token 2
        if (curr.x - curr.width < 0) {
          curr.rotation = curr.double ? 0 : 90;

          curr.x += curr.double ? 0 : curr.height;

          curr.y += curr.double
            ? -dominoRect.width / 2
            : prev.double
            ? dominoRect.width / 2
            : 0;

          tiles.push(curr as Tile);
          wrapperRect = getWrapperRect(wrapperRect, curr as Tile);

          index += 1;

          if (index >= boardDominos.length) break;

          const next: Partial<Tile> = {};

          next.double = boardDominos[index].rotation === 0;

          const { height, width } = getTileRect(next.double, dominoRect);
          next.height = height;
          next.width = width;

          const tile = {
            ...next,
            double: false,
            fakeDouble: next.double,
            rotation: next.double ? 90 : 0,
            y: curr.y + (next.double ? dominoRect.width : dominoRect.width),
            x:
              curr.x +
              (curr.double ? dominoRect.width : next.double ? dominoRect.height : 0),
          } as Tile;

          tiles.push(tile);
          wrapperRect = getWrapperRect(wrapperRect, tile);

          direction = true;

          continue;
        }
      }

      tiles.push(curr as Tile);
      wrapperRect = getWrapperRect(wrapperRect, curr as Tile);
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
