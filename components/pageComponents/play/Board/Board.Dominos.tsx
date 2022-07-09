import { DragContext, GameContext } from '@lib/context';
import { useElementSize } from '@lib/hooks';
import { range } from '@lib/utils/math';
import { isEmpty } from 'lodash';
import { useContext, useMemo } from 'react';
import BoardDomino from './Board.Domino';
import BoardDragPlaceholder from './Board.DragPlaceholder';
import { motion } from 'framer-motion';
import useTiles from './utils/useTiles';
import classNames from 'clsx';

const DEBUG = false;

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

  const firstTile = tiles[0];
  const lastTile = tiles[tiles.length - 1];

  if (!board) return null;

  return (
    <div
      className="relative flex flex-grow items-center justify-center overflow-y-auto overflow-x-hidden"
      ref={setBoardRef}
    >
      <div
        className={classNames(DEBUG ? 'bg-red-500/50' : null, 'absolute')}
        style={{
          top: wrapperRect.height > boardRect.height ? '0' : undefined,
          width: wrapperRect.width,
          height: wrapperRect.height,
        }}
      >
        <div
          className={classNames(
            'absolute flex justify-end',
            DEBUG ? 'bg-green-500/50' : null
          )}
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
              className={classNames(
                'absolute flex flex-shrink-0 items-center justify-center',
                DEBUG ? 'border border-red-500' : null
              )}
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
          className={classNames(
            'absolute flex items-center justify-center',
            DEBUG ? 'bg-blue-500/50' : null
          )}
          style={{
            height: lastTile?.height,
            width: lastTile?.width,
            top: lastTile?.y,
            left: lastTile?.x,
          }}
        >
          <BoardDragPlaceholder
            visible={
              board.boardDominos && !isEmpty(board?.boardDominos) && drag?.dragging
            }
            id="end"
            edge={board.edges.end}
            dominoRect={dominoRect}
            tileRotation={lastTile?.rotation}
            style={
              lastTile?.corner
                ? {
                    height: lastTile?.height,
                    width: lastTile?.width,
                  }
                : undefined
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BoardDominos;
