import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {}

const PlayerBank = (props: Props) => {
  return (
    <motion.div className="relative -mt-20 flex h-40 w-40" whileHover={{ scale: 1.2 }}>
      <div
        className="absolute top-[35%] left-[10%] z-10 w-32 select-none text-center font-display text-xl tracking-widest text-[#F07A6D]"
        style={
          {
            '-webkit-text-stroke-width': '2px',
            '-webkit-text-stroke-color': '#75231A',
          } as any
        }
      >
        <div>00,00</div>
        <div>R$</div>
      </div>
      <Image
        src="/piggy-bank.svg"
        layout="fill"
        alt="cofrinho"
        priority
        draggable="false"
      />
    </motion.div>
  );
};

export default PlayerBank;
