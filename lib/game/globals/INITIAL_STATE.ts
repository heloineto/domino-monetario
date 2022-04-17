import DOMINOS from '@lib/game/globals/DOMINOS';

const INITIAL_STATE: Game = {
  playing: false,
  turn: 'player',
  deck: DOMINOS,
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
  roundOver: false,
  aiAlgorithm: 'GREEDY_SEARCH',
  roundResults: [],
  winner: null,
};

Object.freeze(INITIAL_STATE);

export default INITIAL_STATE;
