import { useCallback, useState } from 'react';
import useBoard from './useBoard';
import usePlayer from './usePlayer';

const useDrag = (
  board: ReturnType<typeof useBoard>,
  player: ReturnType<typeof usePlayer>
) => {
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
    if (domino && dominoIndex && target?.connection?.connects) {
      board.add(target.edge.position ?? 'start', target.connection.rotation, domino);
      player.hand.remove(dominoIndex);
    }

    setDomino(null);
    setDominoIndex(null);
    setDragging(false);
  }, [setDomino, dominoIndex, setDragging, board, domino, target, player]);

  return {
    domino,
    onDragStart,
    onDragEnd,
    dragging,
    dominoIndex,
    target,
  };
};

export default useDrag;
