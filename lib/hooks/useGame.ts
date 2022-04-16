import dominos from '@lib/algorithms/dominos';
import { shuffle } from 'lodash';
import { useReducer } from 'react';

export enum GAME_ACTIONS_TYPES {
  START = 'START',
  HAND_TO_BOARD = 'HAND_TO_BOARD',
}

type GameActionTypes = keyof typeof GAME_ACTIONS_TYPES;

type GameAction = {
  type: GameActionTypes;
  payload?: any;
};

type PAYLOADS = {};

const STARTING_HAND_SIZE = 13;

const gameReducer = (state: Game, action: GameAction) => {
  const findMaxDomino = (hand: Domino[]) => {
    let maxScore = -1;
    let maxIndex: number | undefined;

    for (let i = 0; i < hand.length; i++) {
      const domino = hand[i];

      let score = Number(domino[0]) + Number(domino[1]);
      if (domino[0] === domino[1]) score += 1000;

      if (score > maxScore) {
        maxScore = score;
        maxIndex = i;
      }
    }

    return { index: maxIndex, score: maxScore };
  };

  const getFirstDomino = () => {
    const playerMax = findMaxDomino(state.player.hand);
    const enemyMax = findMaxDomino(state.enemy.hand);

    if (playerMax.index === undefined || enemyMax.index === undefined) return;

    if (playerMax.score > enemyMax.score) {
      const [firstDomino] = state.player.hand.splice(playerMax.index, 1);
      state.turn = 'enemy';

      return firstDomino;
    }

    const [firstDomino] = state.enemy.hand.splice(enemyMax.index, 1);
    state.turn = 'player';

    return firstDomino;
  };

  const draw = (quantity = 0) => {
    const drawnDominos: Domino[] = [];

    for (let i = 0; i < quantity; i++) {
      const domino = state.deck.pop();
      if (!domino) break;
      drawnDominos.push(domino);
    }

    return drawnDominos;
  };

  const addBoardDomino = (domino: Domino, connection: Connection) => {
    const { rotation } = connection;
    const boardDomino = { rotation, domino };

    if (connection.edge?.position === 'start') {
      state.board.boardDominos.unshift(boardDomino);
      return;
    }

    state.board.boardDominos.push(boardDomino);
  };

  const isDouble = (domino: Domino) => domino[0] === domino[1];

  switch (action.type) {
    case GAME_ACTIONS_TYPES.START:
      state.deck = shuffle(state.deck);
      state.playing = true;
      state.player.hand = draw(STARTING_HAND_SIZE);
      state.enemy.hand = draw(STARTING_HAND_SIZE);
      const firstDomino = getFirstDomino();

      if (!firstDomino) return { ...state };

      addBoardDomino(firstDomino, {
        connects: true,
        rotation: isDouble(firstDomino) ? 0 : -90,
      });

      return { ...state };
    case GAME_ACTIONS_TYPES.HAND_TO_BOARD:
      const { playerType } = action.payload;

      return { ...state };
    default:
      throw new Error();
  }
};

const useGame = () => {
  const [game, dispatch] = useReducer(gameReducer, {
    playing: false,
    turn: 'player',
    deck: dominos,
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
  });

  return { game, dispatch };
};

export default useGame;
