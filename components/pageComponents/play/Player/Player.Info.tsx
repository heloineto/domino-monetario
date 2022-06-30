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
import { Tooltip } from '@mui/material';

interface Props {
  player: Player;
}

const PlayerInfo = ({ player }: Props) => {
  const { game } = useContext(GameContext);
  const isEnemy = player.type === 'enemy';
  const isPlayerTurn = game?.turn === player.type;

  const dominosSum = useMemo(() => sumDominos(player.hand), [player.hand]);

  const color = twColors[isEnemy ? 'blue' : 'orange'];

  const moneyNumber = Number(round(dominosSum, 2).toFixed(2));
  const moneyString = moneyNumber.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <motion.div
      className={classNames(
        isEnemy ? '-bottom-2.5 xl:bottom-0' : '-top-2.5 xl:top-0',
        'absolute right-5 z-[40] flex h-14 select-none items-center justify-center rounded-full bg-white/50 p-2 xl:h-16'
      )}
      animate={{
        boxShadow: isPlayerTurn ? `0px 0px 10px 5px ${color[500]}` : undefined,
        border: isPlayerTurn ? '2px solid white' : undefined,
      }}
    >
      <div className="mx-1.5 flex text-base lg:text-lg xl:mx-2.5 xl:text-xl">
        <Tooltip
          title={`${isEnemy ? 'O robô' : 'Você'} tem ${moneyString} na mão`}
          arrow
          placement={isEnemy ? 'bottom' : 'top'}
        >
          <div className="flex items-center gap-x-1.5 font-display">
            <Money className="h-4 w-4 text-slate-900 xl:h-5 xl:w-5" weight="bold" />
            <AnimatedCounter
              value={moneyNumber}
              parse={(value) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
          </div>
        </Tooltip>
        <div className="mx-2.5 w-px flex-grow bg-slate-900"></div>
        <Tooltip
          title={`${isEnemy ? 'O robô' : 'Você'} tem ${
            player.hand.length
          } dominos na mão`}
          arrow
          placement={isEnemy ? 'bottom' : 'top'}
        >
          <div className="flex items-center gap-x-1.5 font-display">
            <Hand className="h-4 w-4 text-slate-900 xl:h-5 xl:w-5" weight="bold" />
            {player.hand.length}
          </div>
        </Tooltip>
      </div>
      <motion.div
        className="relative h-10 w-10 rounded-full border-2 xl:h-12 xl:w-12"
        style={{ borderColor: color[500], backgroundColor: color[300] }}
      >
        {isEnemy ? (
          <div className="absolute -bottom-2 h-12 w-12 rounded-b-2xl xl:-bottom-1.5 xl:left-px xl:h-[3.25rem] xl:w-[3.25rem]">
            <Image src="/robot/normal.svg" alt="robô" layout="fill" />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-xl text-orange-900 xl:text-2xl">
            Você
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PlayerInfo;
