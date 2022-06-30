import statelessToggleTurn from '@lib/game/toggleTurn';

const toggleTurn = (turn: Turn) => {
  const newTurn = statelessToggleTurn(turn);

  return { turn: newTurn };
};

export default toggleTurn;
