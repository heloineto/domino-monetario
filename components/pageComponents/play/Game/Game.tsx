import { DragContext, GameContext } from '@lib/context';
import { useDrag, useGame } from '@lib/hooks';
import Board from '../Board';
import Player from '../Player';
import Sidebar from '../Sidebar';
import GameGameOverMenu from './Game.GameOverMenu';
import GameRoundOverMenu from './Game.RoundOverMenu';
import GameSettingsMenu from './Game.SettingsMenu';
import GameStartMenu from './Game.StartMenu';

interface Props {}

const Game = (props: Props) => {
  const { game, dispatch } = useGame();
  const drag = useDrag({ game, dispatch });

  return (
    <GameContext.Provider value={{ game, dispatch }}>
      <DragContext.Provider value={drag}>
        <main className="relative flex h-screen max-h-screen w-full overflow-hidden bg-green-200 shadow-[inset_0_0_300px_rgba(0,0,0,0.5)]">
          <Sidebar />
          <div className="flex flex-grow flex-col">
            <Player
              className="h-[5rem] flex-shrink-0 sm:h-[6rem] md:h-[6rem] lg:h-[7rem] xl:h-[8rem]"
              player={game.enemy}
            />
            <Board className="my-4 flex-grow" />
            <Player
              className="h-[9rem] flex-shrink-0 sm:h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[16rem]"
              player={game.player}
            />
          </div>
        </main>

        <GameSettingsMenu />
        <GameStartMenu />
        <GameRoundOverMenu />
        <GameGameOverMenu />
      </DragContext.Provider>
    </GameContext.Provider>
  );
};

export default Game;
