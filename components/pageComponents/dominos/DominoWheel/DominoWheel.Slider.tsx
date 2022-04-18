import DOMINOS from '@lib/game/globals/DOMINOS';
import { Slider } from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
  onChange?: (value: [number, number]) => void;
}

const DominoWheelSlider = ({ onChange }: Props) => {
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, DOMINOS.length]);

  useEffect(() => {
    onChange?.(sliderValue);
  }, [onChange, sliderValue]);

  return (
    <Slider
      aria-label="Numero de cartas"
      defaultValue={DOMINOS.length}
      getAriaValueText={(value) => `${value} Cartas`}
      valueLabelDisplay="auto"
      step={1}
      marks
      min={1}
      value={sliderValue}
      onChange={(event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }

        if (activeThumb === 0) {
          setSliderValue([Math.min(newValue[0], sliderValue[1] - 1), sliderValue[1]]);
        } else {
          setSliderValue([sliderValue[0], Math.max(newValue[1], sliderValue[0] + 1)]);
        }
      }}
      max={DOMINOS.length}
    />
  );
};

export default DominoWheelSlider;
