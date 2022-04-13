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

  if (!board) return;

  return (
    <div className={classNames(className, 'flex')} {...divProps}>
      <div className="flex h-full w-44 items-center justify-center">
        <Deck className="h-60 w-auto" />
      </div>
      <div className="flex flex-grow bg-red-200 p-2.5">
        {drag?.dragging && (
          <BoardDragPlaceholder edge={{ value: board?.start, position: 'start' }} />
        )}
        {board?.boardDominos?.map(({ rotation, domino }) => (
          <BoardDomino
            key={`${domino[0]}-${domino[1]}`}
            domino={domino}
            rotation={rotation}
          />
        ))}
        {board?.boardDominos && !isEmpty(board?.boardDominos) && drag?.dragging && (
          <BoardDragPlaceholder edge={{ value: board?.end, position: 'end' }} />
        )}
      </div>
    </div>
  );
};

export default Board;
