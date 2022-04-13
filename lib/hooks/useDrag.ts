import { useCallback, useEffect, useState } from 'react';
import useBoard from './useBoard';

const useDrag = (board: ReturnType<typeof useBoard>) => {
  const [dragging, setDragging] = useState(false);
  const [domino, setDomino] = useState<Domino | null>(null);
  const [targetRef, setTargetRef] = useState<RefObject<HTMLDivElement> | null>(null);
  const [targetEdge, setTargetEdge] = useState<Edge | null>(null);
  const [targetConnection, setTargetConnection] = useState<Connection | null>(null);

  useEffect(() => {
    if (!targetEdge) return;
  }, [targetEdge]);

  const onDragStart = useCallback(
    (_domino: Domino) => {
      setDomino(_domino);
      setDragging(true);
    },
    [setDomino, setDragging]
  );

  const onDragEnd = useCallback(() => {
    if (domino && targetEdge?.position && targetConnection?.connects) {
      board.addDomino(targetEdge.position, targetConnection, domino);
    }

    setDomino(null);
    setDragging(false);
  }, [
    setDomino,
    setDragging,
    board,
    domino,
    targetConnection?.connects,
    targetConnection?.rotation,
    targetEdge?.position,
  ]);

  return {
    domino,
    setDomino,
    targetRef,
    setTargetRef,
    onDragStart,
    onDragEnd,
    dragging,
    targetEdge,
    setTargetEdge,
    targetConnection,
    setTargetConnection,
  };
};

export default useDrag;
