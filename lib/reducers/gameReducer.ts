import INITIAL_STATE from '@lib/game/globals/INITIAL_STATE';
import toggleTurn from '@lib/game/toggleTurn';
import removeDomino from '@lib/game/player/removeDomino';
import { cloneDeep, shuffle } from 'lodash';
import { STARTING_HAND_SIZE } from '@lib/game/globals/SETTINGS';
import isDouble from '@lib/game/domino/isDouble';
import addDomino from '@lib/game/board/addDomino';
import draw from '@lib/game/player/draw';
import findMaxDomino from '@lib/game/player/findMaxDomino';
import sumDominos from '@lib/game/player/sumDominos';

export enum GAME_ACTIONS_TYPES {
  START,
  RESET,
  MAKE_PLAY,
  MAKE_ENEMY_PLAY,
  ENEMY_THINKING,
  DRAW_UNTIL_FIND_PLAY,
  SET_AI_ALGORITHM,
  DRAW,
  START_ROUND,
}

export type GameAction =
  | GAWithoutPayload
  | GAHandToBoard
  | GADrawUntilFindPlay
  | GASetAiAlgorithm
  | GADraw;

type GAWithoutPayload = {
  type:
    | GAME_ACTIONS_TYPES.START
    | GAME_ACTIONS_TYPES.RESET
    | GAME_ACTIONS_TYPES.MAKE_ENEMY_PLAY
    | GAME_ACTIONS_TYPES.START_ROUND;
};

type GAHandToBoard = {
  type: GAME_ACTIONS_TYPES.MAKE_PLAY;
  payload: { playerId: PlayerId; connection: Connection; index: number };
};

type GADrawUntilFindPlay = {
  type: GAME_ACTIONS_TYPES.DRAW_UNTIL_FIND_PLAY;
  payload: { playerId: PlayerId };
};

type GASetAiAlgorithm = {
  type: GAME_ACTIONS_TYPES.SET_AI_ALGORITHM;
  payload: AIAlgorithm;
};

type GADraw = {
  type: GAME_ACTIONS_TYPES.DRAW;
  payload: { playerId: PlayerId };
};

const startRound = (player: Player, enemy: Player) => {
  const updates: Partial<Game> = { roundOver: false };

  updates.turn = 'player';
  updates.board = INITIAL_STATE.board;
  updates.deck = shuffle(INITIAL_STATE.deck);
  updates.player = { ...player, hand: [] };
  updates.enemy = { ...enemy, hand: [] };

  const firstDraw = draw(updates.player, updates.deck, STARTING_HAND_SIZE);
  updates.player = firstDraw.player;
  updates.deck = firstDraw.deck;

  const secondDraw = draw(updates.enemy, updates.deck, STARTING_HAND_SIZE);
  updates.enemy = secondDraw.player;
  updates.deck = secondDraw.deck;

  const playerMax = findMaxDomino(updates.player);
  const enemyMax = findMaxDomino(updates.enemy);

  if (playerMax.index === undefined || enemyMax.index === undefined) return;

  if (playerMax.score > enemyMax.score) {
    const playUpdates = makePlay(
      updates.player,
      updates.board,
      'player',
      playerMax.index,
      {
        connects: true,
        rotation: isDouble(updates.player.hand[playerMax.index]) ? 0 : -90,
      }
    );

    return { ...updates, ...playUpdates };
  }

  const playUpdates = makePlay(updates.enemy, updates.board, 'enemy', enemyMax.index, {
    connects: true,
    rotation: isDouble(updates.enemy.hand[enemyMax.index]) ? 0 : -90,
  });

  return { ...updates, ...playUpdates };
};

const endRound = (result: RoundResult, game: Game) => {
  const updates: Partial<Game> = {};

  updates.roundOver = true;
  updates.roundResults = [...game.roundResults, result];

  if (result === 'DRAW') {
    updates.player = {
      ...game.player,
      money: game.player.money + sumDominos(game.enemy.hand),
    };
    updates.enemy = {
      ...game.enemy,
      money: game.enemy.money + sumDominos(game.player.hand),
    };
  } else if (result === 'ENEMY_WINS') {
    updates.enemy = {
      ...game.enemy,
      money: game.enemy.money + sumDominos(game.player.hand),
    };
  } else {
    updates.player = {
      ...game.player,
      money: game.player.money + sumDominos(game.enemy.hand),
    };
  }

  const newGame = { ...game, ...updates };

  if (newGame.roundResults.length >= 3) {
    let winner: Player | 'DRAW' | undefined;

    if (newGame.player.money > newGame.enemy.money) {
      winner = newGame.player;
    } else if (newGame.player.money < newGame.enemy.money) {
      winner = newGame.enemy;
    } else {
      winner = 'DRAW';
    }

    return { ...newGame, winner };
  }

  return newGame;
};

const startGame = (board: Board, player: Player, enemy: Player, deck: Domino[]) => {
  const updates: Partial<Game> = { playing: true };

  updates.deck = shuffle(deck);

  const firstDraw = draw(player, updates.deck, STARTING_HAND_SIZE);
  updates.player = firstDraw.player;
  updates.deck = firstDraw.deck;

  const secondDraw = draw(enemy, updates.deck, STARTING_HAND_SIZE);
  updates.enemy = secondDraw.player;
  updates.deck = secondDraw.deck;

  const playerMax = findMaxDomino(updates.player);
  const enemyMax = findMaxDomino(updates.enemy);

  if (playerMax.index === undefined || enemyMax.index === undefined) return;

  if (playerMax.score > enemyMax.score) {
    const playUpdates = makePlay(updates.player, board, 'player', playerMax.index, {
      connects: true,
      rotation: isDouble(updates.player.hand[playerMax.index]) ? 0 : -90,
    });

    return { ...updates, ...playUpdates };
  }

  const playUpdates = makePlay(updates.enemy, board, 'enemy', enemyMax.index, {
    connects: true,
    rotation: isDouble(updates.enemy.hand[enemyMax.index]) ? 0 : -90,
  });

  return { ...updates, ...playUpdates };
};

const resetGame = () => cloneDeep(INITIAL_STATE);

const makePlay = (
  player: Player,
  board: Board,
  turn: Turn,
  dominoIndex: number,
  connection: Connection
) => {
  if (turn !== player.type) return;

  const { player: newPlayer, domino } = removeDomino(player, dominoIndex);
  const newBoard = addDomino(board, domino, connection);
  const newTurn = toggleTurn(turn);

  return { [newPlayer.type]: newPlayer, board: newBoard, turn: newTurn };
};

const gameReducer = (state: Game, action: GameAction) => {
  let updates: Partial<Game> | undefined;

  switch (action.type) {
    case GAME_ACTIONS_TYPES.START:
      if (state.playing) return state;

      updates = startGame(state.board, state.player, state.enemy, state.deck);

      if (!updates) return state;
      return { ...state, ...updates };

    case GAME_ACTIONS_TYPES.RESET:
      return resetGame();

    case GAME_ACTIONS_TYPES.MAKE_PLAY:
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

    case GAME_ACTIONS_TYPES.SET_AI_ALGORITHM:
      const aiAlgorithm = action.payload;

      return { ...state, aiAlgorithm };

    case GAME_ACTIONS_TYPES.DRAW:
      const { playerId: playerId3 } = action.payload;

      if (state.deck.length === 0) {
        updates = endRound('DRAW', state);
        return { ...state, ...updates };
      }

      const drawUpdates = draw(state[playerId3], state.deck, 1);

      return { ...state, [playerId3]: drawUpdates.player, deck: drawUpdates.deck };

    case GAME_ACTIONS_TYPES.START_ROUND:
      updates = startRound(state.player, state.enemy);

      return { ...state, ...updates };
    default:
      throw new Error(`Unknown action: ${JSON.stringify(action)}`);
  }
};

export default gameReducer;
