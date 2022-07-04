import SecondaryIconButton from '@components/elements/buttons/SecondaryIconButton';
import useWindowSize from '@lib/hooks/useWindowSize';
import { range } from '@lib/utils/math';
import { Portal } from '@mui/material';
import classNames from 'clsx';
import { Eye, EyeClosed } from 'phosphor-react';
import { useMemo, useState } from 'react';
import Hand from '../Hand';

interface Props extends ComponentProps<'div'> {
  player: Player;
}

const Player = ({ player, className, ...divProps }: Props) => {
  const isEnemy = player.type === 'enemy';
  const [hidden, setHidden] = useState(isEnemy);

  const windowSize = useWindowSize();
  const dominoHeight = useMemo(
    () => range(0, 1920, 100, 200, windowSize.width ?? 1920) * (isEnemy ? 0.6 : 1),
    [isEnemy, windowSize.width]
  );

  return (
    <div
      className={classNames(
        className,
        'relative flex w-full flex-shrink-0 items-start justify-center space-x-0 px-10'
      )}
      style={{
        height: isEnemy ? dominoHeight / 2 : dominoHeight,
        transform: isEnemy ? `translateY(${-dominoHeight / 2}px)` : undefined,
      }}
      {...divProps}
    >
      {isEnemy && typeof document !== 'undefined' ? (
        <Portal container={document.getElementById('right-buttons')}>
          <SecondaryIconButton
            colorName="green"
            className="order-2 hidden h-10 w-10"
            onClick={() => setHidden((value) => !value)}
          >
            {hidden ? <EyeClosed className="h-10 w-10" /> : <Eye className="h-10 w-10" />}
          </SecondaryIconButton>
        </Portal>
      ) : null}
      <Hand
        player={player}
        isEnemy={isEnemy}
        hidden={hidden}
        dominoHeight={dominoHeight}
      />
    </div>
  );
};

export default Player;
