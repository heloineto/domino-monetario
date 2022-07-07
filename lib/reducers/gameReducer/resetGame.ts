import INITIAL_STATE from '@lib/game/globals/INITIAL_STATE';

const resetGame = (
  dominos?: Domino[],
  roundQuantity?: number,
  initialHandSize?: number
) => {
  const newGame: Game = {
    initialHandSize: initialHandSize ?? 13,
    playing: false,
    turn: 'player',
    dominos: dominos ?? INITIAL_STATE.dominos,
    deck: dominos ?? INITIAL_STATE.deck,
    player: {
      hand: [],
      money: 0,
      type: 'player',
    },
    enemy: {
      hand: [],
      money: 0,
      type: 'enemy',
    },
    board: {
      boardDominos: [],
      edges: {
        start: null,
        end: null,
      },
    },
    aiAlgorithm: 'GREEDY_SEARCH',
    round: {
      quantity: roundQuantity ?? INITIAL_STATE.round.quantity,
      over: false,
      results: [],
    },
    winner: null,
  };

  return newGame;
};

export default resetGame;
