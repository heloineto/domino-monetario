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

    let startValue: MoneyValue;
    const { rotation: startRotation, domino: startDomino } = boardDominos[0];

    switch (startRotation) {
      case 0:
        startValue = startDomino[0];
        break;
      case 90:
        startValue = startDomino[1];
        break;
      case -90:
        startValue = startDomino[0];
        break;
    }

    let endValue: MoneyValue;
    const { rotation: endRotation, domino: endDomino } =
      boardDominos[boardDominos.length - 1];

    switch (endRotation) {
      case 0:
        endValue = endDomino[1];
        break;
      case 90:
        endValue = endDomino[0];
        break;
      case -90:
        endValue = endDomino[1];
        break;
    }

    setEdges({
      start: { position: 'start', value: startValue },
      end: { position: 'end', value: endValue },
    });
  }, [boardDominos, setEdges]);

  const addDomino = useCallback(
    (position: Position, rotation: DominoRotation, domino: Domino) => {
      const boardDomino = { rotation, domino };

      console.log(domino);

      setBoardDominos((_boardDominos) => {
        if (!_boardDominos) return [boardDomino];

        return position === 'start'
          ? [boardDomino, ..._boardDominos]
          : [..._boardDominos, boardDomino];
      });
    },
    [setBoardDominos]
  );

  return { edges, setEdges, boardDominos, setBoardDominos, addDomino };
};

export default useBoard;
