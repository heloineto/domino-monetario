import { GameContext } from '@lib/context';
import classNames from 'clsx';
import { useContext } from 'react';
import Deck from '../Deck';
import BoardDomino from './Board.Domino';
import BoardPlaceholder from './Board.Placeholder';

interface Props extends ComponentProps<'div'> {}

const Board = ({ className, ...divProps }: Props) => {
  const { board, drag } = useContext(GameContext);

  return (
    <div className={classNames(className, 'flex')} {...divProps}>
      <div className="flex h-full w-44 items-center justify-center">
        <Deck className="h-60 w-auto" />
      </div>
      <div className="flex flex-grow bg-red-200 p-2.5">
        {drag?.domino && <BoardPlaceholder domino={drag.domino} position="start" />}
        {board?.boardDominos?.map(({ rotate, domino }) => (
          <BoardDomino
            key={`${domino[0]}-${domino[1]}`}
            domino={domino}
            rotate={rotate}
          />
        ))}
        {drag?.domino && <BoardPlaceholder domino={drag.domino} position="end" />}
      </div>
    </div>
  );
};

export default Board;
