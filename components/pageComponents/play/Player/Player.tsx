import PlayerBank from './Player.Bank';
import PlayerDomino from './Player.Domino';
import { useContext, useRef } from 'react';
import { GameContext } from '@lib/context';
import { useMemo } from 'react';
import classNames from 'clsx';

interface Props extends ComponentProps<'div'> {}

const Player = ({ className, ...divProps }: Props) => {
  const { playerHand } = useContext(GameContext);

  const wheelConfig = useMemo(() => {
    const length = playerHand.length;
    const rectHeight = 224;
    const rectWidth = 121.441322;
    const radius = 2000;
    // Display dominos on 1/8 of the circle (360 / 8 = 45)
    const divider = 64;
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
    };
  }, [playerHand.length]);

  const handRef = useRef<HTMLDivElement>(null);

  return (
    <div className={classNames(className, 'flex')} {...divProps}>
      <div
        className="relative flex h-full w-full items-start justify-start space-x-0"
        ref={handRef}
      >
        {playerHand.map((domino, index) => (
          <PlayerDomino
            key={`${domino[0]}-${domino[1]}`}
            domino={domino}
            index={index}
            wheelConfig={wheelConfig}
            handRef={handRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Player;
