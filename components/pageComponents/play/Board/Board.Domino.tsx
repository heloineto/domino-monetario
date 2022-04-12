import Domino from '../Domino';
import { motion } from 'framer-motion';

interface Props extends ComponentProps<typeof motion.div> {
  rotate: 0 | -90 | 90;
  domino: [MoneyValue, MoneyValue];
}

const BoardDomino = ({ domino, rotate, ...motionDivProps }: Props) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: 160,
        width: rotate ? 160 : 86.73,
      }}
    >
      <motion.div
        style={{ rotate }}
        whileHover={{
          scale: 1.2,
          zIndex: 40,
        }}
        {...motionDivProps}
      >
        <Domino className="h-40" domino={domino} />
      </motion.div>
    </div>
  );
};

export default BoardDomino;
