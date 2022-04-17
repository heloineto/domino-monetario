type GameAction = GAWithoutPayload | GAHandToBoard | GADrawUntilFindPlay;

type GAWithoutPayload = {
  type:
    | GAME_ACTIONS_TYPES.START
    | GAME_ACTIONS_TYPES.RESET
    | GAME_ACTIONS_TYPES.MAKE_ENEMY_PLAY
    | GAME_ACTIONS_TYPES.ENEMY_THINKING
};

type GAHandToBoard = {
  type: GAME_ACTIONS_TYPES.MAKE_PLAY;
  payload: {
    playerType: PlayerType;
    connection: Connection;
    index: number;
  };
};

type GADrawUntilFindPlay = {
  type: GAME_ACTIONS_TYPES.DRAW_UNTIL_FIND_PLAY;
  payload: {
    playerType: PlayerType;
    edges: (Edge | null)[];
  };
};
