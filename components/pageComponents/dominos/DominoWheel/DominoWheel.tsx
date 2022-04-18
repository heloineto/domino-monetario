import DOMINOS from '@lib/game/globals/DOMINOS';
import useWindowSize from '@lib/hooks/useWindowSize';
import { debounce } from 'lodash';
import { useCallback, useMemo, useState } from 'react';
import DominoWheelDomino from './DominoWheel.Domino';
import DominoWheelSlider from './DominoWheel.Slider';

interface Props {}

const DominoWheel = (props: Props) => {
  const [dominos, setDominos] = useState(DOMINOS);

  const windowSize = useWindowSize();

  const wheelConfig: WheelConfig = useMemo(() => {
    const length = dominos.length;
    const rectHeight = 224;
    const rectWidth = 121.441322;
    const divider = 1;
    const middleIndex = (length - 1) / 2;
    const radius = windowSize.width ? windowSize.width / 2 : 1000;
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
  }, [windowSize, dominos]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChange = useCallback(
    debounce(
      ([start, end]: [number, number]) => setDominos(DOMINOS.slice(start, end)),
      50
    ),
    [setDominos]
  );

  return (
    <div>
      <div className="mx-auto mb-5 w-[40rem]">
        <DominoWheelSlider onChange={onChange} />
      </div>
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
    </div>
  );
};

export default DominoWheel;
