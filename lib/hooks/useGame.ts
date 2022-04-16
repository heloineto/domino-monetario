import dominos from '@lib/algorithms/dominos';
import { cloneDeep, shuffle } from 'lodash';
import { useReducer } from 'react';

const INITIAL_STATE: Game = {
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
};

Object.freeze(INITIAL_STATE);

export enum GAME_ACTIONS_TYPES {
  START = 'START',
  RESET = 'RESET',
  HAND_TO_BOARD = 'HAND_TO_BOARD',
}

type GameActionTypes = keyof typeof GAME_ACTIONS_TYPES;

type GameAction = {
  type: GameActionTypes;
  payload?: GameActionPayloads;
};

type GameActionPayloads = {
  playerType: PlayerType;
  connection: Connection;
  index: number;
};

const STARTING_HAND_SIZE = 13;

//! This reducer is not a pure function, so it causes problems on strict mode.
//! Strict has been turned off.
const gameReducer = (state: Game, action: GameAction) => {
  let newState = { ...state };

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
    const playerMax = findMaxDomino(newState.player.hand);
    const enemyMax = findMaxDomino(newState.enemy.hand);

    if (playerMax.index === undefined || enemyMax.index === undefined) return;

    if (playerMax.score > enemyMax.score) {
      const [firstDomino] = newState.player.hand.splice(playerMax.index, 1);
      newState.turn = 'enemy';

      return firstDomino;
    }

    const [firstDomino] = newState.enemy.hand.splice(enemyMax.index, 1);
    newState.turn = 'player';

    return firstDomino;
  };

  const draw = (quantity = 0) => {
    const drawnDominos: Domino[] = [];

    for (let i = 0; i < quantity; i++) {
      const domino = newState.deck.pop();
      if (!domino) break;
      drawnDominos.push(domino);
    }

    return drawnDominos;
  };

  const addBoardDomino = (domino: Domino, connection: Connection) => {
    const { rotation } = connection;
    const boardDomino = { rotation, domino };

    if (connection.edge?.position === 'start') {
      newState.board.boardDominos.unshift(boardDomino);
      return;
    }

    newState.board.boardDominos.push(boardDomino);
  };

  const isDouble = (domino: Domino) => domino[0] === domino[1];

  const toggleTurn = () => {
    newState.turn = newState.turn === 'player' ? 'enemy' : 'player';
  };

  const opositeTurn = (turn: PlayerType) => {
    newState.turn = turn === 'player' ? 'enemy' : 'player';
  };

  switch (action.type) {
    case GAME_ACTIONS_TYPES.START:
      if (newState.playing) return newState;

      newState.playing = true;
      newState.deck = shuffle(newState.deck);
      newState.player.hand = draw(STARTING_HAND_SIZE);
      newState.enemy.hand = draw(STARTING_HAND_SIZE);
      const firstDomino = getFirstDomino();

      if (!firstDomino) return newState;

      addBoardDomino(firstDomino, {
        connects: true,
        rotation: isDouble(firstDomino) ? 0 : -90,
      });

      return newState;
    case GAME_ACTIONS_TYPES.RESET:
      newState = cloneDeep(INITIAL_STATE);

      return newState;
    case GAME_ACTIONS_TYPES.HAND_TO_BOARD:
      if (!action.payload) {
        console.error('No payload provided for action: ', action);
        return newState;
      }

      const { playerType, connection, index } = action.payload;

      const [domino] = newState[playerType].hand.splice(index, 1);

      addBoardDomino(domino, connection);

      opositeTurn(playerType);
      return newState;
    default:
      throw new Error();
  }
};

const useGame = () => {
  const [game, dispatch] = useReducer(gameReducer, cloneDeep(INITIAL_STATE));

  return { game, dispatch };
};

export default useGame;
