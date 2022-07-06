import Domino from '../Domino';
import { motion } from 'framer-motion';
import classNames from 'clsx';

interface Props extends ComponentProps<typeof motion.div> {
  rotation: number;
  width: number;
  height: number;
  domino: [MoneyValue, MoneyValue];
}

const BoardDomino = ({
  className,
  domino,
  width,
  height,
  rotation,
  ...motionDivProps
}: Props) => {
  return (
    <motion.div
      className={classNames(className, 'flex items-center justify-center')}
      style={{
        width,
        height,
        rotate: rotation,
      }}
      whileHover={{
        scale: 1.2,
        zIndex: 40,
      }}
      {...motionDivProps}
    >
      <Domino className="h-full w-full" domino={domino} />
    </motion.div>
  );
};

export default BoardDomino;
