import { GameContext } from '@lib/context';
import { useContext } from 'react';

import PlayerInfo from '../Player/Player.Info';

interface Props extends ComponentProps<'div'> {}

const SidebarBase = ({ ...restProps }: Props) => {
  const { game } = useContext(GameContext);

  if (!game) {
    throw new Error('Game object was undefined');
  }

  return (
    <div className="flex h-full flex-col">
      <PlayerInfo player={game?.enemy} />
      <PlayerInfo player={game?.player} />
    </div>
  );
};

export default SidebarBase;
