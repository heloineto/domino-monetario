import { useState } from 'react';

const useEnemy = () => {
  const [hand, setHand] = useState<Domino[]>([]);

  return { hand, setHand };
};

export default useEnemy;
