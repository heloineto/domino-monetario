import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import Domino from '../Domino';

interface Props extends ComponentProps<typeof motion.div> {
  domino: [MoneyValue, MoneyValue];
  index: number;
  wheelConfig: WheelConfig;
  handRef: RefObject<HTMLDivElement>;
}

const PlayerDomino = ({
  domino,
  index,
  wheelConfig,
  handRef,
  ...motionDivProps
}: Props) => {
  const { radius, divider, angleStep, rectHeight, rectWidth, rectRadius } = wheelConfig;

  const { angle, radAngle } = useMemo(() => {
    // -112.5
    const angle = angleStep * index - (90 + 180 / divider);
    const radAngle = (angle * Math.PI) / 180;

    return { angle, radAngle };
  }, [angleStep, index]);

  return (
    <motion.div
      style={{
        height: rectHeight,
        width: rectWidth,
        position: 'absolute',
        left: `calc(${rectRadius * Math.cos(radAngle)}px + 50%)`,
        top: -rectHeight / 2 + radius + rectRadius * Math.sin(radAngle),
        rotate: angle + 90,
      }}
      whileHover={{ scale: 1.5, rotate: 0, cursor: 'grab', top: 0, zIndex: 50 }}
      whileTap={{ scale: 1.1, cursor: 'grabbing' }}
      drag
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 50,
      }}
      dragElastic={1}
      {...motionDivProps}
    >
      <Domino className="h-full w-full" domino={domino} />
    </motion.div>
  );
};

export default PlayerDomino;
