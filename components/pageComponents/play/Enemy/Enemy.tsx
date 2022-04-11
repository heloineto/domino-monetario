import Domino from '@components/pageComponents/play/Domino';
import { GameContext } from '@lib/context';
import { motion } from 'framer-motion';
import { useContext, useMemo } from 'react';

interface Props {}

const Enemy = (props: Props) => {
  const { enemyDominos } = useContext(GameContext);

  const enemyDominosArr = useMemo(() => Array.from(enemyDominos), [enemyDominos]);
  const middle = useMemo(() => (enemyDominosArr.length - 1) / 2, [enemyDominosArr]);

  return (
    <div className="h-1/6 w-full bg-lime-100">
      <div className="flex items-center justify-center space-x-2">
        {enemyDominosArr.map((domino, index) => (
          <motion.div
            key={`${domino[0]}-${domino[1]}`}
            whileHover={{ scale: 1.3, zIndex: 10 }}
            style={{
              rotate: -(index - middle),
              translateY: -Math.pow(Math.abs(index - middle), 2) - 40,
            }}
          >
            <Domino
              className="h-40 w-auto rounded-lg border-2 border-slate-400 shadow-md hover:shadow-2xl"
              domino={domino}
              hidden
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Enemy;
