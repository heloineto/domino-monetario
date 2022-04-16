import DOMINOS from './globals/DOMINOS';
//@ts-ignore
import nx from 'jsnetworkx';

const aStar = (board: Board, enemy: Player) => {
  // const remainingPieces = DOMINOS - (enemy.hand + board.boardDominos)

  var G = new nx.DiGraph();

  const boardPieces = board.boardDominos.map(({ domino }) => domino);

  // G.add_nodes_from([
  //   (0,
  //   {
  //     peça: [0],
  //     valor: 0,
  //     mesa: [table],
  //     hand: [player],
  //     pieces: [pieces],
  //     myTurn: true,
  //   }),
  // ]);
  return;
};

export default aStar;
