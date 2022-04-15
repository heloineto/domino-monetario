import { GameContext } from '@lib/context';
import { useGame } from '@lib/hooks';
import Board from '../Board';
import Enemy from '../Enemy';
import Player from '../Player';
import GameStartMenu from './Game.StartMenu';

interface Props {}

const Game = (props: Props) => {
  const game = useGame();

  return (
    <GameContext.Provider value={game}>
      <main className="flex h-screen max-h-screen w-full flex-col overflow-hidden">
        <Enemy className="h-[128px] flex-shrink-0 bg-lime-100" />
        <Board className="flex-grow bg-sky-100" />
        <Player className="h-[256px] flex-shrink-0 bg-lime-100" />
      </main>
      <GameStartMenu />
    </GameContext.Provider>
  );
};

export default Game;
