const toggleTurn = (turn: PlayerId): PlayerId => (turn === 'player' ? 'enemy' : 'player');

export default toggleTurn;
