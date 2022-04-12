import { useMemo } from 'react';
import DominoWheelDomino from './DominoWheel.Domino';

interface Props {}

const DominoWheel = (props: Props) => {
  const wheelConfig = useMemo(() => {
    const length = 91;
    const rectHeight = 224;
    const rectWidth = 121.441322;
    const radius = 900;
    const angleStep = 360 / length;
    const rectRadius = radius - rectHeight / 2;

    return {
      length,
      rectHeight,
      rectWidth,
      radius,
      angleStep,
      rectRadius,
    };
  }, []);

  return (
    <div className="relative flex">
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full border-2 border-slate-800"
        style={{ height: wheelConfig.radius * 2, width: wheelConfig.radius * 2 }}
      >
        {Array.from({ length: wheelConfig.length }).map((_, index) => (
          <DominoWheelDomino
            key={index}
            domino={['0', '0']}
            index={index}
            wheelConfig={wheelConfig}
          />
        ))}
      </div>
    </div>
  );
};

export default DominoWheel;
