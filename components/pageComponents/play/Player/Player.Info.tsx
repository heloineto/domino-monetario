import { GameContext } from '@lib/context';
import classNames from 'clsx';
import { useContext } from 'react';
import { motion } from 'framer-motion';

interface Props {
  player: Player;
}

const PlayerInfo = ({ player }: Props) => {
  const { game } = useContext(GameContext);

  const isPlayerTurn = game?.turn === player.type;

  return (
    <motion.div
      className={classNames(
        player.type === 'enemy' ? 'bottom-0' : 'top-0',
        'absolute right-5 z-[60] flex h-16 select-none items-center justify-center rounded-full bg-white/50 p-2 font-display text-3xl'
      )}
      animate={{
        boxShadow: isPlayerTurn ? '0px 0px 10px 5px rgba(255, 255, 255, 1)' : undefined,
        border: isPlayerTurn ? '2px solid white' : undefined,
      }}
    >
      <div>{player.hand.length}</div>
      <motion.div className="h-12 w-12 rounded-full bg-red-500 "></motion.div>
    </motion.div>
  );
};

export default PlayerInfo;
