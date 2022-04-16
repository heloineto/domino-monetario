import { isEmpty } from 'lodash';

const updateEdges = (board: Board): Board => {
  const newBoard = { ...board };

  if (!newBoard.boardDominos || isEmpty(newBoard.boardDominos)) {
    newBoard.edges = { start: null, end: null };
    return newBoard;
  }

  const { rotation: startRotation, domino: startDomino } = newBoard.boardDominos[0];
  const startValue = startDomino[startRotation === 90 ? 1 : 0];

  const { rotation: endRotation, domino: endDomino } =
    newBoard.boardDominos[newBoard.boardDominos.length - 1];

  const endValue = endDomino[endRotation === 90 ? 0 : 1];

  newBoard.edges = {
    start: { position: 'start', value: startValue },
    end: { position: 'end', value: endValue },
  };

  return newBoard;
};

export default updateEdges;
