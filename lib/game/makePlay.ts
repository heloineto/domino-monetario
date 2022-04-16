import addDomino from './board/addDomino';
import removeDomino from './player/removeDomino';
import toggleTurn from './toggleTurn';

const makePlay = (
  player: Player,
  board: Board,
  turn: PlayerType,
  dominoIndex: number,
  connection: Connection
) => {
  if (turn !== player.type) return;

  const { newPlayer, domino } = removeDomino(player, dominoIndex);
  const newBoard = addDomino(board, domino, connection);
  const newTurn = toggleTurn(turn);

  return { [newPlayer.type]: newPlayer, board: newBoard, turn: newTurn };
};

export default makePlay;
