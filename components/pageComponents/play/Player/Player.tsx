import PlayerDomino from './Player.Domino';
import { useContext } from 'react';
import { GameContext } from '@lib/context';
import { useMemo } from 'react';
import classNames from 'clsx';
import { range } from '@lib/utils/math';

interface Props extends ComponentProps<'div'> {}

const Player = ({ className, ...divProps }: Props) => {
  const { playerHand, selectedDomino, setSelectedDomino } = useContext(GameContext);

  const wheelConfig = useMemo(() => {
    const length = playerHand.length;
    const rectHeight = 224;
    const rectWidth = 121.441322;
    const radius = 2000;
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
  }, [playerHand.length]);

  return (
    <div
      className={classNames(
        className,
        'relative flex h-[256px] w-full flex-shrink-0 items-start justify-start space-x-0'
      )}
      {...divProps}
    >
      {playerHand.map((domino, index) => (
        <PlayerDomino
          key={`${domino[0]}-${domino[1]}`}
          domino={domino}
          index={index}
          wheelConfig={wheelConfig}
          onDragStart={() => {
            setSelectedDomino?.(domino);
          }}
          onDragEnd={() => {
            setSelectedDomino?.(null);
          }}
        />
      ))}
    </div>
  );
};

export default Player;
