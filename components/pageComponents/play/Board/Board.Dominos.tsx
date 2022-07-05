import { DragContext, GameContext } from '@lib/context';
import { useElementSize } from '@lib/hooks';
import { range } from '@lib/utils/math';
import { isEmpty } from 'lodash';
import { useContext, useMemo, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import BoardDomino from './Board.Domino';
import BoardDragPlaceholder from './Board.DragPlaceholder';
import { motion } from 'framer-motion';
import getTiles from './utils/getTiles';

interface Props {}

const BoardDominos = ({}: Props) => {
  const { game } = useContext(GameContext);
  const drag = useContext(DragContext);

  const board = game?.board;

  console.log(board?.boardDominos);

  const scrollRef = useRef<HTMLDivElement>(null);

  const [setBoardRef, boardRect] = useElementSize();

  const dominoRect = useMemo(() => {
    const height = range(320, 1920, 80, 160, boardRect.width);
    const width = height / 2;

    return { height, width };
  }, [boardRect.width]);

  const tileSide = dominoRect.width;
  const colCount = Math.floor(boardRect.width / tileSide);
  const rowCount = Math.floor(boardRect.height / tileSide);

  const distanceY = (boardRect.height - rowCount * tileSide) / 2;
  const distanceX = (boardRect.width - colCount * tileSide) / 2;

  const halfY = Math.floor(rowCount / 2);
  const halfX = Math.floor(colCount / 2);

  const tiles = useMemo(() => {
    if (!board?.boardDominos) return [];

    return getTiles(board.boardDominos, dominoRect, boardRect);
  }, [board?.boardDominos, boardRect, dominoRect]);

  console.log(board);

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
      <BoardDragPlaceholder
        className="flex-shrink-0"
        visible={drag?.dragging}
        id="start"
        edge={board.edges.start}
        dominoRect={dominoRect}
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
              transformOrigin: 'top left',
            }}
          >
            <BoardDomino
              height={dominoRect.height}
              width={dominoRect.width}
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
        dominoRect={dominoRect}
      />
    </div>
  );
};

export default BoardDominos;
