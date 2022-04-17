import INITIAL_STATE from '@lib/game/globals/INITIAL_STATE';
import { cloneDeep } from 'lodash';
import { useEffect, useReducer } from 'react';
import gameReducer from '@lib/reducers/gameReducer';
import playWithAStar from '@lib/game/playWithAStar';
import playWithGreedySearch from '@lib/game/playWithGreedySearch';

const useGame = () => {
  const [game, dispatch] = useReducer(gameReducer, cloneDeep(INITIAL_STATE));

  useEffect(() => {
    if (game.turn === 'enemy') {
      playWithAStar(game, dispatch);
      playWithGreedySearch(game.enemy, game.board, dispatch);
    }
  }, [game]);

  return { game, dispatch };
};

export default useGame;
