import { GameContext } from '@lib/context';
import classNames from 'clsx';
import { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Hand, Money } from 'phosphor-react';
import Image from 'next/image';
import twColors from 'tailwindcss/colors';
import sumDominos from '@lib/game/player/sumDominos';
import { round } from 'lodash';
import AnimatedCounter from '@components/elements/other/AnimatedCounter';

interface Props {
  player: Player;
}

const PlayerInfo = ({ player }: Props) => {
  const { game } = useContext(GameContext);
  const isEnemy = player.type === 'enemy';
  const isPlayerTurn = game?.turn === player.type;

  const dominosSum = useMemo(() => sumDominos(player.hand), [player.hand]);

  const color = twColors[isEnemy ? 'blue' : 'orange'];

  return (
    <motion.div
      className={classNames(
        isEnemy ? 'bottom-0' : 'top-0',
        'absolute right-5 z-[40] flex h-16 select-none items-center justify-center rounded-full bg-white/50 p-2'
      )}
      animate={{
        boxShadow: isPlayerTurn ? `0px 0px 10px 5px ${color[500]}` : undefined,
        border: isPlayerTurn ? '2px solid white' : undefined,
      }}
    >
      <div className="mx-2.5 flex">
        <div className="flex items-center gap-x-1.5 font-display text-xl">
          <Money className="h-5 w-5 text-slate-900" weight="bold" />
          <AnimatedCounter value={Number(round(dominosSum, 2).toFixed(2))} />
          R$
        </div>
        <div className="mx-2.5 w-px flex-grow bg-slate-900"></div>
        <div className="flex items-center gap-x-1.5 font-display text-xl">
          <Hand className="h-5 w-5 text-slate-900" weight="bold" />
          {player.hand.length}
        </div>
      </div>
      <motion.div
        className="relative h-12 w-12 rounded-full border-2"
        style={{ borderColor: color[500], backgroundColor: color[300] }}
      >
        {isEnemy && (
          <div className="absolute -bottom-1.5 left-px h-[3.25rem] w-[3.25rem] rounded-b-2xl">
            <Image src="/robot/normal.svg" alt="robô" layout="fill" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PlayerInfo;
