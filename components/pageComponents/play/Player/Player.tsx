import PlayerBank from './Player.Bank';
import PlayerDomino from './Player.Domino';
import { useContext, useEffect } from 'react';
import { GameContext } from '@lib/context';
import { useMemo } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';

interface Props {}

const Player = (props: Props) => {
  const { playerHand } = useContext(GameContext);

  return (
    <div className="flex h-1/6 w-full bg-lime-100">
      <div className="h-full w-60"></div>
      <div className="flex h-full w-full items-center justify-center space-x-0">
        {playerHand.map((domino, index) => (
          <PlayerDomino
            key={`${domino[0]}-${domino[1]}`}
            className="h-56 w-auto"
            domino={domino}
            index={index}
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
