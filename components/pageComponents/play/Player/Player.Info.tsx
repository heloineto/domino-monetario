import { GameContext } from '@lib/context';
import classNames from 'clsx';
import { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Hand, Trophy } from 'phosphor-react';
import Image from 'next/image';
import twColors from 'tailwindcss/colors';
import sumDominos from '@lib/game/player/sumDominos';
import { round } from 'lodash';
import AnimatedCounter from '@components/elements/other/AnimatedCounter';
import { Tooltip } from '@mui/material';

const getWinCount = (roundResults: RoundResult[], isEnemy: boolean) => {
  let winCount = 0;
  const winningResult: RoundResult = isEnemy ? 'ENEMY_WINS' : 'PLAYER_WINS';

  for (const result of roundResults) {
    if (result === winningResult) winCount += 1;
  }

  return winCount;
};
interface Props extends ComponentProps<typeof motion.div> {
  player: Player;
}

const PlayerInfo = ({ player, className, ...restProps }: Props) => {
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

  const winCount = game ? getWinCount(game.round.results, isEnemy) : 0;

  return (
    <motion.div
      className={classNames(
        'flex select-none items-center justify-center gap-2 rounded-xl bg-white/50 p-2',
        isEnemy ? 'flex-col' : 'flex-col-reverse',
        className
      )}
      animate={{
        boxShadow: isPlayerTurn
          ? `0px 0px 10px 5px ${color[500]}`
          : `0px 0px 0px 0px rgba(0,0,0,0)`,
        border: isPlayerTurn ? '2px solid white' : '2px solid transparent',
      }}
      {...restProps}
    >
      <div className="mx-1.5 flex flex-col items-center gap-1 text-sm lg:text-base xl:mx-2.5 xl:text-lg">
        <Tooltip
          title={`${isEnemy ? 'O robô' : 'Você'} tem ${moneyString} na mão`}
          arrow
          placement="right"
        >
          <div className="flex items-center gap-x-1.5 font-display">
            <AnimatedCounter
              value={moneyNumber}
              parse={(value) =>
                value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              }
            />
          </div>
        </Tooltip>

        <div className="flex">
          <Tooltip
            title={`${isEnemy ? 'O robô' : 'Você'} tem ${
              player.hand.length
            } dominos na mão`}
            arrow
            placement="right"
          >
            <div className="flex items-center gap-x-1.5 font-display">
              <Hand className="h-3 w-3 text-slate-900 xl:h-4 xl:w-4" weight="bold" />
              {player.hand.length}
            </div>
          </Tooltip>
          <div className="mx-2.5 w-px flex-grow bg-slate-900/50" />

          <Tooltip
            title={`${isEnemy ? 'O robô' : 'Você'} venceu ${winCount} rodadas`}
            arrow
            placement="right"
          >
            <div className="flex items-center gap-x-1.5 font-display">
              <Trophy className="h-3 w-3 text-slate-900 xl:h-4 xl:w-4" weight="bold" />
              {winCount}
            </div>
          </Tooltip>
        </div>
      </div>
      <div
        className="relative h-10 w-10 rounded-full border-2 xl:h-12 xl:w-12"
        style={{ borderColor: color[500], backgroundColor: color[300] }}
      >
        <Tooltip title={isEnemy ? 'Robô' : 'Você'} arrow placement="right">
          {isEnemy ? (
            <div className="absolute -bottom-2 h-12 w-12 rounded-b-2xl xl:-bottom-1.5 xl:left-px xl:h-[3.25rem] xl:w-[3.25rem]">
              <Image src="/robot/normal.svg" alt="robô" layout="fill" />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center font-display text-xl text-orange-900 xl:text-2xl">
              Você
            </div>
          )}
        </Tooltip>
      </div>
    </motion.div>
  );
};

export default PlayerInfo;
