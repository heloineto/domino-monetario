import classNames from 'clsx';
import BoardDominos from './Board.Dominos';

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
      <BoardDominos />
    </div>
  );
};

export default Board;
