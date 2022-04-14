import { useCallback, useState } from 'react';

const useTurn = () => {
  const [player, setPlayer] = useState<Player | null>(null);

  const toggle = useCallback(
    () => setPlayer((_player) => (_player === 'enemy' ? 'player' : 'enemy')),
    [player, setPlayer]
  );

  return {
    player,
    setPlayer,
    toggle,
  };
};

export default useTurn;
