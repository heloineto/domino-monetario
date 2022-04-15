import { GameContext } from '@lib/context';
import { range } from '@lib/utils/math';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useContext, useEffect, useMemo } from 'react';
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
