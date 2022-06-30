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
  TOGGLE_TURN,
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
    | GAME_ACTIONS_TYPES.START_ROUND
    | GAME_ACTIONS_TYPES.TOGGLE_TURN;
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
