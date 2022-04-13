import { GameContext } from '@lib/context';
import { range } from '@lib/utils/math';
import { motion } from 'framer-motion';
import { useContext, useMemo } from 'react';
import Domino from '../Domino';

interface Props extends ComponentProps<typeof motion.div> {
  domino: [MoneyValue, MoneyValue];
  index: number;
  wheelConfig: WheelConfig;
}

const PlayerDomino = ({ domino, index, wheelConfig, ...motionDivProps }: Props) => {
  const { drag } = useContext(GameContext);

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

  const { angle, radAngle } = useMemo(() => {
    const angle = angleStep * (middleIndex - index) - 90 + range(1, 20, 0, -2, length);
    const radAngle = (angle * Math.PI) / 180;

    return { angle, radAngle };
  }, [angleStep, index, length, middleIndex]);

  return (
    <motion.div
      className="rounded-lg border-2"
      style={{
        height: rectHeight,
        width: rectWidth,
        position: 'absolute',
        left: `calc(${rectRadius * Math.cos(radAngle)}px + 50%)`,
        top: -rectHeight / 2 + radius + rectRadius * Math.sin(radAngle),
        rotate: angle + 90,
      }}
      whileHover={{
        scale: 1.3,
        rotate: 0,
        cursor: 'grab',
        top: -2.5,
        zIndex: 50,
      }}
      whileTap={{ scale: 1.1, cursor: 'grabbing' }}
      whileDrag={
        drag?.targetConnection?.connects
          ? {
              scale: 0.9,
              rotate: drag.targetConnection.rotation,
              boxShadow: '0px 0px 10px 2px rgba(34,197,94,0.75)',
            }
          : undefined
      }
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
      onDragStart={() => drag?.onDragStart(domino)}
      onDragEnd={() => drag?.onDragEnd()}
      {...motionDivProps}
    >
      <Domino className="h-full w-full" domino={domino} />
    </motion.div>
  );
};

export default PlayerDomino;
