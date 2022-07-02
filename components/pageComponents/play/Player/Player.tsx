import SecondaryIconButton from '@components/elements/buttons/SecondaryIconButton';
import { Portal } from '@mui/material';
import classNames from 'clsx';
import { Eye, EyeClosed } from 'phosphor-react';
import { useState } from 'react';
import Hand from '../Hand';

interface Props extends ComponentProps<'div'> {
  player: Player;
}

const Player = ({ player, className, ...divProps }: Props) => {
  const isEnemy = player.type === 'enemy';
  const [hidden, setHidden] = useState(isEnemy);

  return (
    <div
      className={classNames(
        className,
        'relative flex w-full flex-shrink-0 items-start justify-start space-x-0'
      )}
      {...divProps}
    >
      {isEnemy && typeof document !== 'undefined' ? (
        <Portal container={document.getElementById('right-buttons')}>
          <SecondaryIconButton
            colorName="green"
            className="order-2 h-10 w-10"
            onClick={() => setHidden((value) => !value)}
          >
            {hidden ? <EyeClosed className="h-10 w-10" /> : <Eye className="h-10 w-10" />}
          </SecondaryIconButton>
        </Portal>
      ) : null}
      <Hand player={player} isEnemy={isEnemy} hidden={hidden} />
    </div>
  );
};

export default Player;
