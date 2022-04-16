import INITIAL_STATE from '@lib/game/globals/INITIAL_STATE';
import { cloneDeep } from 'lodash';
import { useEffect, useReducer } from 'react';
import gameReducer, { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer';

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
