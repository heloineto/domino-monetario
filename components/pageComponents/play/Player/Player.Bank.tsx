import { motion } from 'framer-motion';
import Image from 'next/image';
import classNames from 'clsx';

interface Props extends ComponentProps<typeof motion.div> {
  player: Player;
}

const PlayerBank = ({ player, className, ...restProps }: Props) => {
  return (
    <motion.div
      className={classNames('relative flex h-20 w-24 lg:h-24 lg:w-28', className)}
      whileHover={{ scale: 1.1 }}
      {...restProps}
    >
      <div className="z-10 mt-1 flex h-full w-full select-none items-center justify-center text-center font-display text-xs font-bold tracking-tight text-[#75231A] md:text-sm lg:text-lg">
        <div>
          <div className="-mb-1.5">
            {Number(player.money).toFixed(2).replace('.', ',')}
          </div>
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
