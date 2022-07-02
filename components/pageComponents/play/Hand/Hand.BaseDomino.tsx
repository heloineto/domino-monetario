import { TargetAndTransition, motion } from 'framer-motion';
import Domino from '../Domino';

interface Props extends ComponentProps<typeof motion.div> {
  index: number;
  animation?: TargetAndTransition;
  domino: [MoneyValue, MoneyValue];
  hidden: boolean;
  dominoHeight: number;
}

const HandBaseDomino = ({
  index,
  variants,
  animation,
  style,
  domino,
  hidden,
  dominoHeight,
  ...motionDivProps
}: Props) => {
  return (
    <motion.div
      className="rounded-lg"
      style={{
        height: dominoHeight,
        width: dominoHeight / 2,
        ...style,
      }}
      animate={animation}
      {...motionDivProps}
    >
      <Domino className="h-full w-full" domino={domino} hidden={hidden} />
    </motion.div>
  );
};

export default HandBaseDomino;
