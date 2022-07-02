import { GameContext } from '@lib/context';
import { useContext } from 'react';
import PlayerBank from '../Player/Player.Bank';
import classNames from 'clsx';
import PlayerInfo from '../Player/Player.Info';
import Deck from '../Deck';
import BoardRound from '../Board/Board.Round';

interface Props extends ComponentProps<'div'> {}

const SidebarBase = ({ className, ...restProps }: Props) => {
  const { game } = useContext(GameContext);

  if (!game) {
    throw new Error('Game object was undefined');
  }

  return (
    <div
      className={classNames(
        'flex h-full w-full flex-col items-center justify-between py-2.5 pl-2.5',
        className
      )}
    >
      <div className="flex w-full flex-col gap-2">
        <PlayerInfo player={game.enemy} />
        <div className="pl-2.5">
          <PlayerBank player={game.enemy} />
        </div>
      </div>

      <div className="relative flex flex-col">
        <BoardRound className="absolute w-full -translate-y-full" />
        <Deck className="mt-2 w-24" />
      </div>

      <div className="flex w-full flex-col gap-2">
        <div className="pl-2.5">
          <PlayerBank player={game.player} />
        </div>
        <PlayerInfo player={game.player} />
      </div>
    </div>
  );
};

export default SidebarBase;
