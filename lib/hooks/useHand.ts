import { useCallback, useState } from 'react';
import useBoard from './useBoard';

const useHand = ({ board, boardActions }: ReturnType<typeof useBoard>) => {
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

  const toBoard = useCallback((position: Position, rotation: Rotation, index: number) => {
    boardActions.add(position, rotation, hand[index]);
    remove(index);
  }, []);

  return { hand, handActions: { add, remove, toBoard, set: setHand } };
};

export default useHand;
