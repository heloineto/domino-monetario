import { useCallback, useState } from 'react';
import useBoard from './useBoard';
import useHand from './useHand';

const usePlayer = (
  playerType: PlayerType,
  { board, boardActions }: ReturnType<typeof useBoard>
) => {
  const { hand, handActions } = useHand({ board, boardActions });
  const [money, setMoney] = useState(0);

  const addMoney = useCallback(
    (amount: number) => setMoney((currMoney) => currMoney + amount),
    [setMoney]
  );

  const hasPlays = useCallback(() => {
    const { start, end } = board.edges;

    if (!start || !end) return true;

    for (let i = 0; i < hand.length; i++) {
      for (let j = 0; j < hand[i].length; j++) {
        if (hand[i][j] === start.value || hand[i][j] === end.value) return true;
      }
    }

    return false;
  }, [hand, board.edges]);

  return {
    type: playerType,
    hand,
    handActions,
    money,
    hasPlays,
    moneyActions: { set: setMoney, add: addMoney },
  };
};

export default usePlayer;
