import { useCallback, useState } from 'react';

const useHand = () => {
  const [hand, setHand] = useState<Domino[]>([]);

  const get = useCallback(() => hand, [hand]);

  const add = useCallback((...dominos: Domino[]) => {
    setHand((_hand) => {
      _hand.push(...dominos);
      return _hand;
    });
  }, []);

  const remove = useCallback((index: number) => {
    setHand((hand) => {
      const _hand = [...hand];
      _hand.splice(index, 1);

      return _hand;
    });
  }, []);

  return { get, add, remove };
};

export default useHand;
