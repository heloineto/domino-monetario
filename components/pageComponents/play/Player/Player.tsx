import PlayerBank from './Player.Bank';
import PlayerDomino from './Player.Domino';
import { useContext } from 'react';
import { GameContext } from '@lib/context';
import { useMemo } from 'react';

interface Props {}

const Player = (props: Props) => {
  const { playerHand } = useContext(GameContext);

  const middle = useMemo(() => (playerHand.length - 1) / 2, [playerHand]);

  return (
    <div className="flex h-2/6 w-full bg-lime-100">
      <div className="h-full w-60"></div>
      <div className="flex h-full w-full items-center justify-center space-x-0">
        {playerHand.map((domino, index) => (
          <PlayerDomino
            key={`${domino[0]}-${domino[1]}`}
            className="h-56 w-auto"
            domino={domino}
            style={{
              marginLeft: Math.max(
                -50,
                20 - playerHand.length * Math.log(playerHand.length)
              ),
              height: 224 - playerHand.length * Math.log10(playerHand.length),
              rotate: index - middle,
              translateY: Math.pow(Math.abs(index - middle), 1.75),
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
