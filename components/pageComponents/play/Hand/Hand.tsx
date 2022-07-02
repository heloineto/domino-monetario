import useWindowSize from '@lib/hooks/useWindowSize';
import { range } from '@lib/utils/math';
import { useMemo } from 'react';
import HandEnemyDomino from './Hand.EnemyDomino';
import HandPlayerDomino from './Hand.PlayerDomino';

type Props = {
  player: Player;
  isEnemy: boolean;
  hidden: boolean;
};

const getDominoRect = (isEnemy: boolean) => {};

const Hand = ({ player, isEnemy, hidden }: Props) => {
  const windowSize = useWindowSize();

  const wheelConfig = useMemo(() => {
    const windowWidth = windowSize.width ?? 1920;

    const length = player.hand.length;
    let rectWidth = range(0, 1920, 50, 100, windowWidth);
    let rectHeight = rectWidth * 2;
    let radius = 2000;
    const divider = isEnemy ? range(2, 10, 64, 16, length) : range(2, 10, 32, 8, length);

    if (isEnemy) {
      rectHeight *= 0.6;
      rectWidth *= 0.6;
      radius *= -1;
    }

    const arcLength = Math.min(windowWidth, rectWidth * length);
    const arcAngle = arcLength / ((Math.PI / 180) * radius);

    const middleIndex = (length - 1) / 2;
    const angleStep = arcAngle / length;
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
  }, [player.hand.length, isEnemy, windowSize]);

  const HandDomino = isEnemy ? HandEnemyDomino : HandPlayerDomino;

  return (
    <div className="absolute top-0 left-1/2 h-full w-full">
      {player.hand.map((domino, index) => (
        <HandDomino
          key={`${domino[0]}-${domino[1]}`}
          domino={domino}
          index={index}
          wheelConfig={wheelConfig}
          hidden={hidden}
        />
      ))}
    </div>
  );
};

export default Hand;
