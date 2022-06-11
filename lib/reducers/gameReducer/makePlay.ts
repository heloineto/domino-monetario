import addDomino from '@lib/game/board/addDomino';
import removeDomino from '@lib/game/player/removeDomino';
import toggleTurn from '@lib/game/toggleTurn';

const makePlay = (
  player: Player,
  board: Board,
  turn: Turn,
  dominoIndex: number,
  connection: Connection
) => {
  if (turn !== player.type) return;

  const { player: newPlayer, domino } = removeDomino(player, dominoIndex);
  const newBoard = addDomino(board, domino, connection);
  const newTurn = toggleTurn(turn);

  return { [newPlayer.type]: newPlayer, board: newBoard, turn: newTurn };
};

export default makePlay;
