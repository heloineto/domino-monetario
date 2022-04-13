import { useCallback, useState } from 'react';

const useBoard = () => {
  const [start, setStart] = useState<MoneyValue | null>(null);
  const [end, setEnd] = useState<MoneyValue | null>(null);
  const [boardDominos, setBoardDominos] = useState<BoardDomino[] | null>(null);

  const addDomino = useCallback(
    (position: Position, connection: Connection, domino: Domino) => {
      const { rotation, nextEdge } = connection;
      const boardDomino = { rotation, domino };

      setBoardDominos((currBoard) => {
        if (!currBoard) return [boardDomino];

        const _currBoard = [...currBoard];

        if (position === 'start') {
          _currBoard.unshift(boardDomino);
          setStart(nextEdge.value);
          return _currBoard;
        }

        setEnd(nextEdge.value);
        _currBoard.push(boardDomino);
        return _currBoard;
      });
    },
    [setBoardDominos, setStart, setEnd]
  );

  return { start, setStart, end, setEnd, boardDominos, setBoardDominos, addDomino };
};

export default useBoard;
