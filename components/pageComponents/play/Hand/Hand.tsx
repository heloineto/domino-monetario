import { range } from '@lib/utils/math';
import classNames from 'clsx';
import { useMemo } from 'react';
import HandEnemyDomino from './Hand.EnemyDomino';
import HandPlayerDomino from './Hand.PlayerDomino';

type Props = {
  player: Player;
};

const Hand = ({ player }: Props) => {
  const isEnemy = useMemo(() => player.type === 'enemy', [player.type]);

  const wheelConfig = useMemo(() => {
    const length = player.hand.length;
    const rectHeight = isEnemy ? 224 * 0.6 : 224;
    const rectWidth = isEnemy ? 121.441322 * 0.6 : 121.441322;
    const radius = isEnemy ? -2000 : 2000;
    const divider = isEnemy
      ? range(2, 10, 64, 8 * 2, length)
      : range(2, 10, 32, 8, length);
    const middleIndex = (length - 1) / 2;
    const angleStep = 360 / divider / length;
    const rectRadius = radius - rectHeight / 2;

    return {
      length,
      rectHeight,
      rectWidth,
      radius,
      angleStep,
      divider,
      rectRadius,
      middleIndex,
    };
  }, [player.hand.length, isEnemy]);

  const Domino = useMemo(() => (isEnemy ? HandEnemyDomino : HandPlayerDomino), [isEnemy]);

  return (
    <>
      <div
        className={classNames(
          isEnemy ? 'bottom-0 right-0' : 'top-0 right-0',
          'absolute z-[60] grid h-12 w-12 select-none place-items-center rounded-full bg-white/50 font-display text-3xl'
        )}
      >
        {player.hand.length}
      </div>
      <div className="absolute top-0 left-1/2 h-full w-full">
        {player.hand.map((domino, index) => (
          <Domino
            key={`${domino[0]}-${domino[1]}`}
            domino={domino}
            index={index}
            wheelConfig={wheelConfig}
          />
        ))}
      </div>
    </>
  );
};

export default Hand;
