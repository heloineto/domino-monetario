import { range } from '@lib/utils/math';
import { animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props extends ComponentProps<typeof motion.div> {
  wheelConfig: WheelConfig;
  index: number;
}

const HandBaseDomino = ({ wheelConfig, index, ...motionDivProps }: Props) => {
  const {
    radius,
    divider,
    angleStep,
    rectHeight,
    rectWidth,
    rectRadius,
    middleIndex,
    length,
  } = wheelConfig;

  const angle = angleStep * (middleIndex - index) - 90 + range(1, 20, 0, -2, length);
  const radAngle = (angle * Math.PI) / 180;

  // const angle = useMotionValue(
  //   angleStep * (middleIndex - index) - 90 + range(1, 20, 0, -2, length)
  // );
  // const radAngle = useTransform(angle, (currAngle) => (currAngle * Math.PI) / 180);

  // const rotate = useTransform(angle, (currAngle) => currAngle + 90);
  // const left = useTransform(
  //   radAngle,
  //   (currRadAngle) => rectRadius * Math.cos(currRadAngle)
  // );
  // const top = useTransform(
  //   radAngle,
  //   (currRadAngle) => -rectHeight / 2 + radius + rectRadius * Math.sin(currRadAngle)
  // );

  // useEffect(() => {
  //   animate(angle, angleStep * (middleIndex - index) - 90 + range(1, 20, 0, -2, length));
  // }, [angleStep, index, length, middleIndex, angle]);

  const variants = {
    normal: {
      rotate: angle + 90,
      left: rectRadius * Math.cos(radAngle),
      top: -rectHeight / 2 + radius + rectRadius * Math.sin(radAngle),
    },
  };

  return (
    <motion.div
      className="absolute"
      // style={{ height: rectHeight, width: rectWidth, left, top, rotate }}
      style={{ height: rectHeight, width: rectWidth }}
      variants={variants}
      animate="normal"
      {...motionDivProps}
    />
  );
};

export default HandBaseDomino;
