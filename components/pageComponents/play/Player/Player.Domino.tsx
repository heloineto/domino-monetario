import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Domino from '../Domino';

interface Props extends ComponentProps<typeof motion.div> {
  domino: [MoneyValue, MoneyValue];
  index: number;
  wheelConfig: WheelConfig;
}

const PlayerDomino = ({ domino, index, wheelConfig, ...motionDivProps }: Props) => {
  const { radius, angleStep, rectHeight, rectWidth, rectRadius } = wheelConfig;

  const { angle, radAngle } = useMemo(() => {
    const angle = angleStep * index - 135;
    const radAngle = (angle * Math.PI) / 180;

    return { angle, radAngle };
  }, [angleStep, index]);

  return (
    <motion.div
      style={{
        height: rectHeight,
        width: rectWidth,
        position: 'absolute',
        left: -rectWidth / 2 + radius + rectRadius * Math.cos(radAngle),
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
