import { GameContext } from '@lib/context';
import { useContext } from 'react';
import classNames from 'clsx';

interface Props extends ComponentProps<'div'> {}

const BoardRound = ({ className, ...restProps }: Props) => {
  const { game } = useContext(GameContext);

  if (!game) return null;

  if (game.round.over) return null;

  return (
    <div
      className={classNames(
        'fles items-center justify-center rounded-full border-2 border-white bg-white/50 text-center font-display text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg',
        className
      )}
    >
      <div>{game.round.results.length + 1}ª Rodada</div>
    </div>
  );
};

export default BoardRound;
