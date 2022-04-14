import useHand from './useHand';

const usePlayer = () => {
  const hand = useHand();

  return { hand };
};

export default usePlayer;
