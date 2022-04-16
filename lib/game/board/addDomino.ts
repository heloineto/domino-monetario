import updateEdges from './updateEdges';

const addDomino = (board: Board, domino: Domino, connection: Connection): Board => {
  const newBoard = { ...board };

  const { rotation } = connection;
  const boardDomino = { rotation, domino };

  if (connection.edge?.position === 'start') {
    newBoard.boardDominos = [boardDomino, ...board.boardDominos];
    return updateEdges(newBoard);
  }

  newBoard.boardDominos = [...board.boardDominos, boardDomino];
  return updateEdges(newBoard);
};

export default addDomino;
