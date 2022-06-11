import { range } from '@lib/utils/math';
import { useMemo } from 'react';
import { TargetAndTransition, motion } from 'framer-motion';

interface Props extends ComponentProps<typeof motion.div> {
  wheelConfig: WheelConfig;
  index: number;
  animation?: TargetAndTransition;
}

const HandBaseDomino = ({
  wheelConfig,
  index,
  variants,
  animation,
  style,
  ...motionDivProps
}: Props) => {
  const { radius, angleStep, rectHeight, rectWidth, rectRadius, middleIndex, length } =
    wheelConfig;

  const defaultAnimation: TargetAndTransition = useMemo(() => {
    const angle = angleStep * (middleIndex - index) - 90 + range(1, 20, 0, -2, length);
    const radAngle = (angle * Math.PI) / 180;

    return {
      rotate: angle + 90,
      left: rectRadius * Math.cos(radAngle),
      top: -rectHeight / 2 + radius + rectRadius * Math.sin(radAngle),
    };
  }, [angleStep, middleIndex, index, length, radius, rectHeight, rectRadius]);

  return (
    <motion.div
      className="absolute rounded-lg"
      style={{ height: rectHeight, width: rectWidth, ...style }}
      animate={{ ...defaultAnimation, ...animation }}
      {...motionDivProps}
    />
  );
};

export default HandBaseDomino;
