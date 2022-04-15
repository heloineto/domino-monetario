import usePlayer from '@lib/hooks/usePlayer';
import { range } from '@lib/utils/math';
import { useMemo } from 'react';
import HandDomino from './Hand.Domino';

type Props = {
  player: ReturnType<typeof usePlayer>;
  hidden?: boolean;
  inverted?: boolean;
};

const Hand = ({ player, hidden, inverted }: Props) => {
  const wheelConfig = useMemo(() => {
    const length = player.hand.length;
    const rectHeight = 224;
    const rectWidth = 121.441322;
    const radius = player.type === 'enemy' ? -2000 : 2000;
    const divider = range(2, 10, 32, 8, length);
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
  }, [player.hand.length, inverted]);

  return (
    <div className="absolute top-0 left-1/2 h-full w-full">
      {player.hand.map((domino, index) => (
        <HandDomino
          key={`${domino[0]}-${domino[1]}`}
          domino={domino}
          index={index}
          wheelConfig={wheelConfig}
          playerType={player.type}
        />
      ))}
    </div>
  );
};

export default Hand;
