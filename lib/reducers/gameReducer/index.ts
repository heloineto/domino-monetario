import draw from '@lib/game/player/draw';
import startGame from './startGame';
import makePlay from './makePlay';
import endRound from './endRound';
import startRound from './startRound';
import resetGame from './resetGame';
import { GAME_ACTIONS_TYPES, GameAction } from './@types';
import toggleTurn from './toggleTurn';
import generateDominos from '@lib/game/generateDominos';

const gameReducer = (state: Game, action: GameAction) => {
  let updates: Partial<Game> | undefined;

  switch (action.type) {
    case GAME_ACTIONS_TYPES.START: {
      if (state.playing) return state;

      const { moneyValues, roundQuantity, initialHandSize } = action.payload;

      const dominos = generateDominos(moneyValues);

      const newGame = resetGame(dominos, roundQuantity, initialHandSize);

      updates = startGame(
        newGame.board,
        newGame.player,
        newGame.enemy,
        newGame.deck,
        newGame.initialHandSize
      );

      if (!updates) return newGame;
      return { ...newGame, ...updates };
    }

    case GAME_ACTIONS_TYPES.RESET: {
      return resetGame(state.dominos, state.round.quantity, state.initialHandSize);
    }

    case GAME_ACTIONS_TYPES.MAKE_PLAY: {
      const { playerId, connection, index } = action.payload;
      updates = makePlay(state[playerId], state.board, state.turn, index, connection);

      if (updates?.[playerId]?.hand.length === 0) {
        const newState = { ...state, ...updates };

        const endRoundUpdates = endRound(
          playerId === 'enemy' ? 'ENEMY_WINS' : 'PLAYER_WINS',
          newState
        );
        return { ...newState, ...endRoundUpdates };
      }

      if (!updates) return state;
      return { ...state, ...updates };
    }

    case GAME_ACTIONS_TYPES.SET_AI_ALGORITHM: {
      const aiAlgorithm = action.payload;

      return { ...state, aiAlgorithm };
    }

    case GAME_ACTIONS_TYPES.DRAW: {
      const { playerId } = action.payload;

      if (state.deck.length === 0) {
        updates = endRound('DRAW', state);
        return { ...state, ...updates };
      }

      const drawUpdates = draw(state[playerId], state.deck, 1);

      return { ...state, [playerId]: drawUpdates.player, deck: drawUpdates.deck };
    }

    case GAME_ACTIONS_TYPES.START_ROUND: {
      updates = startRound(
        state.player,
        state.enemy,
        state.round,
        state.dominos,
        state.initialHandSize
      );

      return { ...state, ...updates };
    }
    case GAME_ACTIONS_TYPES.TOGGLE_TURN: {
      updates = toggleTurn(state.turn);

      return { ...state, ...updates };
    }

    default:
      throw new Error(`Unknown action: ${JSON.stringify(action)}`);
  }
};

export default gameReducer;
