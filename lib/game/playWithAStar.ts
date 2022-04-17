import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer';
import { Dispatch } from 'react';

const playWithAStar = (game: Game, dispatch: Dispatch<GameAction>) => {
  fetch('https://peaceful-bastion-30528.herokuapp.com/', {
    method: 'POST',
    body: JSON.stringify({
      player: game.enemy.hand.map((domino) => domino.map((value) => Number(value))),
      table: game.board.boardDominos
        .map(({ domino, rotation }) => (rotation === 90 ? [...domino].reverse() : domino))
        .map((domino) => domino.map((value) => Number(value))),
      pieces: [...game.deck, ...game.player.hand].map((domino) =>
        domino.map((value) => Number(value))
      ),
    }),
  })
    .then((r) => {
      return r.json();
    })
    .then((r: { piece: [number, number]; side: string }) => {
      console.log({ r });
      dispatch({
        type: GAME_ACTIONS_TYPES.TEST,
        payload: {
          domino: [String(r.piece[0]) as MoneyValue, String(r.piece[1]) as MoneyValue],
          position: r.side,
        },
      });
    })
    .catch((e) => {
      console.log(e);
    });

  return;
};

export default playWithAStar;
