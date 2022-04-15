import { GameContext } from '@lib/context';
import classNames from 'clsx';
import { isEmpty } from 'lodash';
import { useContext } from 'react';
import Deck from '../Deck';
import BoardDomino from './Board.Domino';
import BoardDragPlaceholder from './Board.DragPlaceholder';

interface Props extends ComponentProps<'div'> {}

const Board = ({ className, ...divProps }: Props) => {
  const { board, drag } = useContext(GameContext);

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
        <Deck className="h-52 w-auto" />
      </div>
      <div className="flex flex-grow items-center justify-center p-2.5">
        {drag?.dragging ? (
          <BoardDragPlaceholder id="start" edge={board?.edges?.start} />
        ) : (
          <div style={{ width: 160 }} />
        )}
        {board?.boardDominos?.map(({ rotation, domino }) => (
          <BoardDomino
            key={`${domino[0]}-${domino[1]}`}
            domino={domino}
            rotation={rotation}
          />
        ))}
        {board?.boardDominos && !isEmpty(board?.boardDominos) && drag?.dragging ? (
          <BoardDragPlaceholder id="end" edge={board?.edges?.end} />
        ) : (
          <div style={{ width: 160 }} />
        )}
      </div>
    </div>
  );
};

export default Board;
