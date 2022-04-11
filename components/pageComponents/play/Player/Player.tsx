import PlayerBank from './Player.Bank';
import PlayerDomino from './Player.Domino';
import { useContext } from 'react';
import { GameContext } from '@lib/context';
import { useMemo } from 'react';

interface Props {}

const Player = (props: Props) => {
  const { playerDominos } = useContext(GameContext);
  const middle = useMemo(() => (playerDominos.length - 1) / 2, [playerDominos]);

  return (
    <div className="flex h-2/6 w-full bg-lime-100">
      <div className="h-full w-60"></div>
      <div className="flex h-full w-full items-center justify-center space-x-2">
        {playerDominos.map((domino, index) => (
          <PlayerDomino
            key={`${domino[0]}-${domino[1]}`}
            domino={domino}
            style={{
              rotate: index - middle,
              translateY: Math.pow(Math.abs(index - middle), 2),
            }}
          />
        ))}
      </div>
      <div className="flex h-full w-60 justify-end">
        <PlayerBank />
      </div>
    </div>
  );
};

export default Player;
