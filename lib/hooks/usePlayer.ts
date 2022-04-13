import { useState } from 'react';

const usePlayer = () => {
  const [hand, setHand] = useState<Domino[]>([]);

  return { hand, setHand };
};

export default usePlayer;
