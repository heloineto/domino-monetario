const toggleTurn = (turn: playerId): playerId => (turn === 'player' ? 'enemy' : 'player');

export default toggleTurn;
