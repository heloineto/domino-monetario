import { useContext } from 'react';
import { GameContext } from '@lib/context';
import classNames from 'clsx';
import Hand from '../Hand';

interface Props extends ComponentProps<'div'> {}

const Player = ({ className, ...divProps }: Props) => {
  const { player } = useContext(GameContext);

  return (
    <div
      className={classNames(
        className,
        'relative flex w-full flex-shrink-0 items-start justify-start space-x-0'
      )}
      {...divProps}
    >
      {player && <Hand player={player} />}
    </div>
  );
};

export default Player;
