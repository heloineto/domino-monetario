import Domino from '../Domino';
import { motion } from 'framer-motion';
import classNames from 'clsx';

interface Props extends ComponentProps<typeof motion.div> {
  rotation: Rotation;
  domino: [MoneyValue, MoneyValue];
}

const BoardDomino = ({ className, domino, rotation, ...motionDivProps }: Props) => {
  return (
    <div
      className={classNames(className, 'flex items-center justify-center')}
      style={{
        height: 160,
        width: rotation ? 160 : 86.73,
      }}
    >
      <motion.div
        style={{ rotate: rotation }}
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
