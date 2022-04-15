import { useCallback, useEffect, useState } from 'react';

const useBoard = () => {
  const [edges, setEdges] = useState<{ start: Edge | null; end: Edge | null }>({
    start: null,
    end: null,
  });
  const [boardDominos, setBoardDominos] = useState<BoardDomino[] | null>(null);

  useEffect(() => {
    if (!boardDominos) {
      setEdges({ start: null, end: null });
      return;
    }

    const { rotation: startRotation, domino: startDomino } = boardDominos[0];
    const startValue = startDomino[startRotation === 90 ? 1 : 0];

    const { rotation: endRotation, domino: endDomino } =
      boardDominos[boardDominos.length - 1];

    const endValue = endDomino[endRotation === 90 ? 0 : 1];

    setEdges({
      start: { position: 'start', value: startValue },
      end: { position: 'end', value: endValue },
    });
  }, [boardDominos, setEdges]);

  const add = useCallback(
    (position: Position, rotation: Rotation, domino: Domino) => {
      const boardDomino = { rotation, domino };

      setBoardDominos((_boardDominos) => {
        if (!_boardDominos) return [boardDomino];

        return position === 'start'
          ? [boardDomino, ..._boardDominos]
          : [..._boardDominos, boardDomino];
      });
    },
    [setBoardDominos]
  );

  return {
    board: { edges, boardDominos },
    boardActions: { setEdges, setBoardDominos, add },
  };
};

export default useBoard;
