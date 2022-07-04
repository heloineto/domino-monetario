import { DragContext, GameContext } from '@lib/context';
import { useElementSize } from '@lib/hooks';
import { range } from '@lib/utils/math';
import { isEmpty } from 'lodash';
import { useContext, useMemo, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import BoardDomino from './Board.Domino';
import BoardDragPlaceholder from './Board.DragPlaceholder';
import { motion } from 'framer-motion';

interface Props {}

type Tile = {
  x: number;
  y: number;
  height: number;
  width: number;
  isDouble: boolean;
  rotation?: number;
};

const BoardDominos = ({}: Props) => {
  const { game } = useContext(GameContext);
  const drag = useContext(DragContext);

  const board = game?.board;

  console.log(board?.boardDominos);

  const scrollRef = useRef<HTMLDivElement>(null);

  const [setBoardRef, boardSize] = useElementSize();

  const dominoHeight = range(320, 1920, 80, 160, boardSize.width);
  const dominoWidth = dominoHeight / 2;

  const tileSide = dominoWidth;
  const colCount = Math.floor(boardSize.width / tileSide);
  const rowCount = Math.floor(boardSize.height / tileSide);

  const distanceY = (boardSize.height - rowCount * tileSide) / 2;
  const distanceX = (boardSize.width - colCount * tileSide) / 2;

  const halfY = Math.floor(rowCount / 2);
  const halfX = Math.floor(colCount / 2);

  console.log(board);

  const tiles = useMemo(() => {
    const tiles: Tile[] = [];

    if (!board) return tiles;

    const { boardDominos } = board;

    if (boardDominos.length === 0) return tiles;

    tiles.push({
      isDouble: false,
      height: dominoHeight,
      width: dominoHeight,
      x: 0,
      y: 0,
    });

    let leftToRight = true;

    for (let index = 0; index < boardDominos.length; index += 1) {
      const domino = boardDominos[index];
      const prev = tiles[index];

      const curr: Partial<Tile> = {};

      curr.isDouble = domino.rotation === 0;

      if (curr.isDouble) {
        curr.height = dominoHeight;
        curr.width = dominoWidth;
      } else {
        curr.height = dominoWidth;
        curr.width = dominoHeight;
      }

      if (leftToRight) {
        curr.x = prev.x + prev.width;
        if (prev.isDouble === curr.isDouble) {
          curr.y = prev.y;
        } else if (prev.isDouble && !curr.isDouble) {
          curr.y = prev.y + dominoWidth / 2;
        } else {
          curr.y = prev.y - dominoWidth / 2;
        }

        if (curr.x + curr.width > boardSize.width) {
          curr.rotation = 90;
          curr.x -= prev.isDouble ? prev.width * 1.5 : prev.height + dominoWidth / 2;
          curr.y += prev.isDouble ? prev.height : prev.height + dominoWidth / 2;

          tiles.push(curr as Tile);

          tiles.push({
            isDouble: false,
            height: dominoWidth,
            width: dominoHeight,
            rotation: 180,
            y: curr.y + dominoWidth / 2,
            x: curr.x - dominoWidth * 1.5,
          });

          leftToRight = false;

          continue;
        }
      } else {
        curr.rotation = 180;
        curr.x = prev.x - dominoHeight * 1.75;
        curr.y = prev.y;
        // if (prev.isDouble === curr.isDouble) {
        //   curr.y = prev.y;
        // } else if (prev.isDouble && !curr.isDouble) {
        //   curr.y = prev.y - dominoWidth / 2;
        // } else {
        //   curr.y = prev.y + dominoWidth / 2;
        // }
      }

      tiles.push(curr as Tile);
    }

    return tiles;
  }, [board, boardSize.width, dominoHeight, dominoWidth]);

  useHotkeys('right,d', () => {
    const scrollElem = scrollRef.current;
    if (!scrollElem) return;

    scrollElem.scrollLeft = scrollElem.scrollWidth;
  });

  useHotkeys('left,a', () => {
    const scrollElem = scrollRef.current;
    if (!scrollElem) return;

    scrollElem.scrollLeft = 0;
  });

  if (!board) return null;

  return (
    <div
      className="relative flex flex-grow items-center justify-center overflow-visible"
      ref={setBoardRef}
    >
      {/* <div
        className="absolute"
        style={{
          top: distanceY,
          left: distanceX,
        }}
      >
        {Array.from({ length: rowCount }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex" style={{ height: dominoWidth }}>
            {Array.from({ length: colCount }).map((_, colIndex) => (
              <div
                key={colIndex}
                className="absolute border border-red-500"
                style={{
                  top: rowIndex * tileSide,
                  left: colIndex * tileSide,
                  width: dominoWidth,
                  height: dominoWidth,
                }}
              />
            ))}
          </div>
        ))}
        <div
          className="absolute border border-red-500 bg-blue-500"
          style={{
            top: halfY * tileSide,
            left: halfX * tileSide,
            width: dominoWidth,
            height: dominoWidth,
          }}
        />
      </div> */}

      <BoardDragPlaceholder
        className="flex-shrink-0"
        visible={drag?.dragging}
        id="start"
        edge={board.edges.start}
        dominoHeight={dominoHeight}
        dominoWidth={dominoWidth}
      />
      {board.boardDominos?.map(({ rotation, domino }, index) => {
        const tile = tiles[index + 1];

        return (
          <motion.div
            key={`${domino[0]}-${domino[1]}`}
            className="absolute flex flex-shrink-0 items-center justify-center"
            style={{
              height: tile.height,
              width: tile.width,
              rotate: tile?.rotation ?? undefined,
              top: tile.y,
              left: tile.x,
            }}
          >
            <BoardDomino
              height={dominoHeight}
              width={dominoWidth}
              domino={domino}
              rotation={rotation}
            />
          </motion.div>
        );
      })}
      <BoardDragPlaceholder
        className="flex-shrink-0 bg-blue-500/50"
        visible={board.boardDominos && !isEmpty(board?.boardDominos) && drag?.dragging}
        id="end"
        edge={board.edges.end}
        dominoHeight={dominoHeight}
        dominoWidth={dominoWidth}
      />
    </div>
  );
};

export default BoardDominos;
