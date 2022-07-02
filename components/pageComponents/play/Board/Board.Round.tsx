import { GameContext } from '@lib/context';
import { useContext } from 'react';
import classNames from 'clsx';

interface Props extends ComponentProps<'div'> {}

const BoardRound = ({ className, ...restProps }: Props) => {
  const { game } = useContext(GameContext);

  if (!game) return null;

  if (game.roundOver) return null;

  return (
    <div
      className={classNames(
        'fles h-7 items-center justify-center rounded-full border-2 border-white bg-white/50 text-center font-display text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg',
        className
      )}
    >
      <div className="-mt-0.5">{game.roundResults.length + 1}ª Rodada</div>
    </div>
  );
};

export default BoardRound;
