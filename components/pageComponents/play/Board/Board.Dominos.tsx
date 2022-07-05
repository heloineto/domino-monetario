import { DragContext, GameContext } from '@lib/context';
import { useElementSize } from '@lib/hooks';
import { range } from '@lib/utils/math';
import { isEmpty } from 'lodash';
import { useContext, useMemo } from 'react';
import BoardDomino from './Board.Domino';
import BoardDragPlaceholder from './Board.DragPlaceholder';
import { motion } from 'framer-motion';
import useTiles from './utils/useTiles';

interface Props {}

const BoardDominos = ({}: Props) => {
  const { game } = useContext(GameContext);
  const drag = useContext(DragContext);

  const board = game?.board;

  const [setBoardRef, boardRect] = useElementSize();

  const dominoRect = useMemo(() => {
    const height = range(320, 1920, 80, 160, boardRect.width);
    const width = height / 2;

    return { height, width };
  }, [boardRect.width]);

  const tiles = useTiles(dominoRect, boardRect);

  const width =
    Math.max(...tiles.map(({ x }) => x)) -
    Math.min(...tiles.map(({ x }) => x)) +
    dominoRect.height;
  const height =
    Math.max(...tiles.map(({ y }) => y)) -
    Math.min(...tiles.map(({ y }) => y)) +
    dominoRect.height * 0.75;

  if (!board) return null;

  return (
    <div className="flex flex-grow items-center justify-center" ref={setBoardRef}>
      <div className="absolute bg-red-500/50" style={{ width, height }}>
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
    </div>
  );
};

export default BoardDominos;
