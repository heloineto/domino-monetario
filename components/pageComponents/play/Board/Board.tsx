import { DragContext, GameContext } from '@lib/context';
import classNames from 'clsx';
import { isEmpty } from 'lodash';
import { useContext } from 'react';
import Deck from '../Deck';
import BoardDomino from './Board.Domino';
import BoardDragPlaceholder from './Board.DragPlaceholder';
import BoardRound from './Board.Round';

interface Props extends ComponentProps<'div'> {}

const Board = ({ className, ...divProps }: Props) => {
  const { game } = useContext(GameContext);
  const drag = useContext(DragContext);

  const board = game?.board;

  if (!board) return null;

  return (
    <div
      className={classNames(
        className,
        'mx-5 flex overflow-hidden rounded-xl border-4 border-white/50'
      )}
      {...divProps}
    >
      <div className="flex h-full w-40 flex-col items-center justify-center">
        <BoardRound />
        <Deck className="h-52 w-auto" />
      </div>
      <div className="flex flex-grow items-center justify-center overflow-x-auto p-2.5">
        <div className="flex h-full items-center overflow-x-auto">
          {drag?.dragging ? (
            <BoardDragPlaceholder
              className="flex-shrink-0"
              id="start"
              edge={board.edges.start}
            />
          ) : (
            <div className="flex-shrink-0" style={{ width: 160, height: 160 }} />
          )}
          {board?.boardDominos?.map(({ rotation, domino }) => (
            <BoardDomino
              className="flex-shrink-0"
              key={`${domino[0]}-${domino[1]}`}
              domino={domino}
              rotation={rotation}
            />
          ))}
          {board?.boardDominos && !isEmpty(board?.boardDominos) && drag?.dragging ? (
            <BoardDragPlaceholder
              className="flex-shrink-0"
              id="end"
              edge={board.edges.end}
            />
          ) : (
            <div className="flex-shrink-0" style={{ width: 160, height: 160 }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
