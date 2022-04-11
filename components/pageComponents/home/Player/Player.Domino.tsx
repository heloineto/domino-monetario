import { motion } from 'framer-motion';
import Domino from '../Domino';

interface Props extends ComponentProps<typeof motion.div> {
  domino: [MoneyValue, MoneyValue];
}

const PlayerDomino = ({ domino, ...motionDivProps }: Props) => {
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.3, translateY: -40, zIndex: 10 }}
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
