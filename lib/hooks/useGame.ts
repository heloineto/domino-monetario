import getPlays from '@lib/game/getPlays';
import INITIAL_STATE from '@lib/game/globals/INITIAL_STATE';
import makePlay from '@lib/game/makePlay';
import toggleTurn from '@lib/game/toggleTurn';
import { cloneDeep, isEmpty, shuffle } from 'lodash';
import { useEffect, useReducer } from 'react';

export enum GAME_ACTIONS_TYPES {
  START = 'START',
  RESET = 'RESET',
  HAND_TO_BOARD = 'HAND_TO_BOARD',
  MAKE_ENEMY_PLAY = 'MAKE_ENEMY_PLAY',
}

type GameAction =
  | {
      type:
        | GAME_ACTIONS_TYPES.START
        | GAME_ACTIONS_TYPES.RESET
        | GAME_ACTIONS_TYPES.MAKE_ENEMY_PLAY;
    }
  | GameActionHandToBoard;

type GameActionHandToBoard = {
  type: GAME_ACTIONS_TYPES.HAND_TO_BOARD;
  payload: {
    playerType: PlayerType;
    connection: Connection;
    index: number;
  };
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

    updateBoardEdges();
  };

  const updateBoardEdges = () => {
    if (!newState.board.boardDominos || isEmpty(newState.board.boardDominos)) {
      newState.board.edges = { start: null, end: null };
      return;
    }

    const { rotation: startRotation, domino: startDomino } =
      newState.board.boardDominos[0];
    const startValue = startDomino[startRotation === 90 ? 1 : 0];

    const { rotation: endRotation, domino: endDomino } =
      newState.board.boardDominos[newState.board.boardDominos.length - 1];

    const endValue = endDomino[endRotation === 90 ? 0 : 1];

    newState.board.edges = {
      start: { position: 'start', value: startValue },
      end: { position: 'end', value: endValue },
    };
  };

  const isDouble = (domino: Domino) => domino[0] === domino[1];

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
    case GAME_ACTIONS_TYPES.MAKE_ENEMY_PLAY:
      const plays = getPlays(newState.enemy, newState.board);

      console.log(plays);

      if (isEmpty(plays)) {
        //! Draw and recheck

        const turn = toggleTurn(state.turn);

        return { ...state, turn };
      }

      const play = plays[Math.floor(Math.random() * plays.length)];

      const updates = makePlay(
        state.enemy,
        state.board,
        state.turn,
        play.index,
        play.connection
      );

      console.log(updates);

      if (!updates) return state;

      return { ...state, ...updates };
    default:
      throw new Error(`Unknown action: ${JSON.stringify(action)}`);
  }
};

const useGame = () => {
  const [game, dispatch] = useReducer(gameReducer, cloneDeep(INITIAL_STATE));

  useEffect(() => {
    if (game.turn === 'enemy') {
      dispatch({ type: GAME_ACTIONS_TYPES.MAKE_ENEMY_PLAY });
    }
  }, [game.turn]);

  return { game, dispatch };
};

export default useGame;
