import { useCallback, useState } from 'react';

const useTurn = () => {
  const [turn, setTurn] = useState<Player | null>(null);

  const toggle = useCallback(
    () => setTurn((_turn) => (_turn === 'enemy' ? 'player' : 'enemy')),
    [setTurn]
  );

  return {
    turn,
    turnActions: { toggle, set: setTurn },
  };
};

export default useTurn;
