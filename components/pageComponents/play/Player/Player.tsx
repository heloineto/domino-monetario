import { useContext } from 'react';
import { GameContext } from '@lib/context';
import classNames from 'clsx';
import Hand from '../Hand';
import usePlayer from '@lib/hooks/usePlayer';

interface Props extends ComponentProps<'div'> {
  player: ReturnType<typeof usePlayer>;
}

const Player = ({ player, className, ...divProps }: Props) => {
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
