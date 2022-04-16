class Board {
  boardDominos: BoardDomino[] = [];

  constructor() {}

  addDomino(domino: Domino, connection: Connection) {
    const { rotation } = connection;
    const boardDomino = { rotation, domino };

    if (connection.edge?.position === 'start') {
      this.boardDominos.unshift(boardDomino);
      return;
    }

    this.boardDominos.push(boardDomino);
  }
}

export default Board;
