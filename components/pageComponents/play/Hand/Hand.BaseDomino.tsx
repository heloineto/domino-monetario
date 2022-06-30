import { range } from '@lib/utils/math';
import { useMemo } from 'react';
import { TargetAndTransition, motion } from 'framer-motion';
import Domino from '../Domino';

interface Props extends ComponentProps<typeof motion.div> {
  wheelConfig: WheelConfig;
  index: number;
  animation?: TargetAndTransition;
  domino: [MoneyValue, MoneyValue];
  hidden: boolean;
}

const HandBaseDomino = ({
  wheelConfig,
  index,
  variants,
  animation,
  style,
  domino,
  hidden,
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

  console.log({ height: rectHeight, width: rectWidth });

  return (
    <motion.div
      className="absolute rounded-lg"
      style={{
        height: rectHeight,
        width: rectWidth,
        minHeight: rectHeight,
        minWidth: rectWidth,
        maxHeight: rectHeight,
        maxWidth: rectWidth,
        ...style,
      }}
      animate={{ ...defaultAnimation, ...animation }}
      {...motionDivProps}
    >
      <Domino className="h-full w-full" domino={domino} hidden={hidden} />
    </motion.div>
  );
};

export default HandBaseDomino;
