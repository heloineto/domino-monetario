import { useCallback, useState } from 'react';

const useHand = () => {
  const [hand, setHand] = useState<Domino[]>([]);

  const add = useCallback(async (...dominos: Domino[]) => {
    await setHand((currHand) => {
      const newHand = [...currHand];
      newHand.push(...dominos);

      return newHand;
    });
  }, []);

  const remove = useCallback(async (index: number) => {
    await setHand((currHand) => {
      const newHand = [...currHand];
      newHand.splice(index, 1);

      return newHand;
    });
  }, []);

  return { value: hand, add, remove, set: setHand };
};

export default useHand;
