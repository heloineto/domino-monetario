import Debug from '@components/elements/debug/Debug';
import { GameContext } from '@lib/context';
import classNames from 'clsx';
import { isEmpty, omit } from 'lodash';
import { useContext } from 'react';
import Deck from '../Deck';
import BoardDomino from './Board.Domino';
import BoardDragPlaceholder from './Board.DragPlaceholder';

interface Props extends ComponentProps<'div'> {}

const Board = ({ className, ...divProps }: Props) => {
  const { board, drag } = useContext(GameContext);

  if (!board) return null;

  return (
    <div className={classNames(className, 'flex')} {...divProps}>
      <div className="flex h-full w-44 flex-col items-center justify-center">
        <Deck className="h-60 w-auto" />
      </div>
      <div className="flex flex-grow items-center justify-center bg-red-200 p-2.5">
        {drag?.dragging && <BoardDragPlaceholder id="start" edge={board?.edges?.start} />}
        {board?.boardDominos?.map(({ rotation, domino }) => (
          <BoardDomino
            key={`${domino[0]}-${domino[1]}`}
            domino={domino}
            rotation={rotation}
          />
        ))}
        {board?.boardDominos && !isEmpty(board?.boardDominos) && drag?.dragging && (
          <BoardDragPlaceholder id="end" edge={board?.edges?.end} />
        )}
        <Debug value={drag} />
      </div>
    </div>
  );
};

export default Board;
