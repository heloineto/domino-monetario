import useBoard from './useBoard';
import useHand from './useHand';

const usePlayer = ({ board, boardActions }: ReturnType<typeof useBoard>) => {
  const { hand, handActions } = useHand({ board, boardActions });

  return { hand, handActions };
};

export default usePlayer;
