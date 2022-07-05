import { GameContext } from '@lib/context';
import { useContext, useMemo } from 'react';

const useTiles = (dominoRect: Rect, boardRect: Rect) => {
  const { game } = useContext(GameContext);
  const board = game?.board;

  const tiles = useMemo(() => {
    const tiles: Tile[] = [];

    if (!board) return tiles;

    const { boardDominos } = board;

    if (boardDominos.length === 0) return tiles;

    tiles.push({
      double: false,
      height: dominoRect.height,
      width: dominoRect.height,
      x: 0,
      y: dominoRect.width / 2,
    });

    let direction = true;

    for (let index = 0; index < boardDominos.length; index += 1) {
      const domino = boardDominos[index];
      const prev = tiles[index];

      const curr: Partial<Tile> = {};

      curr.double = domino.rotation === 0;

      // TOKEN 1
      if (curr.double) {
        curr.height = dominoRect.height;
        curr.width = dominoRect.width;
      } else {
        curr.height = dominoRect.width;
        curr.width = dominoRect.height;
      }

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
          index += 1;

          if (index >= boardDominos.length) break;

          const next: Partial<Tile> = {};

          next.double = boardDominos[index].rotation === 0;

          // TOKEN 1
          if (next.double) {
            next.height = dominoRect.height;
            next.width = dominoRect.width;
          } else {
            next.height = dominoRect.width;
            next.width = dominoRect.height;
          }

          tiles.push({
            ...next,
            double: false,
            fakeDouble: next.double,
            rotation: next.double ? 90 : 180,
            y: curr.y + (next.double ? dominoRect.width : dominoRect.height),
            x: curr.x + (curr.double ? 0 : -dominoRect.width),
          } as Tile);

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
          index += 1;

          if (index >= boardDominos.length) break;

          const next: Partial<Tile> = {};

          next.double = boardDominos[index].rotation === 0;

          // TOKEN 1
          if (next.double) {
            next.height = dominoRect.height;
            next.width = dominoRect.width;
          } else {
            next.height = dominoRect.width;
            next.width = dominoRect.height;
          }

          tiles.push({
            ...next,
            double: false,
            fakeDouble: next.double,
            rotation: next.double ? 90 : 0,
            y: curr.y + (next.double ? dominoRect.width : dominoRect.width),
            x:
              curr.x +
              (curr.double ? dominoRect.width : next.double ? dominoRect.height : 0),
          } as Tile);

          direction = true;

          continue;
        }
      }

      tiles.push(curr as Tile);
    }

    return tiles;
  }, [board, boardRect.width, dominoRect.height, dominoRect.width]);

  return tiles;
};

export default useTiles;
