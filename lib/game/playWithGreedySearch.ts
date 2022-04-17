import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer';
import getConnection from './domino/getConnection';

interface IGraph {
  piece?: IPlayablePiece;
  nextNode?: IGraph | null;
}

interface ISearchFunction {
  (playablePieces: Array<IPlayablePiece>): IPlayablePiece;
}

interface IPlayablePiece {
  piece: Domino;
  index: number;
  connection: Connection;
}

const piecePrice = (p?: Domino): number => (p ? +p?.[0] + +p?.[1] : -1);

const greedySearch: ISearchFunction = (playablePieces: Array<IPlayablePiece>) => {
  const peaks = [];

  const fn = (position: number): IPlayablePiece => {
    const actualPiecePrice = piecePrice(playablePieces[position].piece);

    if (piecePrice(playablePieces?.[position + 1]?.piece) > actualPiecePrice) {
      return fn(++position);
    }

    if (
      piecePrice(playablePieces?.[position - 1]?.piece || [-1, -1]) > actualPiecePrice
    ) {
      return fn(--position);
    }

    return playablePieces[position];
  };

  for (let i = 0; i < playablePieces.length; i++) {
    peaks.push(fn(i));
  }

  return peaks.sort().reverse()[0];
};

const mountGraph =
  (maxDeep: number) =>
  (searchFn: ISearchFunction) =>
  (player1Pieces: Array<Domino>) =>
  (player2Pieces: Array<Domino>) =>
  (edges: Array<Edge>): Array<IGraph | null> => {
    let actualDeep = 0;

    const mountNodeTree =
      (prevPieceSide: Edge) =>
      (actualPieces: Array<Domino>) =>
      (nextPieces: Array<Domino>): IGraph | null => {
        if (actualDeep++ > maxDeep) {
          return null;
        }

        const playablePieces: Array<IPlayablePiece> = actualPieces
          .map((piece, index) => ({
            piece,
            index,
            connection: getConnection(piece, prevPieceSide),
          }))
          .filter((piece) => piece.connection.connects)
          .map(({ piece, index, connection }) => ({ piece, index, connection }));

        if (!playablePieces.length) return null;

        const bestPiece = searchFn(playablePieces);

        const anotherPieces = actualPieces.slice(bestPiece.index, 1);
        const notPlayableSide: Edge = {
          value:
            bestPiece.piece[0] === prevPieceSide.value
              ? bestPiece.piece[1]
              : bestPiece.piece[0],
          position: bestPiece.connection.edge?.position || 'start',
        };

        return {
          piece: bestPiece,
          nextNode: mountNodeTree(notPlayableSide)(nextPieces)(anotherPieces),
        };
      };

    return edges.map((edge) => mountNodeTree(edge)(player1Pieces)(player2Pieces));
  };

const playWithGreedySearch = (
  player: Player,
  board: Board,
  dispatch: Dispatch<GameAction>
): IPlayablePiece | undefined => {
  const { start, end } = board.edges;
  const { hand } = player;

  if (!start || !end) throw new Error('missing board edges');

  const graph = mountGraph(2)(greedySearch)(hand)([])([start, end]);

  const pieceToPlayInStart = graph[0]?.piece;
  const pieceToPlayInEnd = graph[1]?.piece;

  const result =
    piecePrice(pieceToPlayInStart?.piece) > piecePrice(pieceToPlayInEnd?.piece)
      ? pieceToPlayInStart
      : pieceToPlayInEnd;

  if (!result) return;

  dispatch({
    type: GAME_ACTIONS_TYPES.MAKE_PLAY,
    payload: { playerType: 'enemy', connection: result.connection, index: result.index },
  });
};

export default playWithGreedySearch;
