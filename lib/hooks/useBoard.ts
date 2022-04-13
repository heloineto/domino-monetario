import { useState } from 'react';

const useBoard = () => {
  const [start, setStart] = useState<number | null>(null);
  const [end, setEnd] = useState<number | null>(null);
  const [boardDominos, setBoardDominos] = useState<BoardDomino[] | null>(null);

  return { start, setStart, end, setEnd, boardDominos, setBoardDominos };
};

export default useBoard;
