import classNames from 'clsx';
import Hand from '../Hand';
import usePlayer from '@lib/hooks/usePlayer';
import PlayerBank from './Player.Bank';
import _Player from '@lib/classes/Player';

interface Props extends ComponentProps<'div'> {
  player: _Player;
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
      {/* <Hand player={player} /> */}
      <PlayerBank player={player} />
    </div>
  );
};

export default Player;
