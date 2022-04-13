import { useCallback, useState } from 'react';

const useBoard = () => {
  const [edges, setEdges] = useState<{ start: Edge | null; end: Edge | null }>({
    start: null,
    end: null,
  });
  const [boardDominos, setBoardDominos] = useState<BoardDomino[] | null>(null);

  const updateEdges = useCallback(() => {
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
        startValue = startDomino[0];
        break;
      case -90:
        startValue = startDomino[1];
        break;
    }

    let endValue: MoneyValue;
    const { rotation: endRotation, domino: endDomino } =
      boardDominos[boardDominos.length - 1];

    switch (endRotation) {
      case 0:
        endValue = endDomino[0];
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
  }, [setEdges]);

  const addDomino = useCallback(
    (position: Position, connection: Connection, domino: Domino) => {
      const { rotation } = connection;
      const boardDomino = { rotation, domino };

      setBoardDominos((_boardDominos) => {
        if (!_boardDominos) return [boardDomino];

        return position === 'start'
          ? [boardDomino, ..._boardDominos]
          : [..._boardDominos, boardDomino];
      });

      updateEdges();
    },
    [setBoardDominos, updateEdges]
  );

  return { edges, setEdges, boardDominos, setBoardDominos, addDomino };
};

export default useBoard;
