import { GameContext } from '@lib/context';
import { motion } from 'framer-motion';
import { useContext, useMemo, useRef } from 'react';
import Domino from '../Domino';

interface Props extends ComponentProps<typeof motion.div> {
  domino: [MoneyValue, MoneyValue];
  index: number;
  middle: number;
  marginLeft: number;
}

const PlayerDomino = ({
  domino,
  index,
  middle,
  marginLeft,
  ...motionDivProps
}: Props) => {
  // TODO: Find the correct math for this

  const translateY = useMemo(() => {
    const n = Math.abs(index - middle);
    return n * Math.log(n);
  }, [index, middle]);

  const rotate = useMemo(() => {
    return index - middle;
  }, [index, middle]);

  return (
    <motion.div
      style={{
        marginLeft,
        rotate,
        translateY,
      }}
      drag
      whileHover={{ scale: 1.5, translateY: -100, rotate: 0, cursor: 'grab', zIndex: 50 }}
      whileTap={{ scale: 1.1, cursor: 'grabbing' }}
      whileDrag={{ zIndex: 50 }}
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
