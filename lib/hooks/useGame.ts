import INITIAL_STATE from '@lib/game/globals/INITIAL_STATE';
import { cloneDeep } from 'lodash';
import { useEffect, useReducer } from 'react';
import gameReducer, { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer';
import playWithAStar from '@lib/game/playWithAStar';
import hasPlays from '@lib/game/player/hasPlays';
import playWithGreedySearch from '@lib/game/playWithGreedySearch';

const useGame = () => {
  const [game, dispatch] = useReducer(gameReducer, cloneDeep(INITIAL_STATE));

  useEffect(() => {
    if (!game.playing) return;
    if (game.roundOver) return;

    if (!hasPlays(game.board, game[game.turn])) {
      dispatch({
        type: GAME_ACTIONS_TYPES.DRAW,
        payload: { playerId: game.turn },
      });
    }

    if (game.turn === 'enemy') {
      if (game.aiAlgorithm === 'A_START') {
        playWithAStar(game, dispatch);
        return;
      }

      playWithGreedySearch(game.enemy, game.board, dispatch);
      return;
    }
  }, [game]);

  return { game, dispatch };
};

export default useGame;
