import { GameContext } from '@lib/context';
import { useGame } from '@lib/hooks';
import Board from '../Board';
import Player from '../Player';
import GameSettingsMenu from './Game.SettingsMenu';
import GameStartMenu from './Game.StartMenu';

interface Props {}

const Game = (props: Props) => {
  const game = useGame();

  return (
    <GameContext.Provider value={game}>
      <main
        className="flex h-screen max-h-screen w-full flex-col overflow-hidden  bg-green-200"
        style={{ boxShadow: 'inset 0 0 300px rgba(0,0,0,0.5)' }}
      >
        <Player className="h-[128px] flex-shrink-0" player={game.enemy} />
        <Board className="my-4 flex-grow" />
        <Player className="h-[256px] flex-shrink-0" player={game.player} />
      </main>
      <GameStartMenu />
      <GameSettingsMenu />
    </GameContext.Provider>
  );
};

export default Game;
