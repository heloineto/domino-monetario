import classNames from 'clsx';
import Hand from '../Hand';
import PlayerBank from './Player.Bank';

interface Props extends ComponentProps<'div'> {
  player: Player;
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
      <Hand player={player} />
      <PlayerBank player={player} />
    </div>
  );
};

export default Player;
