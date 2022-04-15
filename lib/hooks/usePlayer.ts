import useBoard from './useBoard';
import useHand from './useHand';

const usePlayer = (
  playerType: PlayerType,
  { board, boardActions }: ReturnType<typeof useBoard>
) => {
  const { hand, handActions } = useHand({ board, boardActions });

  return { type: playerType, hand, handActions };
};

export default usePlayer;
