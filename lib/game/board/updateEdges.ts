import { isEmpty } from 'lodash';

const updateEdges = (board: Board): Board => {
  if (!board.boardDominos || isEmpty(board.boardDominos)) {
    const newEdges = { start: null, end: null };
    return { ...board, edges: newEdges };
  }

  const { rotation: startRotation, domino: startDomino } = board.boardDominos[0];
  const startValue = startDomino[startRotation === 90 ? 1 : 0];

  const { rotation: endRotation, domino: endDomino } =
    board.boardDominos[board.boardDominos.length - 1];

  const endValue = endDomino[endRotation === 90 ? 0 : 1];

  const newEdges = {
    start: { position: <Position>'start', value: startValue },
    end: { position: <Position>'end', value: endValue },
  };

  return { ...board, edges: newEdges };
};

export default updateEdges;
