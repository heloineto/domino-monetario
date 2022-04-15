import usePlayer from '@lib/hooks/usePlayer';
import { motion } from 'framer-motion';
import { round } from 'lodash';
import Image from 'next/image';

interface Props {
  player: ReturnType<typeof usePlayer>;
}

const PlayerBank = ({ player }: Props) => {
  return (
    <motion.div
      className="absolute top-0 left-5 flex h-32 w-32"
      whileHover={{ scale: 1.2 }}
    >
      <div className="z-10 grid h-full w-full select-none place-items-center text-center font-display text-lg font-bold tracking-widest text-[#75231A]">
        <div>
          <div>{Number(player.money).toFixed(2).replace('.', ',')}</div>
          <div>R$</div>
        </div>
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
