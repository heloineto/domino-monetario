import classNames from 'clsx';
import Deck from '../Deck';
import BoardDominos from './Board.Dominos';
import BoardRound from './Board.Round';

interface Props extends ComponentProps<'div'> {}

const Board = ({ className, ...divProps }: Props) => {
  return (
    <div
      className={classNames(
        className,
        'mx-5 flex overflow-hidden rounded-xl border-4 border-white/50'
      )}
      {...divProps}
    >
      <div className="flex h-full w-20 flex-shrink-0 flex-col items-center justify-center sm:w-20 md:w-24 lg:w-28 xl:w-32">
        <BoardRound />
        <Deck className="w-full" />
      </div>
      <BoardDominos />
    </div>
  );
};

export default Board;
