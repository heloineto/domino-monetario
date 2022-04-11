import Domino from '@components/pageComponents/home/Domino';
import { motion } from 'framer-motion';

import Player from '../Player';

interface Props {}

const Table = (props: Props) => {
  const dominos: [MoneyValue, MoneyValue][] = [
    ['0.5', '100'],
    ['0', '100'],
    ['0', '0'],
    ['0.1', '0.1'],
    ['200', '0.5'],
    ['200', '0.25'],
    ['100', '0.25'],
    ['50', '0.25'],
    ['0.05', '1'],
    // ['0.5', '1'],
    // ['0.5', '0.5'],
    // ['50', '0.5'],
    // ['1', '1'],
  ];

  const middle = (dominos.length - 1) / 2;

  return (
    <main className="h-screen w-full overflow-hidden">
      <div className="h-1/6 w-full bg-lime-100">
        <div className="flex items-center justify-center space-x-2">
          {dominos.map((domino, index) => (
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
      <div className="h-3/6 w-full bg-sky-100"></div>
      <Player />
    </main>
  );
};

export default Table;
