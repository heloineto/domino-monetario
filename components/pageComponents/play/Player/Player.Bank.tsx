import { motion } from 'framer-motion';
import Image from 'next/image';
import classNames from 'clsx';

interface Props {
  player: Player;
}

const PlayerBank = ({ player }: Props) => {
  return (
    <motion.div
      className={classNames(
        'absolute  left-5 flex h-24 w-24 lg:h-28 lg:w-28',
        player.type === 'player' ? '-top-6 lg:-top-5' : '-bottom-6 lg:-bottom-5'
      )}
      whileHover={{ scale: 1.2 }}
    >
      <div className="z-10 grid h-full w-full select-none place-items-center text-center font-display text-xs font-bold tracking-widest text-[#75231A] md:text-sm lg:text-base">
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
