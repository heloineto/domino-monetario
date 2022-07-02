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
    <div>
      <PlayerInfo player={game?.player} />
      <PlayerInfo player={game?.enemy} />
    </div>
  );
};

export default SidebarBase;
