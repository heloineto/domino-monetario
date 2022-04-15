import { useCallback, useState } from 'react';
import usePlayer from './usePlayer';

const useDrag = (player: ReturnType<typeof usePlayer>) => {
  const [dragging, setDragging] = useState(false);
  const [domino, setDomino] = useState<Domino | null>(null);
  const [dominoIndex, setDominoIndex] = useState<number | null>(null);
  const [target, setTarget] = useState<DragTarget | null>(null);

  const onDragStart = useCallback(
    (_domino: Domino, _dominoIndex: number) => {
      setDomino(_domino);
      setDominoIndex(_dominoIndex);
      setDragging(true);
    },
    [setDomino, setDragging]
  );

  const onDragEnd = useCallback(() => {
    if (dominoIndex !== null && target?.connection?.connects) {
      player.handActions.toBoard(
        target.edge?.position ?? 'start',
        target.connection.rotation,
        dominoIndex
      );
    }

    setDomino(null);
    setDominoIndex(null);
    setTarget(null);
    setDragging(false);
  }, [setDomino, dominoIndex, setDragging, target, player]);

  return {
    drag: {
      domino,
      onDragStart,
      onDragEnd,
      dragging,
      dominoIndex,
      target,
      targetActions: {
        set: setTarget,
      },
    },
    dragActions: {},
  };
};

export default useDrag;
