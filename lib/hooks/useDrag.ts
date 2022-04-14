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
  const [targetRef, setTargetRef] = useState<RefObject<HTMLDivElement> | null>(null);
  const [targetEdge, setTargetEdge] = useState<Edge | null>(null);
  const [targetConnection, setTargetConnection] = useState<Connection | null>(null);

  const onDragStart = useCallback(
    (_domino: Domino, _dominoIndex: number) => {
      setDomino(_domino);
      setDominoIndex(_dominoIndex);
      setDragging(true);
    },
    [setDomino, setDragging]
  );

  const onDragEnd = useCallback(() => {
    if (domino && dominoIndex && targetConnection?.connects) {
      board.addDomino(targetEdge?.position ?? 'end', targetConnection.rotation, domino);
      player.setHand((hand) => {
        const _hand = [...hand];

        _hand.splice(dominoIndex, 1);

        return _hand;
      });
    }

    setDomino(null);
    setDragging(false);
  }, [
    setDomino,
    setDragging,
    board,
    domino,
    targetConnection,
    targetEdge?.position,
    player,
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
