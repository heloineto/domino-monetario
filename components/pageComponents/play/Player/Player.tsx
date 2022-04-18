import SecondaryIconButton from '@components/elements/buttons/SecondaryIconButton';
import classNames from 'clsx';
import { Eye, EyeClosed } from 'phosphor-react';
import { useMemo, useState } from 'react';
import Hand from '../Hand';
import PlayerBank from './Player.Bank';
import PlayerInfo from './Player.Info';

interface Props extends ComponentProps<'div'> {
  player: Player;
}

const Player = ({ player, className, ...divProps }: Props) => {
  const isEnemy = useMemo(() => player.type === 'enemy', [player.type]);
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={classNames(
        className,
        'relative flex w-full flex-shrink-0 items-start justify-start space-x-0'
      )}
      {...divProps}
    >
      {isEnemy && (
        <div>
          <SecondaryIconButton
            colorName="yellow"
            className="absolute top-3 right-20 z-50 h-10 w-10"
            onClick={() => setHidden((value) => !value)}
          >
            {hidden ? <EyeClosed className="h-10 w-10" /> : <Eye className="h-10 w-10" />}
          </SecondaryIconButton>
        </div>
      )}
      <Hand player={player} isEnemy={isEnemy} hidden={hidden} />
      <PlayerBank player={player} />
      <PlayerInfo player={player} />
    </div>
  );
};

export default Player;
