import { useCallback, useState } from 'react';

const useHand = () => {
  const [hand, setHand] = useState<Domino[]>([]);

  const get = useCallback(() => hand, [hand]);

  const add = useCallback(
    (...dominos: Domino[]) =>
      setHand((_hand) => {
        _hand.push(...dominos);
        return _hand;
      }),
    []
  );
  const remove = useCallback(() => {}, []);

  return { get, add };
};

export default useHand;
