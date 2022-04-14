import { useCallback, useState } from 'react';

const useTurn = () => {
  const [turn, setTurn] = useState<Player | null>(null);

  const get = useCallback(() => turn, [turn]);

  const toggle = useCallback(
    () => setTurn((_turn) => (_turn === 'enemy' ? 'player' : 'enemy')),
    [setTurn]
  );

  return {
    get,
    toggle,
  };
};

export default useTurn;
