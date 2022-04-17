import INITIAL_STATE from '@lib/game/globals/INITIAL_STATE';
import getPlays from '@lib/game/getPlays';
import toggleTurn from '@lib/game/toggleTurn';
import removeDomino from '@lib/game/player/removeDomino';
import { cloneDeep, shuffle } from 'lodash';
import { STARTING_HAND_SIZE } from '@lib/game/globals/SETTINGS';
import isDouble from '@lib/game/domino/isDouble';
import addDomino from '@lib/game/board/addDomino';
import draw from '@lib/game/player/draw';
import findMaxDomino from '@lib/game/player/findMaxDomino';

export enum GAME_ACTIONS_TYPES {
  START,
  RESET,
  MAKE_PLAY,
  MAKE_ENEMY_PLAY,
  ENEMY_THINKING,
  DRAW_UNTIL_FIND_PLAY,
  TEST,
}

type GameAction = GAWithoutPayload | GAHandToBoard | GADrawUntilFindPlay | GATeste;

type GAWithoutPayload = {
  type:
    | GAME_ACTIONS_TYPES.START
    | GAME_ACTIONS_TYPES.RESET
    | GAME_ACTIONS_TYPES.MAKE_ENEMY_PLAY;
};

type GAHandToBoard = {
  type: GAME_ACTIONS_TYPES.MAKE_PLAY;
  payload: { playerType: PlayerType; connection: Connection; index: number };
};

type GADrawUntilFindPlay = {
  type: GAME_ACTIONS_TYPES.DRAW_UNTIL_FIND_PLAY;
  payload: { playerType: PlayerType; edges: (Edge | null)[] };
};

type GATeste = {
  type: GAME_ACTIONS_TYPES.TEST,
  payload: { domino: Domino; };
}

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

const makeEnemyPlay = (enemy: Player, board: Board, turn: Turn) => {
  const play = getPlays(enemy, board);

  if (!play) {
    console.log('Draw and recheck');

    const turn: Turn = 'player';

    return { turn };
  }

  const updates = makePlay(enemy, board, turn, play.index, play.connection);

  return updates;
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
      if (!action.payload) {
        console.error('No payload provided for action: ', action);
        return state;
      }

      const { playerType, connection, index } = action.payload;
      updates = makePlay(state[playerType], state.board, state.turn, index, connection);

      if (!updates) return state;
      return { ...state, ...updates };

    case GAME_ACTIONS_TYPES.MAKE_ENEMY_PLAY:
      updates = makeEnemyPlay(state.enemy, state.board, state.turn)

      if (!updates) return state;
      return { ...state, ...updates };

    case GAME_ACTIONS_TYPES.TEST:
      const { domino } = action.payload;
      console.log("RESPOSTA TESTE:", domino);

      return state;

    case GAME_ACTIONS_TYPES.DRAW_UNTIL_FIND_PLAY:
      return state;
    default:
      throw new Error(`Unknown action: ${JSON.stringify(action)}`);
  }
};

export default gameReducer;
