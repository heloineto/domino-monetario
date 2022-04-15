import { motion } from 'framer-motion';
import Domino from '../Domino';
import HandBaseDomino from './Hand.BaseDomino';

interface Props extends ComponentProps<typeof motion.div> {
  domino: [MoneyValue, MoneyValue];
  index: number;
  wheelConfig: WheelConfig;
}

const HandEnemyDomino = ({ domino, index, wheelConfig, ...motionDivProps }: Props) => {
  return (
    <HandBaseDomino
      whileHover={{ scale: 1.3, zIndex: 50 }}
      whileTap={{ scale: 1.1 }}
      wheelConfig={wheelConfig}
      index={index}
      {...motionDivProps}
    >
      <Domino className="h-full w-full" domino={domino} hidden />
    </HandBaseDomino>
  );
};

export default HandEnemyDomino;
