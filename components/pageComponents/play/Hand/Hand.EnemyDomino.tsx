import { motion } from 'framer-motion';
import HandBaseDomino from './Hand.BaseDomino';

interface Props extends ComponentProps<typeof motion.div> {
  domino: [MoneyValue, MoneyValue];
  index: number;
  wheelConfig: WheelConfig;
  hidden: boolean;
}

const HandEnemyDomino = ({
  domino,
  index,
  wheelConfig,
  hidden,
  ...motionDivProps
}: Props) => {
  return (
    <HandBaseDomino
      whileHover={{ scale: 1.3, zIndex: 50 }}
      whileTap={{ scale: 1.1 }}
      wheelConfig={wheelConfig}
      index={index}
      domino={domino}
      hidden={hidden}
      {...motionDivProps}
    />
  );
};

export default HandEnemyDomino;
