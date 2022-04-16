import { connect } from '@lib/algorithms/helpers';
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

  const getPlays = useCallback(() => {
    const plays: { edge: Edge | null; rotation: Rotation; index: number }[] = [];
    const { start, end } = board.edges;
    const edges = [start, end];

    for (let i = 0; i < hand.length; i++) {
      for (let j = 0; j < edges.length; j++) {
        const { connects, rotation } = connect(hand[i], edges[j]);
        if (connects) {
          plays.push({ index: i, rotation, edge: edges[j] });
        }
      }
    }

    return plays;
  }, [hand, board.edges]);

  return {
    type: playerType,
    hand,
    handActions,
    money,
    hasPlays,
    getPlays,
    moneyActions: { set: setMoney, add: addMoney },
  };
};

export default usePlayer;
