import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer';
import { useCallback, useState } from 'react';
import useGame from './useGame';

const useDrag = ({ game, dispatch }: ReturnType<typeof useGame>) => {
  const [dragging, setDragging] = useState(false);
  const [domino, setDomino] = useState<Domino | null>(null);
  const [dominoIndex, setDominoIndex] = useState<number | null>(null);
  const [target, setTarget] = useState<DragTarget | null>(null);

  const onDragStart = useCallback(
    (_domino: Domino, _dominoIndex: number) => {
      if (game.turn !== 'player') return;

      setDomino(_domino);
      setDominoIndex(_dominoIndex);
      setDragging(true);
    },
    [setDomino, setDragging, game.turn]
  );

  const onDragEnd = useCallback(() => {
    if (dominoIndex !== null && target?.connection?.connects) {
      dispatch({
        type: GAME_ACTIONS_TYPES.MAKE_PLAY,
        payload: {
          playerId: 'player',
          connection: target.connection,
          index: dominoIndex,
        },
      });
    }

    setDomino(null);
    setDominoIndex(null);
    setTarget(null);
    setDragging(false);
  }, [setDomino, dominoIndex, setDragging, target, dispatch]);

  return {
    domino,
    onDragStart,
    onDragEnd,
    dragging,
    dominoIndex,
    target,
    setTarget,
  };
};

export default useDrag;
