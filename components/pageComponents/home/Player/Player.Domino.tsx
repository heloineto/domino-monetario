import { TableContext } from '@lib/context';
import { motion } from 'framer-motion';
import { useContext, useRef } from 'react';
import Domino from '../Domino';

interface Props extends ComponentProps<typeof motion.div> {
  domino: [MoneyValue, MoneyValue];
}

const PlayerDomino = ({ domino, ...motionDivProps }: Props) => {
  const { tableRef } = useContext(TableContext);

  const dominoRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={dominoRef}
      drag
      className="cursor-grab"
      whileHover={{ scale: 1.3, translateY: -40, zIndex: 50 }}
      whileTap={{ scale: 1.2, cursor: 'grabbing' }}
      dragConstraints={dominoRef}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 50,
      }}
      dragElastic={1}
      {...motionDivProps}
    >
      <Domino
        className="h-60 w-auto rounded-lg border-2 border-slate-400 shadow-md hover:shadow-2xl"
        domino={domino}
      />
    </motion.div>
  );
};

export default PlayerDomino;