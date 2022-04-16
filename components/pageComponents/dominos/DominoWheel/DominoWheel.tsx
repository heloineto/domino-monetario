import dominos from '@lib/game/globals/DOMINOS';
import { useMemo } from 'react';
import DominoWheelDomino from './DominoWheel.Domino';

interface Props {}

const DominoWheel = (props: Props) => {
  const wheelConfig: WheelConfig = useMemo(() => {
    const length = dominos.length;
    const rectHeight = 224;
    const rectWidth = 121.441322;
    const divider = 1;
    const middleIndex = (length - 1) / 2;
    const radius = 1000;
    const angleStep = 360 / length;
    const rectRadius = radius - rectHeight / 2;

    return {
      length,
      rectHeight,
      rectWidth,
      radius,
      angleStep,
      rectRadius,
      divider,
      middleIndex,
    };
  }, []);

  return (
    <div className="relative flex">
      <div
        className="absolute rounded-full border-2 border-slate-800"
        style={{ height: wheelConfig.radius * 2, width: wheelConfig.radius * 2 }}
      >
        {dominos.map((domino, index) => (
          <DominoWheelDomino
            key={`${domino[0]}-${domino[1]}`}
            domino={domino}
            index={index}
            wheelConfig={wheelConfig}
          />
        ))}
      </div>
    </div>
  );
};

export default DominoWheel;
