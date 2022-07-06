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

  const { tiles, wrapperRect } = useTiles(dominoRect, boardRect);

  const firstTile = tiles.at(0);
  const lastTile = tiles.at(-1);

  if (!board) return null;

  return (
    <div
      className="relative flex flex-grow items-center justify-center"
      ref={setBoardRef}
    >
      {/* <div
        className="absolute"
        style={{ width: wrapperRect.width, height: wrapperRect.height }}
      > */}
      <div
        className="absolute flex justify-end bg-green-500/50"
        style={{
          height: firstTile?.height,
          width: firstTile?.height,
          top: firstTile?.y,
          left: firstTile?.x,
        }}
      >
        <BoardDragPlaceholder
          visible={drag?.dragging}
          id="start"
          edge={board.edges.start}
          dominoRect={dominoRect}
        />
      </div>
      {board.boardDominos?.map(({ rotation, domino }, index) => {
        const tile = tiles[index + 1];

        return (
          <motion.div
            key={`${domino[0]}-${domino[1]}`}
            className="absolute flex flex-shrink-0 items-center justify-center border border-red-500"
            style={{
              height: tile.height,
              width: tile.width,
              top: tile.y,
              left: tile.x,
            }}
          >
            <BoardDomino
              height={dominoRect.height}
              width={dominoRect.width}
              domino={domino}
              rotation={rotation + (tile?.rotation ?? 0)}
            />
          </motion.div>
        );
      })}
      <div
        className="absolute  bg-blue-500/50"
        style={{
          height: lastTile?.height,
          width: lastTile?.width,
          top: lastTile?.y,
          left: lastTile?.x,
        }}
      >
        <BoardDragPlaceholder
          visible={board.boardDominos && !isEmpty(board?.boardDominos) && drag?.dragging}
          id="end"
          edge={board.edges.end}
          dominoRect={dominoRect}
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default BoardDominos;
