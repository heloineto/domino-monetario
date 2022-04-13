import { useCallback, useEffect, useState } from 'react';
import useBoard from './useBoard';

const useDrag = (board: ReturnType<typeof useBoard>) => {
  const [dragging, setDragging] = useState(false);
  const [domino, setDomino] = useState<Domino | null>(null);
  const [rotate, setRotate] = useState(0);
  const [targetRef, setTargetRef] = useState<RefObject<HTMLDivElement> | null>(null);
  const [targetEdge, setTargetEdge] = useState<Edge | null>(null);

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
    if (targetEdge) {
    }

    setDomino(null);
    setDragging(false);
  }, [setDomino, setDragging]);

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
  };
};

export default useDrag;
