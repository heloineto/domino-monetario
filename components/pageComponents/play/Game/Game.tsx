import Domino from '@components/pageComponents/play/Domino';
import { GameContext } from '@lib/context';
import { useGame } from '@lib/hooks';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Enemy from '../Enemy';

import Player from '../Player';

interface Props {}

const Game = (props: Props) => {
  const game = useGame();

  return (
    <GameContext.Provider value={game}>
      <main className="h-screen w-full overflow-hidden">
        <Enemy />
        <div className="h-3/6 w-full bg-sky-100"></div>
        <Player />
      </main>
    </GameContext.Provider>
  );
};

export default Game;
