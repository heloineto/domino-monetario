import { GameContext } from '@lib/context';
import { useGame } from '@lib/hooks';
import Deck from '../Deck';
import Enemy from '../Enemy';

import Player from '../Player';

interface Props {}

const Game = (props: Props) => {
  const game = useGame();

  return (
    <GameContext.Provider value={game}>
      <main className="h-screen w-full overflow-hidden">
        <Enemy />
        <div className="h-4/6 w-full bg-sky-100">
          <div className="flex h-full w-44 items-center justify-center">
            <Deck className="h-60 w-auto" />
          </div>
        </div>
        <Player />
      </main>
    </GameContext.Provider>
  );
};

export default Game;
