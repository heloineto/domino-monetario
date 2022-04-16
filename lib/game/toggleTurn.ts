const toggleTurn = (turn: PlayerType): PlayerType =>
  turn === 'player' ? 'enemy' : 'player';

export default toggleTurn;
