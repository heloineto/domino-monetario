import classNames from 'clsx';
import Deck from '../Deck';

interface Props extends ComponentProps<'div'> {}

const Board = ({ className, ...divProps }: Props) => {
  return (
    <div className={classNames(className, '')} {...divProps}>
      <div className="flex h-full w-44 items-center justify-center">
        <Deck className="h-60 w-auto" />
      </div>
      <div></div>
    </div>
  );
};

export default Board;
